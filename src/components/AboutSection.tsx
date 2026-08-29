'use client';

import styled from 'styled-components';
import { Container, Section, Eyebrow, Reveal } from './ui';
import { about } from '@/data/siteData';

const Grid = styled(Container)`
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(36px, 5vw, 72px);
  align-items: center;

  @media (min-width: 940px) { grid-template-columns: 1.05fr 0.95fr; }
`;

const Media = styled.div`
  position: relative;
  border-radius: ${({ theme }) => theme.layout.radiusLg};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadow.card};

  img {
    width: 100%;
    height: clamp(320px, 46vw, 560px);
    object-fit: cover;
  }
  &::after {
    content: '';
    position: absolute;
    left: 0; bottom: 0;
    width: 46%; height: 4px;
    background: ${({ theme }) => theme.colors.orange};
  }
`;

const Copy = styled.div`
  h2 {
    margin-top: 16px;
    font-size: clamp(30px, 4vw, 48px);
    letter-spacing: -0.02em;
    color: ${({ theme }) => theme.colors.headingOnLight};
  }
  .lead {
    margin-top: 20px;
    font-size: 18px;
    line-height: 1.65;
    color: ${({ theme }) => theme.colors.bodyOnLight};
  }
`;

const Blocks = styled.div`
  margin-top: 34px;
  display: grid;
  gap: 22px;
`;

const Block = styled.div`
  padding-left: 20px;
  border-left: 2px solid ${({ theme }) => theme.colors.border};

  h3 {
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: 17px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.headingOnLight};
  }
  p {
    margin-top: 7px;
    font-size: 15px;
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.bodyOnLight};
  }
`;

export default function AboutSection() {
  return (
    <Section id="about" $bg="light">
      <Grid as="div">
        <Reveal>
          <Media>
            <img src={about.image} alt="INCWORX global operations" />
          </Media>
        </Reveal>

        <Reveal delay={80}>
          <Copy>
            <Eyebrow>{about.eyebrow}</Eyebrow>
            <h2>{about.heading}</h2>
            <p className="lead">{about.body}</p>
            <Blocks>
              {about.blocks.map((b) => (
                <Block key={b.key}>
                  <h3>{b.title}</h3>
                  <p>{b.text}</p>
                </Block>
              ))}
            </Blocks>
          </Copy>
        </Reveal>
      </Grid>
    </Section>
  );
}
