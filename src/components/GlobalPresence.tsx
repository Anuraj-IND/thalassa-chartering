'use client';

import styled from 'styled-components';
import { Container, Section, Eyebrow, SectionHead, Reveal } from './ui';
import { globalPresence as gp } from '@/data/siteData';

const Map = styled.div`
  position: relative;
  margin-top: 8px;
  border: 1px solid ${({ theme }) => theme.colors.borderOnDark};
  border-radius: ${({ theme }) => theme.layout.radiusLg};
  background:
    radial-gradient(circle, rgba(140, 180, 195, 0.34) 1.4px, transparent 1.6px);
  background-size: 22px 22px;
  background-color: ${({ theme }) => theme.colors.ocean};
  aspect-ratio: 16 / 7;
  overflow: hidden;
  -webkit-mask-image: radial-gradient(ellipse 120% 120% at 50% 40%, #000 60%, transparent 100%);
  mask-image: radial-gradient(ellipse 120% 120% at 50% 40%, #000 60%, transparent 100%);
`;

const Marker = styled.span<{ $x: number; $y: number; $d: number }>`
  position: absolute;
  left: ${({ $x }) => $x}%;
  top: ${({ $y }) => $y}%;
  width: 12px;
  height: 12px;
  transform: translate(-50%, -50%);

  &::before, &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50%;
  }
  &::before {
    background: ${({ theme }) => theme.colors.orange};
    box-shadow: 0 0 12px rgba(244, 122, 50, 0.8);
  }
  &::after {
    border: 2px solid ${({ theme }) => theme.colors.orange};
    animation: pulse 2.6s ease-out infinite;
    animation-delay: ${({ $d }) => $d}ms;
  }

  @keyframes pulse {
    0% { transform: scale(1); opacity: 0.8; }
    70% { transform: scale(3.4); opacity: 0; }
    100% { transform: scale(3.4); opacity: 0; }
  }
`;

const Note = styled.div`
  position: absolute;
  left: 50%;
  bottom: 22px;
  transform: translateX(-50%);
  text-align: center;

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
            {gp.markers.map((m, i) => (
              <Marker key={i} $x={m.x} $y={m.y} $d={i * 320} />
            ))}
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
