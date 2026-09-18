'use client';

import styled from 'styled-components';
import { Container, Section, Eyebrow, SectionHead, Reveal } from './ui';
import { model } from '@/data/siteData';

const Flow = styled.p`
  margin-top: 18px;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: clamp(12px, 1.6vw, 15px);
  font-weight: 600;
  letter-spacing: 0.08em;
  color: ${({ theme }) => theme.colors.orange};
`;

const Grid = styled.div`
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

const Item = styled.div`
  background: ${({ theme }) => theme.colors.navy};
  height: 100%;
  padding: clamp(26px, 3vw, 40px);
  transition: background 0.25s ease;

  &:hover { background: ${({ theme }) => theme.colors.ocean}; }

  .no {
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: 40px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.orange};
    line-height: 1;
  }
  h3 {
    margin-top: 18px;
    font-size: 20px;
    font-weight: 600;
    color: #fff;
  }
  .q {
    margin-top: 8px;
    font-size: 14px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.orangeLight};
  }
  p {
    margin-top: 10px;
    font-size: 15px;
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.bodyOnDark};
  }
`;

const Closing = styled.p`
  margin-top: clamp(28px, 4vw, 44px);
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(20px, 2.6vw, 28px);
  font-weight: 600;
  color: #fff;
`;

export default function WhyIncworx() {
  return (
    <Section id="model" $bg="navy">
      <Container>
        <SectionHead $dark>
          <Eyebrow>{model.eyebrow}</Eyebrow>
          <h2>{model.heading}</h2>
          <p>{model.intro}</p>
          <Flow>{model.flow}</Flow>
        </SectionHead>
        <Grid>
          {model.items.map((it, i) => (
            <Reveal key={it.no} delay={i * 70} as="div">
              <Item>
                <span className="no">{it.no}</span>
                <h3>{it.title}</h3>
                <div className="q">{it.q}</div>
                <p>{it.text}</p>
              </Item>
            </Reveal>
          ))}
        </Grid>
        <Reveal>
          <Closing>{model.closing}</Closing>
        </Reveal>
      </Container>
    </Section>
  );
}
