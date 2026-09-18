'use client';

import styled from 'styled-components';
import { Container, Section, Eyebrow, Reveal } from './ui';
import { ambition } from '@/data/siteData';

const Head = styled.div`
  max-width: 760px;
  margin-bottom: clamp(32px, 4vw, 52px);

  h2 {
    margin-top: 16px;
    font-size: clamp(30px, 4.4vw, 52px);
    letter-spacing: -0.02em;
    color: #fff;
  }
`;

const HeroFigure = styled.div`
  padding: clamp(8px, 2vw, 20px) 0 clamp(28px, 4vw, 48px);

  .value {
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: clamp(44px, 9vw, 110px);
    font-weight: 600;
    letter-spacing: 0.01em;
    line-height: 1;
    color: ${({ theme }) => theme.colors.orange};
  }
  .label {
    margin-top: 16px;
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: clamp(12px, 1.6vw, 15px);
    font-weight: 600;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: #fff;
  }
  .lede {
    margin-top: 18px;
    max-width: 720px;
    font-size: clamp(16px, 2vw, 19px);
    line-height: 1.65;
    color: ${({ theme }) => theme.colors.bodyOnDark};
  }
`;

const Mission = styled.div`
  margin-top: clamp(32px, 4vw, 52px);
  background: ${({ theme }) => theme.colors.navy};
  border: 1px solid ${({ theme }) => theme.colors.borderOnDark};
  border-left: 3px solid ${({ theme }) => theme.colors.orange};
  border-radius: ${({ theme }) => theme.layout.radiusLg};
  padding: clamp(28px, 4vw, 48px);

  h3 {
    margin-top: 16px;
    font-size: clamp(24px, 3.2vw, 38px);
    font-weight: 600;
    letter-spacing: -0.01em;
    color: #fff;
  }
  .body {
    margin-top: 14px;
    font-size: 17px;
    line-height: 1.65;
    color: ${({ theme }) => theme.colors.bodyOnDark};
  }
  .formula {
    margin-top: 20px;
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: clamp(12px, 1.5vw, 14px);
    font-weight: 600;
    letter-spacing: 0.04em;
    line-height: 1.8;
    color: ${({ theme }) => theme.colors.orange};
  }
  .flow {
    margin-top: 14px;
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: clamp(12px, 1.5vw, 14px);
    font-weight: 600;
    letter-spacing: 0.08em;
    color: #fff;
  }
`;

const Aims = styled.div`
  margin-top: clamp(32px, 4vw, 52px);

  h3 {
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.mutedOnDark};
  }
  ul {
    margin-top: 20px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 12px 32px;

    @media (min-width: 720px) { grid-template-columns: 1fr 1fr; }
  }
  li {
    display: flex;
    gap: 12px;
    align-items: flex-start;
    font-size: 15.5px;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.85);

    &::before {
      content: '';
      flex-shrink: 0;
      width: 7px;
      height: 7px;
      margin-top: 9px;
      border-radius: 50%;
      background: ${({ theme }) => theme.colors.orange};
    }
  }
`;

export default function AmbitionBand() {
  return (
    <Section $bg="deep">
      <Container>
        <Reveal>
          <Head>
            <Eyebrow>{ambition.eyebrow}</Eyebrow>
            <h2>{ambition.heading}</h2>
          </Head>
        </Reveal>
        <Reveal>
          <HeroFigure>
            <div className="value">{ambition.figure}</div>
            <div className="label">{ambition.figureLabel}</div>
            <p className="lede">{ambition.lede}</p>
          </HeroFigure>
        </Reveal>
        <Reveal>
          <Mission>
            <Eyebrow>{ambition.mission.eyebrow}</Eyebrow>
            <h3>{ambition.mission.heading}</h3>
            <p className="body">{ambition.mission.body}</p>
            <p className="formula">{ambition.mission.formula}</p>
            <p className="flow">{ambition.mission.flow}</p>
          </Mission>
        </Reveal>
        <Reveal>
          <Aims>
            <h3>{ambition.aimsHeading}</h3>
            <ul>
              {ambition.aims.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </Aims>
        </Reveal>
      </Container>
    </Section>
  );
}
