'use client';

import styled from 'styled-components';
import { Container, Section, Eyebrow, SectionHead, Reveal } from './ui';
import { clients } from '@/data/siteData';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1px;
  background: ${({ theme }) => theme.colors.border};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.layout.radiusLg};
  overflow: hidden;

  @media (min-width: 700px) { grid-template-columns: repeat(3, 1fr); }
`;

/* Neutral placeholder tiles — real client/partner marks drop in here later. */
const Tile = styled.div`
  background: ${({ theme }) => theme.colors.white};
  height: 118px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 13px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.bodyOnLight};
  opacity: 0.7;
  transition: opacity 0.22s ease, color 0.22s ease;
  &:hover { opacity: 1; color: ${({ theme }) => theme.colors.navy}; }
`;

export default function ClientsPartners() {
  return (
    <Section id="clients" $bg="light">
      <Container>
        <SectionHead $center>
          <Eyebrow>{clients.eyebrow}</Eyebrow>
          <h2>{clients.heading}</h2>
          <p>{clients.body}</p>
        </SectionHead>
        <Reveal>
          <Grid>
            {clients.logos.map((l, i) => (
              <Tile key={i}>{l}</Tile>
            ))}
          </Grid>
        </Reveal>
      </Container>
    </Section>
  );
}
