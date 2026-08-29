'use client';

import styled from 'styled-components';
import { Container, Section, Eyebrow, SectionHead, Reveal } from './ui';
import LeaderCard from './LeaderCard';
import { leadership } from '@/data/siteData';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;

  @media (min-width: 900px) { grid-template-columns: repeat(4, 1fr); }
`;

export default function LeadershipSection() {
  return (
    <Section id="leadership" $bg="white">
      <Container>
        <SectionHead>
          <Eyebrow>{leadership.eyebrow}</Eyebrow>
          <h2>{leadership.heading}</h2>
          <p>{leadership.body}</p>
        </SectionHead>
        <Grid>
          {leadership.members.map((m, i) => (
            <Reveal key={i} delay={i * 80}>
              <LeaderCard leader={m} />
            </Reveal>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
