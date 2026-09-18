'use client';

import styled from 'styled-components';
import { Container, Button } from './ui';
import { ArrowRight, ArrowDown } from './icons';
import { hero } from '@/data/siteData';

const Wrap = styled.section`
  position: relative;
  min-height: 100svh;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.navy};
  isolation: isolate;
  overflow: hidden;
`;

const Bg = styled.video`
  position: absolute;
  inset: 0;
  z-index: -2;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center right;
`;

/* Cinematic dark-blue overlay — readable text without hiding the ship.
   Stronger on the left (behind copy), lighter on the right (over the vessel). */
const Overlay = styled.div`
  position: absolute;
  inset: 0;
  z-index: -1;
  background:
    linear-gradient(90deg, rgba(4,30,40,0.92) 0%, rgba(5,32,42,0.82) 34%, rgba(6,44,59,0.5) 66%, rgba(6,44,59,0.28) 100%),
    linear-gradient(0deg, rgba(4,20,28,0.72) 0%, rgba(4,20,28,0) 42%);
`;

const Inner = styled(Container)`
  padding-block: clamp(120px, 16vh, 200px);
`;

const Content = styled.div`
  max-width: 760px;
`;

const Eyebrow = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 9px 16px;
  border: 1px solid rgba(244, 122, 50, 0.6);
  border-radius: ${({ theme }) => theme.layout.radiusPill};
  background: rgba(244, 122, 50, 0.10);
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 12px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #fff;

  @media (max-width: 520px) {
    font-size: 10.5px;
    letter-spacing: 0.08em;
    padding: 8px 13px;
    line-height: 1.5;
  }
`;

const Title = styled.h1`
  margin-top: 28px;
  color: #fff;
  font-size: clamp(36px, 11vw, 88px);
  font-weight: 700;
  line-height: 1.04;
  letter-spacing: -0.02em;

  @media (max-width: 520px) { margin-top: 22px; }
`;

const Body = styled.p`
  margin-top: 26px;
  max-width: 560px;
  font-size: clamp(16px, 1.6vw, 19px);
  line-height: 1.65;
  color: rgba(235, 243, 245, 0.86);
`;

const Actions = styled.div`
  margin-top: 38px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  @media (max-width: 520px) {
    margin-top: 30px;
    gap: 12px;
    a { flex: 1 1 100%; }
  }
`;

const Trust = styled.p`
  margin-top: 30px;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 13px;
  letter-spacing: 0.04em;
  color: rgba(235, 243, 245, 0.66);
`;

const Scroll = styled.a`
  position: absolute;
  left: 50%;
  bottom: 26px;
  transform: translateX(-50%);
  z-index: 1;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  color: rgba(255, 255, 255, 0.7);
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 10.5px;
  letter-spacing: 0.2em;
  text-transform: uppercase;

  svg { animation: bob 1.8s ease-in-out infinite; }
  &:hover { color: #fff; }

  @keyframes bob {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(6px); }
  }
`;

export default function Hero() {
  return (
    <Wrap id="home">
      <Bg
        autoPlay
        muted
        loop
        playsInline
        poster="/assets/cargo-ship-poster.jpg"
        aria-hidden="true"
      >
        <source src="/assets/cargo-ship.webm" type="video/webm" />
        <source src="/assets/cargo-ship.mp4" type="video/mp4" />
      </Bg>
      <Overlay />

      <Inner as="div">
        <Content>
          <Eyebrow>{hero.eyebrow}</Eyebrow>
          <Title>
            {hero.titleLine1}
            <br />
            {hero.titleLine2}
          </Title>
          <Body>{hero.body}</Body>
          <Actions>
            <Button as="a" href={hero.primaryCta.href} $variant="primary">
              {hero.primaryCta.label} <ArrowRight size={18} />
            </Button>
            <Button as="a" href={hero.secondaryCta.href} $variant="outlineLight">
              {hero.secondaryCta.label}
            </Button>
          </Actions>
          <Trust>{hero.trust}</Trust>
        </Content>
      </Inner>

      <Scroll href="#about" aria-label="Scroll to About">
        Scroll
        <ArrowDown size={20} />
      </Scroll>
    </Wrap>
  );
}
