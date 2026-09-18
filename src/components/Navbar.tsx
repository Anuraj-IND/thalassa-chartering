'use client';

import styled, { css } from 'styled-components';
import { useEffect, useRef, useState } from 'react';
import { Menu, Close, ArrowRight } from './icons';
import {
  brand, nav, megaMenu, navPanels, megaRails,
  about, services, projects, globalPresence, contact,
} from '@/data/siteData';

const BAR_HEIGHT = 74;
const CLOSE_DELAY = 140;

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
  height: ${BAR_HEIGHT}px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
`;

const Left = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 14px;
`;

const Word = styled.a`
  display: inline-flex;
  align-items: center;
`;

const Logo = styled.img`
  display: block;
  height: 38px;
  width: auto;
`;

const Links = styled.nav`
  display: none;
  align-items: center;
  gap: 30px;

  @media (min-width: 1024px) { display: flex; }
`;

const NavLink = styled.a<{ $active?: boolean }>`
  position: relative;
  font-size: 14.5px;
  font-weight: 500;
  padding-block: 26px;
  color: ${({ $active }) => ($active ? '#fff' : 'rgba(255, 255, 255, 0.82)')};
  transition: color 0.18s ease;
  &:hover { color: #fff; }
  &::after {
    content: '';
    position: absolute;
    left: 0; bottom: 18px;
    height: 2px;
    background: ${({ theme }) => theme.colors.orange};
    transition: width 0.22s ease;
    width: ${({ $active }) => ($active ? '100%' : '0')};
  }
  &:hover::after { width: 100%; }
  &:hover { color: ${({ theme }) => theme.colors.orangeLight}; }
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
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  color: #fff;
  padding: 8px;
  margin-left: -8px;
  cursor: pointer;
  transition: color 0.18s ease, transform 0.18s ease;
  &:hover { color: ${({ theme }) => theme.colors.orange}; }
`;

/* Dim + block the page behind the open hamburger menu so its banner buttons
   never visually collide with hero content underneath. */
const Backdrop = styled.div<{ $open: boolean }>`
  position: fixed;
  inset: 0;
  z-index: 98;
  background: rgba(3, 18, 24, 0.6);
  backdrop-filter: blur(2px);
  transition: opacity 0.28s ease;
  ${({ $open }) =>
    $open
      ? css`opacity: 1; pointer-events: auto;`
      : css`opacity: 0; pointer-events: none;`}

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

/* Shared drop-down shell (hamburger mega menu + hover dropdowns). */
const panelShell = css`
  position: fixed;
  top: ${BAR_HEIGHT}px;
  left: 0;
  right: 0;
  z-index: 99;
  background: ${({ theme }) => theme.colors.navyDeep};
  border-top: 2px solid ${({ theme }) => theme.colors.orange};
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderOnDark};
  box-shadow: 0 30px 60px rgba(4, 15, 20, 0.45);
  transition: opacity 0.28s ease, transform 0.28s ease;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

const Panel = styled.div<{ $open: boolean }>`
  ${panelShell}
  max-height: calc(100vh - ${BAR_HEIGHT}px);
  max-height: calc(100svh - ${BAR_HEIGHT}px);
  overflow-y: auto;
  ${({ $open }) =>
    $open
      ? css`opacity: 1; transform: translateY(0); pointer-events: auto;`
      : css`opacity: 0; transform: translateY(-14px); pointer-events: none;`}
`;

const DropPanel = styled.div<{ $open: boolean }>`
  ${panelShell}
  display: none;
  @media (min-width: 1024px) { display: block; }
  ${({ $open }) =>
    $open
      ? css`opacity: 1; transform: translateY(0); pointer-events: auto;`
      : css`opacity: 0; transform: translateY(-10px); pointer-events: none;`}
`;

const PanelInner = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding: clamp(28px, 4vw, 56px) ${({ theme }) => theme.layout.gutter} 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(28px, 4vw, 48px);

  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr 1fr 1.2fr;
  }
`;

const DropBody = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding: clamp(28px, 3.5vw, 44px) ${({ theme }) => theme.layout.gutter};
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1.2fr;
  gap: clamp(24px, 3vw, 40px);
`;

const Cell = styled.div<{ $span?: number }>`
  min-width: 0;
  ${({ $span }) =>
    $span &&
    css`
      @media (min-width: 900px) { grid-column: span ${$span}; }
    `}
`;

const Col = styled.div`
  h4 {
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.mutedOnDark};
    margin-bottom: 18px;
  }
  ul { display: grid; gap: 4px; }
  a {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 9px 0;
    font-size: 16.5px;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.85);
    transition: color 0.15s ease, transform 0.15s ease;
    &:hover { color: ${({ theme }) => theme.colors.orange}; transform: translateX(4px); }
  }
`;

/* Column link inside the hamburger mega menu — stays highlighted while its
   rail content is shown (cascading-menu effect from the reference). */
const MegaLink = styled.a<{ $active?: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 9px 0;
  font-size: 16.5px;
  font-weight: 500;
  color: ${({ theme, $active }) => ($active ? theme.colors.orange : 'rgba(255, 255, 255, 0.85)')};
  transform: ${({ $active }) => ($active ? 'translateX(4px)' : 'none')};
  transition: color 0.15s ease, transform 0.15s ease;
  &:hover { color: ${({ theme }) => theme.colors.orange}; transform: translateX(4px); }
`;

const Featured = styled.div`
  border-left: 2px solid ${({ theme }) => theme.colors.orange};
  padding-left: clamp(20px, 2.5vw, 32px);

  h3 {
    font-size: clamp(26px, 3vw, 34px);
    font-weight: 600;
    color: #fff;
  }
  p {
    margin-top: 14px;
    font-size: 15.5px;
    line-height: 1.65;
    color: ${({ theme }) => theme.colors.bodyOnDark};
  }
  a {
    margin-top: 18px;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 14.5px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.orange};
    &:hover { color: ${({ theme }) => theme.colors.orangeLight}; }
  }
`;

const Banner = styled.div`
  position: relative;
  isolation: isolate;
  overflow: hidden;
  margin-top: clamp(28px, 4vw, 48px);
  background: url('${megaMenu.banner.image}') center/cover;
`;

const BannerOverlay = styled.div`
  position: absolute;
  inset: 0;
  z-index: -1;
  background: linear-gradient(90deg, rgba(4,30,40,0.88) 0%, rgba(6,44,59,0.55) 60%, rgba(6,44,59,0.35) 100%);
`;

const BannerInner = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding: clamp(24px, 3.5vw, 40px) ${({ theme }) => theme.layout.gutter};
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
`;

const BannerCta = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 26px;
  background: ${({ theme }) => theme.colors.orange};
  color: #fff;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  border-radius: ${({ theme }) => theme.layout.radius};
  transition: background 0.18s ease, transform 0.18s ease;
  &:hover { background: ${({ theme }) => theme.colors.orangeLight}; transform: translateY(-1px); }
`;

/* Hover-dropdown content pieces. */
const Block = styled.div`
  h5 {
    font-size: 17px;
    font-weight: 600;
    color: #fff;
  }
  p {
    margin-top: 10px;
    font-size: 14.5px;
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.bodyOnDark};
  }
`;

const MiniCard = styled.a`
  display: block;
  border-radius: ${({ theme }) => theme.layout.radiusLg};
  overflow: hidden;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid ${({ theme }) => theme.colors.borderOnDark};
  transition: border-color 0.18s ease, transform 0.18s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.orange};
    transform: translateY(-2px);
  }

  img {
    width: 100%;
    height: 128px;
    object-fit: cover;
    display: block;
  }
  .meta { padding: 16px 18px 18px; }
  .row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    color: #fff;
    font-size: 15.5px;
    font-weight: 600;
  }
  .row svg {
    flex-shrink: 0;
    color: ${({ theme }) => theme.colors.orange};
    transition: transform 0.18s ease;
  }
  &:hover .row svg { transform: translateX(4px); }
  .sub {
    margin-top: 6px;
    font-size: 13px;
    color: ${({ theme }) => theme.colors.mutedOnDark};
  }
  .txt {
    margin-top: 8px;
    font-size: 13.5px;
    line-height: 1.55;
    color: ${({ theme }) => theme.colors.bodyOnDark};
  }
`;

const InfoRows = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;

  .k {
    font-size: 11px;
    font-family: ${({ theme }) => theme.fonts.mono};
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.mutedOnDark};
  }
  .v {
    margin-top: 4px;
    font-size: 14.5px;
    font-weight: 500;
    color: #fff;
  }
`;

function Rail({ k }: { k: string }) {
  const rail = navPanels[k].rail;
  return (
    <Featured>
      <h3>{rail.heading}</h3>
      <p>{rail.body}</p>
      <a href={rail.link.href}>
        {rail.link.label} <ArrowRight size={16} />
      </a>
    </Featured>
  );
}

function DropContent({ k, close }: { k: string; close: () => void }) {
  if (k === 'About') {
    return (
      <>
        {about.blocks.map((b) => (
          <Cell key={b.key}>
            <Block>
              <h5>{b.title}</h5>
              <p>{b.text}</p>
            </Block>
          </Cell>
        ))}
        <Cell>
          <Rail k={k} />
        </Cell>
      </>
    );
  }
  if (k === 'Services') {
    return (
      <>
        {services.items.map((s) => (
          <Cell key={s.key}>
            <MiniCard href={s.href} onClick={close}>
              <img src={s.image} alt={s.title} loading="lazy" />
              <span className="meta">
                <span className="row">{s.title} <ArrowRight size={16} /></span>
                <span className="txt">{s.text}</span>
              </span>
            </MiniCard>
          </Cell>
        ))}
        <Cell>
          <Rail k={k} />
        </Cell>
      </>
    );
  }
  if (k === 'Projects') {
    return (
      <>
        {projects.items.map((p) => (
          <Cell key={p.id}>
            <MiniCard href={p.href} onClick={close}>
              <img src={p.image} alt={p.title} loading="lazy" />
              <span className="meta">
                <span className="row">{p.title} <ArrowRight size={16} /></span>
                <span className="sub">{p.category} · {p.location}</span>
              </span>
            </MiniCard>
          </Cell>
        ))}
        <Cell $span={2}>
          <Rail k={k} />
        </Cell>
      </>
    );
  }
  if (k === 'Global Presence') {
    return (
      <>
        <Cell $span={2}>
          <Block>
            <h5>{globalPresence.networkLabel}</h5>
            <p>{globalPresence.body} {globalPresence.networkNote}.</p>
          </Block>
        </Cell>
        <Cell $span={2}>
          <Rail k={k} />
        </Cell>
      </>
    );
  }
  // Contact
  return (
    <>
      <Cell $span={2}>
        <InfoRows>
          {contact.info.map((it) => (
            <div key={it.label}>
              <div className="k">{it.label}</div>
              <div className="v">{it.value}</div>
            </div>
          ))}
        </InfoRows>
      </Cell>
      <Cell $span={2}>
        <Rail k={k} />
      </Cell>
    </>
  );
}

export default function Navbar() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const [panel, setPanel] = useState<string | null>(null);
  const [megaHover, setMegaHover] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open && !panel) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        setPanel(null);
        setMegaHover(null);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, panel]);

  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  // Lock page scroll + dim background while the hamburger menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open ]);

  const cancelClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => setPanel(null), CLOSE_DELAY);
  };

  const enterLink = (label: string) => {
    if (open) return;
    cancelClose();
    setPanel(label in navPanels ? label : null);
  };

  const closeAll = () => {
    cancelClose();
    setOpen(false);
    setPanel(null);
    setMegaHover(null);
  };

  const toggleMenu = () => {
    setMegaHover(null);
    setOpen((v) => !v);
  };

  const dropOpen = panel !== null && !open;
  const megaRail = (megaHover && megaRails[megaHover]) || megaMenu.featured;

  return (
    <div onMouseLeave={scheduleClose}>
      <Bar $solid={solid || open || dropOpen}>
        <Inner>
          <Left>
            <Burger aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={toggleMenu}>
              {open ? <Close /> : <Menu />}
            </Burger>
            <Word href="#home" aria-label={`${brand.name} home`}>
              <Logo src="/images/incworx-logo.png" alt={brand.name} />
            </Word>
          </Left>

          <Links onMouseEnter={cancelClose}>
            {nav.links.map((l) => (
              <NavLink
                key={l.label}
                href={l.href}
                $active={panel === l.label}
                aria-expanded={l.label in navPanels ? panel === l.label : undefined}
                onMouseEnter={() => enterLink(l.label)}
                onClick={closeAll}
              >
                {l.label}
              </NavLink>
            ))}
          </Links>

          <Cta href={nav.cta.href}>{nav.cta.label}</Cta>
        </Inner>
      </Bar>

      {/* Hover dropdown (desktop) — like the reference: panel follows the hovered link. */}
      <DropPanel $open={dropOpen} aria-hidden={!dropOpen}>
        <DropBody onMouseEnter={cancelClose}>
          {panel && <DropContent k={panel} close={closeAll} />}
        </DropBody>
      </DropPanel>

      {/* Hamburger mega menu (all sizes). */}
      <Backdrop $open={open} onClick={() => setOpen(false)} aria-hidden="true" />
      <Panel $open={open} aria-hidden={!open}>
        <PanelInner>
          {megaMenu.columns.map((col) => (
            <Col key={col.heading}>
              <h4>{col.heading}</h4>
              <ul>
                {col.links.map((l) => (
                  <li key={l.label}>
                    <MegaLink
                      href={l.href}
                      $active={megaHover === l.label}
                      onMouseEnter={() => setMegaHover(l.label)}
                      onFocus={() => setMegaHover(l.label)}
                      onClick={() => setOpen(false)}
                      tabIndex={open ? 0 : -1}
                    >
                      {l.label}
                    </MegaLink>
                  </li>
                ))}
              </ul>
            </Col>
          ))}

          <Featured key={megaRail.heading}>
            <h3>{megaRail.heading}</h3>
            <p>{megaRail.body}</p>
            <a href={megaRail.link.href} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
              {megaRail.link.label} <ArrowRight size={16} />
            </a>
          </Featured>
        </PanelInner>

        <Banner>
          <BannerOverlay />
          <BannerInner>
            {megaMenu.banner.ctas.map((c) => (
              <BannerCta key={c.label} href={c.href} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
                {c.label}
              </BannerCta>
            ))}
          </BannerInner>
        </Banner>
      </Panel>
    </div>
  );
}
