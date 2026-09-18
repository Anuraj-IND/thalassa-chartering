'use client';

import styled from 'styled-components';
import { Container, Section, Eyebrow, SectionHead, Reveal } from './ui';
import ServiceCard from './ServiceCard';
import { services } from '@/data/siteData';

const Head = styled(SectionHead)`
  .sub {
    margin-top: 14px;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.bodyOnLight};
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 26px;

  @media (min-width: 720px) { grid-template-columns: 1fr 1fr; }
  @media (min-width: 1200px) { grid-template-columns: repeat(4, 1fr); }
`;

export default function ServicesSection() {
  return (
    <Section id="services" $bg="white">
      <Container>
        <Head>
          <Eyebrow>{services.eyebrow}</Eyebrow>
          <h2>{services.heading}</h2>
          <p className="sub">{services.subtitle}</p>
        </Head>
        <Grid>
          {services.items.map((s, i) => (
            <Reveal key={s.key} delay={i * 90}>
              <ServiceCard service={s} />
            </Reveal>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
