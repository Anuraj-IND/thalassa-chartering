'use client';

import styled from 'styled-components';
import { Container, Section, Reveal } from './ui';
import { stats } from '@/data/siteData';

const Grid = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1px;
  background: ${({ theme }) => theme.colors.borderOnDark};

  @media (min-width: 900px) { grid-template-columns: repeat(4, 1fr); }
`;

const Stat = styled.div`
  background: ${({ theme }) => theme.colors.navyDeep};
  height: 100%;
  padding: clamp(30px, 4vw, 52px) clamp(20px, 3vw, 36px);
  text-align: center;

  .value {
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: clamp(40px, 6vw, 64px);
    font-weight: 800;
    line-height: 1;
    color: ${({ theme }) => theme.colors.orange};
  }
  .label {
    margin-top: 12px;
    font-size: 14.5px;
    letter-spacing: 0.02em;
    color: ${({ theme }) => theme.colors.bodyOnDark};
  }
`;

export default function StatsSection() {
  return (
    <Section $bg="deep" $pad="0">
      <Grid as="div">
        {stats.items.map((s, i) => (
          <Reveal key={s.label} delay={i * 80} as="div">
            <Stat>
              <div className="value">{s.value}</div>
              <div className="label">{s.label}</div>
            </Stat>
          </Reveal>
        ))}
      </Grid>
    </Section>
  );
}
