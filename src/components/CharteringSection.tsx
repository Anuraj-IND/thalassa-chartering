'use client';

import styled from 'styled-components';
import { Container, Section, Eyebrow, SectionHead, Reveal } from './ui';
import { chartering } from '@/data/siteData';

const Groups = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 34px;

  @media (min-width: 860px) { grid-template-columns: 1fr 1fr; }
`;

const Group = styled.div`
  h3 {
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 12.5px;
    font-weight: 500;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.bodyOnLight};
    margin-bottom: 16px;
  }
  ul { display: grid; gap: 10px; }
  li {
    display: flex;
    gap: 12px;
    align-items: flex-start;
    font-size: 16px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.headingOnLight};

    &::before {
      content: '';
      flex-shrink: 0;
      width: 7px;
      height: 7px;
      margin-top: 8px;
      border-radius: 50%;
      background: ${({ theme }) => theme.colors.orange};
    }
  }
`;

const Coverage = styled.div`
  margin-top: clamp(30px, 4vw, 46px);
  padding: clamp(22px, 3vw, 32px) clamp(22px, 3vw, 36px);
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.layout.radiusLg};
  box-shadow: ${({ theme }) => theme.shadow.card};

  h3 {
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 12.5px;
    font-weight: 500;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.bodyOnLight};
  }
  p {
    margin-top: 12px;
    font-size: clamp(16px, 2vw, 20px);
    font-weight: 600;
    line-height: 1.7;
    color: ${({ theme }) => theme.colors.navy};
  }
`;

const Tags = styled.div`
  margin-top: clamp(30px, 4vw, 46px);

  h3 {
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 12.5px;
    font-weight: 500;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.bodyOnLight};
    margin-bottom: 16px;
  }
  .row { display: flex; flex-wrap: wrap; gap: 10px; }
  span {
    padding: 9px 16px;
    font-size: 13.5px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.navy};
    background: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.layout.radiusPill};
  }
`;

const Voyage = styled.div`
  margin-top: clamp(40px, 5vw, 64px);
  background: ${({ theme }) => theme.colors.navy};
  border-radius: ${({ theme }) => theme.layout.radiusLg};
  padding: clamp(28px, 4vw, 52px);
  color: #fff;

  h3 {
    font-size: clamp(24px, 3vw, 34px);
    font-weight: 600;
  }
  .body {
    margin-top: 12px;
    font-size: 16px;
    line-height: 1.65;
    color: ${({ theme }) => theme.colors.bodyOnDark};
    max-width: 640px;
  }
  ul {
    margin-top: 26px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px 28px;

    @media (min-width: 720px) { grid-template-columns: 1fr 1fr; }
  }
  li {
    display: flex;
    gap: 12px;
    align-items: flex-start;
    font-size: 15px;
    color: rgba(255, 255, 255, 0.85);

    &::before {
      content: '';
      flex-shrink: 0;
      width: 7px;
      height: 7px;
      margin-top: 8px;
      border-radius: 50%;
      background: ${({ theme }) => theme.colors.orange};
    }
  }
  .flow {
    margin-top: 28px;
    padding-top: 24px;
    border-top: 1px solid ${({ theme }) => theme.colors.borderOnDark};
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: clamp(11px, 1.5vw, 14px);
    font-weight: 600;
    letter-spacing: 0.06em;
    color: ${({ theme }) => theme.colors.orange};
  }
`;

export default function CharteringSection() {
  return (
    <Section id="chartering" $bg="white">
      <Container>
        <SectionHead>
          <Eyebrow>{chartering.eyebrow}</Eyebrow>
          <h2>{chartering.heading}</h2>
          <p>{chartering.body}</p>
        </SectionHead>

        <Reveal>
          <Groups>
            <Group>
              <h3>{chartering.structuresHeading}</h3>
              <ul>
                {chartering.structures.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </Group>
            <Group>
              <h3>{chartering.cargoHeading}</h3>
              <ul>
                {chartering.cargo.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </Group>
          </Groups>
        </Reveal>

        <Reveal>
          <Coverage>
            <h3>{chartering.coverageHeading}</h3>
            <p>{chartering.coverage}</p>
          </Coverage>
        </Reveal>

        <Reveal>
          <Tags>
            <h3>{chartering.marketsHeading}</h3>
            <div className="row">
              {chartering.markets.map((m) => (
                <span key={m}>{m}</span>
              ))}
            </div>
          </Tags>
        </Reveal>

        <Reveal>
          <Voyage>
            <h3>{chartering.voyage.heading}</h3>
            <p className="body">{chartering.voyage.body}</p>
            <ul>
              {chartering.voyage.capabilities.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
            <div className="flow">{chartering.voyage.flow}</div>
          </Voyage>
        </Reveal>
      </Container>
    </Section>
  );
}
