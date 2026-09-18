'use client';

import styled from 'styled-components';
import { Container } from './ui';
import { socialIcons } from './icons';
import { brand, footer } from '@/data/siteData';

const Wrap = styled.footer`
  background: ${({ theme }) => theme.colors.navyDeep};
  color: #fff;
  padding-top: clamp(60px, 8vw, 96px);
`;

const Grid = styled(Container)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 44px;

  @media (min-width: 680px) { grid-template-columns: 1.6fr 1fr 1fr; }
  @media (min-width: 1040px) { grid-template-columns: 1.8fr 1fr 1fr 1fr 1.2fr; }
`;

const Brand = styled.div`
  .logo {
    display: block;
    height: 26px;
    width: auto;
  }
  .blurb {
    margin-top: 20px;
    max-width: 320px;
    font-size: 14.5px;
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.bodyOnDark};
  }
  .social {
    margin-top: 22px;
    display: flex;
    gap: 12px;
  }
  .social a {
    width: 40px; height: 40px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 1px solid ${({ theme }) => theme.colors.borderOnDark};
    border-radius: 10px;
    color: ${({ theme }) => theme.colors.bodyOnDark};
    transition: color 0.18s ease, border-color 0.18s ease, background 0.18s ease;
    &:hover { color: #fff; border-color: ${({ theme }) => theme.colors.orange}; background: rgba(244,122,50,0.14); }
  }
`;

const Col = styled.div`
  h4 {
    font-family: ${({ theme }) => theme.fonts.body};
    font-weight: 700;
    font-size: 12px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #fff;
    margin-bottom: 18px;
  }
  ul { display: grid; gap: 12px; }
  a, .val {
    font-size: 14.5px;
    color: ${({ theme }) => theme.colors.bodyOnDark};
    transition: color 0.15s ease;
  }
  a:hover { color: ${({ theme }) => theme.colors.orange}; }
  .k { font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase; color: ${({ theme }) => theme.colors.mutedOnDark}; }
`;

const Bottom = styled.div`
  margin-top: clamp(44px, 5vw, 64px);
  border-top: 1px solid ${({ theme }) => theme.colors.borderOnDark};

  .inner {
    max-width: ${({ theme }) => theme.layout.maxWidth};
    margin: 0 auto;
    padding: 22px ${({ theme }) => theme.layout.gutter};
    display: flex;
    flex-wrap: wrap;
    gap: 14px 28px;
    align-items: center;
    justify-content: space-between;
  }
  .copy { font-size: 13.5px; color: ${({ theme }) => theme.colors.mutedOnDark}; }
  .legal { display: flex; flex-wrap: wrap; gap: 26px; }
  .legal a {
    font-size: 13.5px;
    color: ${({ theme }) => theme.colors.bodyOnDark};
    &:hover { color: ${({ theme }) => theme.colors.orange}; }
  }
`;

export default function Footer() {
  return (
    <Wrap>
      <Grid as="div">
        <Brand>
          <img className="logo" src="/images/incworx-logo-white.jpg" alt={brand.name} />
          <p className="blurb">{footer.blurb}</p>
          <div className="social">
            {footer.social.map((s) => {
              const Icon = socialIcons[s as keyof typeof socialIcons];
              return (
                <a key={s} href="#" aria-label={s}>{Icon ? <Icon size={18} /> : s}</a>
              );
            })}
          </div>
        </Brand>

        {footer.columns.map((col) => (
          <Col key={col.heading}>
            <h4>{col.heading}</h4>
            <ul>
              {col.links.map((l) => (
                <li key={l}><a href="#">{l}</a></li>
              ))}
            </ul>
          </Col>
        ))}

        <Col>
          <h4>Contact</h4>
          <ul>
            {footer.contact.map((c) => (
              <li key={c.label}>
                <div className="k">{c.label}</div>
                <div className="val">{c.value}</div>
              </li>
            ))}
          </ul>
        </Col>
      </Grid>

      <Bottom>
        <div className="inner">
          <span className="copy">{footer.copyright}</span>
          <div className="legal">
            {footer.legal.map((l) => <a key={l} href="#">{l}</a>)}
          </div>
        </div>
      </Bottom>
    </Wrap>
  );
}
