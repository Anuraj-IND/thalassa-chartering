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

const Figures = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1px;
  background: ${({ theme }) => theme.colors.borderOnDark};
  border: 1px solid ${({ theme }) => theme.colors.borderOnDark};
  border-radius: ${({ theme }) => theme.layout.radiusLg};
  overflow: hidden;

  @media (min-width: 640px) { grid-template-columns: 1fr 1fr; }
  @media (min-width: 1024px) { grid-template-columns: repeat(4, 1fr); }
`;

const Figure = styled.div`
  background: ${({ theme }) => theme.colors.navy};
  padding: clamp(26px, 3vw, 38px);
  min-width: 0;
  height: 100%;

  .value {
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: clamp(19px, 2vw, 30px);
    font-weight: 600;
    letter-spacing: 0.01em;
    white-space: nowrap;
    color: ${({ theme }) => theme.colors.orange};
  }
  .label {
    margin-top: 12px;
    font-size: 14.5px;
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.bodyOnDark};
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
        <Figures>
          {ambition.items.map((f, i) => (
            <Reveal key={f.value} delay={i * 70} as="div">
              <Figure>
                <div className="value">{f.value}</div>
                <div className="label">{f.label}</div>
              </Figure>
            </Reveal>
          ))}
        </Figures>
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
