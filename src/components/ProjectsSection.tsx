'use client';

import styled from 'styled-components';
import { Container, Section, Eyebrow, SectionHead, Reveal } from './ui';
import ProjectCard from './ProjectCard';
import { projects } from '@/data/siteData';

const List = styled.div`
  display: grid;
  gap: clamp(48px, 7vw, 96px);
`;

export default function ProjectsSection() {
  return (
    <Section id="projects" $bg="light">
      <Container>
        <SectionHead>
          <Eyebrow>{projects.eyebrow}</Eyebrow>
          <h2>{projects.heading}</h2>
        </SectionHead>
        <List>
          {projects.items.map((p, i) => (
            <Reveal key={p.id}>
              <ProjectCard project={p} flip={i % 2 === 1} />
            </Reveal>
          ))}
        </List>
      </Container>
    </Section>
  );
}
