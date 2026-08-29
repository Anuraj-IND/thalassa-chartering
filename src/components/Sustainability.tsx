'use client';

import styled from 'styled-components';
import { Container, Section, Eyebrow, Reveal } from './ui';
import { sustainability as s } from '@/data/siteData';

const Wrap = styled(Section)`
  overflow: hidden;
`;

const Grid = styled(Container)`
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(36px, 5vw, 72px);
  align-items: center;

  @media (min-width: 940px) { grid-template-columns: 0.95fr 1.05fr; }
`;

const Media = styled.div`
  position: relative;
  border-radius: ${({ theme }) => theme.layout.radiusLg};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadow.card};

  img {
    width: 100%;
    height: clamp(320px, 44vw, 520px);
    object-fit: cover;
  }
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(6,44,59,0) 40%, rgba(6,44,59,0.4) 100%);
  }
`;

const Copy = styled.div`
  h2 {
    margin-top: 16px;
    font-size: clamp(28px, 3.6vw, 46px);
    letter-spacing: -0.02em;
    color: #fff;
  }
  .lead {
    margin-top: 18px;
    font-size: 17px;
    line-height: 1.65;
    color: ${({ theme }) => theme.colors.bodyOnDark};
  }
`;

const Areas = styled.div`
  margin-top: 30px;
  display: grid;
  gap: 20px;
`;

const Area = styled.div`
  padding-left: 20px;
  border-left: 2px solid ${({ theme }) => theme.colors.orange};
  h3 { font-size: 17px; font-weight: 600; color: #fff; }
  p {
    margin-top: 6px;
    font-size: 14.5px;
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.bodyOnDark};
  }
`;

export default function Sustainability() {
  return (
    <Wrap id="sustainability" $bg="navy">
      <Grid as="div">
        <Reveal>
          <Media><img src={s.image} alt="Responsible maritime operations" /></Media>
        </Reveal>
        <Reveal delay={80}>
          <Copy>
            <Eyebrow>{s.eyebrow}</Eyebrow>
            <h2>{s.heading}</h2>
            <p className="lead">{s.body}</p>
            <Areas>
              {s.areas.map((a) => (
                <Area key={a.title}>
                  <h3>{a.title}</h3>
                  <p>{a.text}</p>
                </Area>
              ))}
            </Areas>
          </Copy>
        </Reveal>
      </Grid>
    </Wrap>
  );
}
