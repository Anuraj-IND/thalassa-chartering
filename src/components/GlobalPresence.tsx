'use client';

import styled from 'styled-components';
import dynamic from 'next/dynamic';
import { Container, Section, Eyebrow, SectionHead, Reveal } from './ui';
import { globalPresence as gp } from '@/data/siteData';

const WorldMap = dynamic(() => import('./WorldMap'), {
  ssr: false,
  loading: () => <div className="worldmap" />,
});

const Map = styled.div`
  position: relative;
  margin-top: 8px;

  .worldmap {
    position: relative;
    aspect-ratio: 16 / 11;
    border: 1px solid ${({ theme }) => theme.colors.borderOnDark};
    border-radius: ${({ theme }) => theme.layout.radiusLg};
    overflow: hidden;
    background: ${({ theme }) => theme.colors.ocean};
  }
  .leaflet-container {
    background: ${({ theme }) => theme.colors.ocean};
    font-family: ${({ theme }) => theme.fonts.body};
  }

  @media (min-width: 640px) {
    border: 1px solid ${({ theme }) => theme.colors.borderOnDark};
    border-radius: ${({ theme }) => theme.layout.radiusLg};
    background: ${({ theme }) => theme.colors.ocean};
    aspect-ratio: 16 / 7;
    overflow: hidden;

    .worldmap {
      position: absolute;
      inset: 0;
      aspect-ratio: auto;
      border: none;
      border-radius: 0;
    }
  }
`;

const Note = styled.div`
  text-align: center;
  margin-top: 14px;
  background: rgba(4, 30, 40, 0.72);
  border: 1px solid ${({ theme }) => theme.colors.borderOnDark};
  border-radius: 12px;
  padding: 12px 22px;

  @media (min-width: 640px) {
    position: absolute;
    left: 50%;
    bottom: 18px;
    transform: translateX(-50%);
    margin-top: 0;
    width: max-content;
    max-width: 90%;
  }

  .label {
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 13px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #fff;
  }
  .sub {
    margin-top: 6px;
    font-size: 13px;
    color: ${({ theme }) => theme.colors.bodyOnDark};
  }
`;

export default function GlobalPresence() {
  return (
    <Section id="global" $bg="navy">
      <Container>
        <SectionHead $dark>
          <Eyebrow>{gp.eyebrow}</Eyebrow>
          <h2>{gp.heading}</h2>
          <p>{gp.body}</p>
        </SectionHead>
        <Reveal>
          <Map>
            <WorldMap />
            <Note>
              <div className="label">{gp.networkLabel}</div>
              <div className="sub">{gp.networkNote}</div>
            </Note>
          </Map>
        </Reveal>
      </Container>
    </Section>
  );
}
