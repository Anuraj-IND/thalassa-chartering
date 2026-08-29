'use client';

import styled, { css } from 'styled-components';
import React, { useEffect, useRef, useState } from 'react';

/* Layout container — centers content and applies responsive gutters. */
export const Container = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding-inline: ${({ theme }) => theme.layout.gutter};
`;

type Bg = 'light' | 'white' | 'navy' | 'deep';

const bgMap = {
  light: (t: any) => ({ background: t.colors.offWhite, color: t.colors.headingOnLight }),
  white: (t: any) => ({ background: t.colors.white, color: t.colors.headingOnLight }),
  navy: (t: any) => ({ background: t.colors.navy, color: '#fff' }),
  deep: (t: any) => ({ background: t.colors.navyDeep, color: '#fff' }),
};

/* Full-bleed section with a themed background. */
export const Section = styled.section<{ $bg?: Bg; $pad?: string }>`
  position: relative;
  ${({ theme, $bg = 'light' }) => {
    const s = bgMap[$bg](theme);
    return css`background: ${s.background}; color: ${s.color};`;
  }}
  padding-block: ${({ $pad }) => $pad ?? 'clamp(72px, 9vw, 128px)'};
`;

/* Small mono uppercase label with a leading orange dot. */
export const Eyebrow = styled.span<{ $onDark?: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 9px;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 12.5px;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.orange};

  &::before {
    content: '';
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.orange};
  }
`;

/* Section heading + optional intro paragraph grouping. */
export const SectionHead = styled.div<{ $dark?: boolean; $center?: boolean }>`
  max-width: 760px;
  margin-bottom: clamp(40px, 5vw, 64px);
  ${({ $center }) => $center && css`margin-inline: auto; text-align: center;`}

  h2 {
    margin-top: 16px;
    font-size: clamp(30px, 4.4vw, 52px);
    letter-spacing: -0.02em;
    color: ${({ theme, $dark }) => ($dark ? '#fff' : theme.colors.headingOnLight)};
  }

  p {
    margin-top: 18px;
    font-size: 17px;
    line-height: 1.65;
    color: ${({ theme, $dark }) => ($dark ? theme.colors.bodyOnDark : theme.colors.bodyOnLight)};
  }
`;

type ButtonVariant = 'primary' | 'light' | 'outlineDark' | 'outlineLight';

const variants = {
  primary: css`
    background: ${({ theme }) => theme.colors.orange};
    color: #fff;
    border: 1px solid ${({ theme }) => theme.colors.orange};
    box-shadow: 0 8px 22px rgba(244, 122, 50, 0.28);
    &:hover { background: ${({ theme }) => theme.colors.orangeLight}; border-color: ${({ theme }) => theme.colors.orangeLight}; }
  `,
  light: css`
    background: #fff;
    color: ${({ theme }) => theme.colors.navy};
    border: 1px solid #fff;
    &:hover { background: ${({ theme }) => theme.colors.offWhite}; }
  `,
  outlineDark: css`
    background: transparent;
    color: ${({ theme }) => theme.colors.navy};
    border: 1px solid ${({ theme }) => theme.colors.borderStrong};
    &:hover { border-color: ${({ theme }) => theme.colors.navy}; }
  `,
  outlineLight: css`
    background: transparent;
    color: #fff;
    border: 1px solid rgba(255, 255, 255, 0.45);
    &:hover { background: rgba(255, 255, 255, 0.10); border-color: rgba(255,255,255,0.7); }
  `,
};

export const Button = styled.button<{ $variant?: ButtonVariant; $block?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: ${({ $block }) => ($block ? '100%' : 'auto')};
  padding: 15px 28px;
  border-radius: ${({ theme }) => theme.layout.radius};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0.01em;
  transition: background 0.2s ease, border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
  ${({ $variant = 'primary' }) => variants[$variant]}

  &:hover { transform: translateY(-1px); }
  &:active { transform: translateY(0); }
  svg { flex-shrink: 0; }
`;

/* Fade-up reveal on scroll (IntersectionObserver, respects reduced motion). */
const RevealWrap = styled.div<{ $shown: boolean; $delay: number }>`
  opacity: ${({ $shown }) => ($shown ? 1 : 0)};
  transform: translateY(${({ $shown }) => ($shown ? '0' : '22px')});
  transition: opacity 0.7s ease ${({ $delay }) => $delay}ms,
    transform 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${({ $delay }) => $delay}ms;

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    transform: none;
  }
`;

export function Reveal({
  children,
  delay = 0,
  as,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  as?: React.ElementType;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <RevealWrap ref={ref} as={as} className={className} $shown={shown} $delay={delay}>
      {children}
    </RevealWrap>
  );
}
