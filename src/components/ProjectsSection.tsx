'use client';

import styled from 'styled-components';
import { Container, Section, Eyebrow, SectionHead, Reveal } from './ui';
import ProjectCard from './ProjectCard';
import { projects } from '@/data/siteData';

const List = styled.div`
  display: grid;
  gap: clamp(48px, 7vw, 96px);
`;

const Figure = styled.div`
  margin-bottom: clamp(40px, 5vw, 64px);
  padding: clamp(28px, 4vw, 48px);
  background: ${({ theme }) => theme.colors.navy};
  border-radius: ${({ theme }) => theme.layout.radiusLg};
  text-align: center;

  .value {
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: clamp(40px, 7vw, 84px);
    font-weight: 600;
    letter-spacing: 0.01em;
    color: ${({ theme }) => theme.colors.orange};
    line-height: 1;
  }
  .label {
    margin-top: 14px;
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.bodyOnDark};
  }
`;

const Closing = styled.div`
  margin-top: clamp(40px, 5vw, 64px);
  text-align: center;

  p {
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: clamp(20px, 2.6vw, 28px);
    font-weight: 600;
    color: ${({ theme }) => theme.colors.navy};
  }
  .tags {
    margin-top: 22px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
  }
  .tags span {
    padding: 9px 16px;
    font-size: 13.5px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.navy};
    background: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.layout.radiusPill};
  }
`;

export default function ProjectsSection() {
  return (
    <Section id="projects" $bg="light">
      <Container>
        <SectionHead>
          <Eyebrow>{projects.eyebrow}</Eyebrow>
          <h2>{projects.heading}</h2>
        </SectionHead>
        <Reveal>
          <Figure>
            <div className="value">{projects.figure}</div>
            <div className="label">{projects.figureLabel}</div>
          </Figure>
        </Reveal>
        <List>
          {projects.items.map((p, i) => (
            <Reveal key={p.id}>
              <ProjectCard project={p} flip={i % 2 === 1} />
            </Reveal>
          ))}
        </List>
        <Reveal>
          <Closing>
            <p>{projects.closing}</p>
            <div className="tags">
              {projects.experience.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </Closing>
        </Reveal>
      </Container>
    </Section>
  );
}
