'use client';

import styled from 'styled-components';
import { useEffect, useRef } from 'react';
import { Container, Button, Reveal } from './ui';
import { ArrowRight } from './icons';
import { contactCta } from '@/data/siteData';

const Wrap = styled.section`
  position: relative;
  isolation: isolate;
  overflow: hidden;
  padding-block: clamp(88px, 12vw, 160px);
  background: ${({ theme }) => theme.colors.navyDeep};
`;

/* Oversized so the parallax translate never reveals the section edges. */
const Bg = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: -15%;
  height: 130%;
  z-index: -2;
  background: url('/images/project-maritime.jpg') center/cover;
  will-change: transform;
  transform: scale(1.05);
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  z-index: -1;
  background: linear-gradient(90deg, rgba(4,30,40,0.94) 0%, rgba(6,44,59,0.8) 55%, rgba(6,44,59,0.66) 100%);
`;

const Inner = styled(Container)`
  text-align: center;
  max-width: 820px;

  h2 {
    font-size: clamp(32px, 5vw, 60px);
    letter-spacing: -0.02em;
    color: #fff;
  }
  p {
    margin: 20px auto 0;
    max-width: 560px;
    font-size: 18px;
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.bodyOnDark};
  }
`;

const Actions = styled.div`
  margin-top: 36px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
`;

export default function CTASection() {
  const wrapRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const bg = bgRef.current;
    if (!wrap || !bg) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;

    // Strength of the parallax drift (fraction of scroll distance).
    const SPEED = 0.18;
    let ticking = false;

    const update = () => {
      ticking = false;
      const rect = wrap.getBoundingClientRect();
      // Only compute while the section is anywhere near the viewport.
      if (rect.bottom < 0 || rect.top > window.innerHeight) return;
      // Distance of the section's center from the viewport center.
      const fromCenter = rect.top + rect.height / 2 - window.innerHeight / 2;
      const shift = -fromCenter * SPEED;
      bg.style.transform = `translate3d(0, ${shift}px, 0) scale(1.05)`;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <Wrap ref={wrapRef}>
      <Bg ref={bgRef} />
      <Overlay />
      <Reveal>
        <Inner as="div">
          <h2>{contactCta.heading}</h2>
          <p>{contactCta.body}</p>
          <Actions>
            <Button as="a" href={contactCta.primaryCta.href} $variant="primary">
              {contactCta.primaryCta.label} <ArrowRight size={18} />
            </Button>
            <Button as="a" href={contactCta.secondaryCta.href} $variant="outlineLight">
              {contactCta.secondaryCta.label}
            </Button>
          </Actions>
        </Inner>
      </Reveal>
    </Wrap>
  );
}
