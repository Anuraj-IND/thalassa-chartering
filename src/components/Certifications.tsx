'use client';

import styled from 'styled-components';
import { Container, Section, Eyebrow, SectionHead, Reveal } from './ui';
import { CheckCircle } from './icons';
import { certifications } from '@/data/siteData';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 18px;

  @media (min-width: 640px) { grid-template-columns: 1fr 1fr; }
  @media (min-width: 1024px) { grid-template-columns: repeat(4, 1fr); }
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 22px 22px;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.layout.radius};

  .ico { color: ${({ theme }) => theme.colors.orange}; display: flex; flex-shrink: 0; }
  span {
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 13px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.headingOnLight};
  }
`;

export default function Certifications() {
  return (
    <Section id="certifications" $bg="white">
      <Container>
        <SectionHead>
          <Eyebrow>{certifications.eyebrow}</Eyebrow>
          <h2>{certifications.heading}</h2>
          <p>{certifications.body}</p>
        </SectionHead>
        <Grid>
          {certifications.items.map((c, i) => (
            <Reveal key={c + i} delay={i * 70}>
              <Item>
                <span className="ico"><CheckCircle size={22} /></span>
                <span>{c}</span>
              </Item>
            </Reveal>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
