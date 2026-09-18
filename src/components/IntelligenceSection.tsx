'use client';

import styled from 'styled-components';
import { Container, Section, Eyebrow, SectionHead, Reveal } from './ui';
import { intelligence } from '@/data/siteData';

const Areas = styled.div`
  h3 {
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 12.5px;
    font-weight: 500;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.bodyOnLight};
    margin-bottom: 20px;
  }
  ul {
    display: grid;
    grid-template-columns: 1fr;
    gap: 12px 32px;

    @media (min-width: 720px) { grid-template-columns: 1fr 1fr; }
  }
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

export default function IntelligenceSection() {
  return (
    <Section id="intelligence" $bg="light">
      <Container>
        <SectionHead>
          <Eyebrow>{intelligence.eyebrow}</Eyebrow>
          <h2>{intelligence.heading}</h2>
          <p>{intelligence.body}</p>
        </SectionHead>
        <Reveal>
          <Areas>
            <h3>{intelligence.areasHeading}</h3>
            <ul>
              {intelligence.areas.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </Areas>
        </Reveal>
      </Container>
    </Section>
  );
}
