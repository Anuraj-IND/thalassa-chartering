'use client';

import styled from 'styled-components';
import { Container, Section, Eyebrow, SectionHead, Reveal } from './ui';
import { why } from '@/data/siteData';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1px;
  background: ${({ theme }) => theme.colors.borderOnDark};
  border: 1px solid ${({ theme }) => theme.colors.borderOnDark};
  border-radius: ${({ theme }) => theme.layout.radiusLg};
  overflow: hidden;

  @media (min-width: 640px) { grid-template-columns: 1fr 1fr; }
  @media (min-width: 1024px) { grid-template-columns: repeat(3, 1fr); }
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
  p {
    margin-top: 10px;
    font-size: 15px;
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.bodyOnDark};
  }
`;

export default function WhyIncworx() {
  return (
    <Section id="why" $bg="navy">
      <Container>
        <SectionHead $dark>
          <Eyebrow>{why.eyebrow}</Eyebrow>
          <h2>{why.heading}</h2>
        </SectionHead>
        <Grid>
          {why.items.map((it, i) => (
            <Reveal key={it.no} delay={i * 70} as="div">
              <Item>
                <span className="no">{it.no}</span>
                <h3>{it.title}</h3>
                <p>{it.text}</p>
              </Item>
            </Reveal>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
