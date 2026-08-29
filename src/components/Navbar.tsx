'use client';

import styled, { css } from 'styled-components';
import { useEffect, useState } from 'react';
import { Anchor, Menu, Close } from './icons';
import { brand, nav } from '@/data/siteData';

const Bar = styled.header<{ $solid: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  transition: background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease, backdrop-filter 0.3s ease;
  ${({ $solid, theme }) =>
    $solid
      ? css`
          background: rgba(4, 30, 40, 0.82);
          backdrop-filter: saturate(160%) blur(12px);
          border-bottom: 1px solid ${theme.colors.borderOnDark};
          box-shadow: 0 8px 30px rgba(4, 15, 20, 0.28);
        `
      : css`
          background: transparent;
          border-bottom: 1px solid transparent;
        `}
`;

const Inner = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.layout.gutter};
  height: 74px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
`;

const Word = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 11px;
  color: #fff;
  .mark { color: ${({ theme }) => theme.colors.orange}; display: flex; }
  .name {
    font-family: ${({ theme }) => theme.fonts.display};
    font-weight: 700;
    font-size: 21px;
    letter-spacing: 0.14em;
  }
`;

const Links = styled.nav`
  display: none;
  align-items: center;
  gap: 30px;

  @media (min-width: 1024px) { display: flex; }

  a {
    position: relative;
    font-size: 14.5px;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.82);
    transition: color 0.18s ease;
    &:hover { color: #fff; }
    &::after {
      content: '';
      position: absolute;
      left: 0; bottom: -6px;
      width: 0; height: 2px;
      background: ${({ theme }) => theme.colors.orange};
      transition: width 0.22s ease;
    }
    &:hover::after { width: 100%; }
  }
`;

const Cta = styled.a`
  display: none;
  padding: 11px 20px;
  border-radius: ${({ theme }) => theme.layout.radius};
  background: ${({ theme }) => theme.colors.orange};
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  transition: background 0.18s ease, transform 0.18s ease;
  &:hover { background: ${({ theme }) => theme.colors.orangeLight}; transform: translateY(-1px); }
  @media (min-width: 1024px) { display: inline-flex; }
`;

const Burger = styled.button`
  display: inline-flex;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.borderOnDark};
  border-radius: 9px;
  color: #fff;
  padding: 8px;
  @media (min-width: 1024px) { display: none; }
`;

const Sheet = styled.div<{ $open: boolean }>`
  position: fixed;
  inset: 0;
  z-index: 99;
  background: ${({ theme }) => theme.colors.navyDeep};
  padding: 96px ${({ theme }) => theme.layout.gutter} 40px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  transition: opacity 0.25s ease, transform 0.25s ease;
  ${({ $open }) =>
    $open
      ? css`opacity: 1; transform: translateY(0); pointer-events: auto;`
      : css`opacity: 0; transform: translateY(-12px); pointer-events: none;`}

  a {
    color: #fff;
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: 24px;
    font-weight: 600;
    padding: 14px 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.borderOnDark};
  }
  .m-cta {
    margin-top: 22px;
    text-align: center;
    background: ${({ theme }) => theme.colors.orange};
    border: none;
    border-radius: ${({ theme }) => theme.layout.radius};
    font-size: 17px;
  }
  @media (min-width: 1024px) { display: none; }
`;

export default function Navbar() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <Bar $solid={solid || open}>
        <Inner>
          <Word href="#home" aria-label={`${brand.name} home`}>
            <span className="mark"><Anchor size={24} /></span>
            <span className="name">{brand.name}</span>
          </Word>

          <Links>
            {nav.links.map((l) => (
              <a key={l.label} href={l.href}>{l.label}</a>
            ))}
          </Links>

          <Cta href={nav.cta.href}>{nav.cta.label}</Cta>

          <Burger aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen((v) => !v)}>
            {open ? <Close /> : <Menu />}
          </Burger>
        </Inner>
      </Bar>

      <Sheet $open={open}>
        {nav.links.map((l) => (
          <a key={l.label} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
        ))}
        <a className="m-cta" href={nav.cta.href} onClick={() => setOpen(false)}>{nav.cta.label}</a>
      </Sheet>
    </>
  );
}
