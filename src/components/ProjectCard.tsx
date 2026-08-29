'use client';

import styled from 'styled-components';
import { ArrowRight } from './icons';

export type Project = {
  id: string;
  no: string;
  title: string;
  category: string;
  location: string;
  description: string;
  image: string;
  href: string;
};

const Row = styled.article<{ $flip: boolean }>`
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(28px, 4vw, 60px);
  align-items: center;

  @media (min-width: 900px) {
    grid-template-columns: 1.1fr 0.9fr;
    .media { order: ${({ $flip }) => ($flip ? 2 : 1)}; }
    .copy { order: ${({ $flip }) => ($flip ? 1 : 2)}; }
  }
`;

const Media = styled.a`
  position: relative;
  display: block;
  border-radius: ${({ theme }) => theme.layout.radiusLg};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadow.card};

  img {
    width: 100%;
    height: clamp(280px, 40vw, 480px);
    object-fit: cover;
    transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
  }
  &:hover img { transform: scale(1.05); }

  .no {
    position: absolute;
    top: 18px; left: 18px;
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 12px;
    letter-spacing: 0.12em;
    color: #fff;
    background: rgba(4, 30, 40, 0.6);
    backdrop-filter: blur(4px);
    padding: 7px 12px;
    border-radius: 999px;
  }
`;

const Copy = styled.div`
  .cat {
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 12.5px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.orange};
  }
  h3 {
    margin-top: 14px;
    font-size: clamp(26px, 3vw, 38px);
    font-weight: 600;
    letter-spacing: -0.02em;
    color: ${({ theme }) => theme.colors.headingOnLight};
  }
  .loc {
    margin-top: 10px;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.bodyOnLight};
    opacity: 0.9;
  }
  p {
    margin-top: 18px;
    font-size: 16px;
    line-height: 1.65;
    color: ${({ theme }) => theme.colors.bodyOnLight};
  }
  .view {
    margin-top: 24px;
    display: inline-flex;
    align-items: center;
    gap: 9px;
    font-size: 14.5px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.navy};
    transition: gap 0.2s ease, color 0.2s ease;
    &:hover { gap: 13px; color: ${({ theme }) => theme.colors.orange}; }
  }
`;

export default function ProjectCard({ project, flip }: { project: Project; flip: boolean }) {
  return (
    <Row $flip={flip}>
      <Media className="media" href={project.href} aria-label={project.title}>
        <span className="no">{project.no}</span>
        <img src={project.image} alt={project.title} />
      </Media>
      <Copy className="copy">
        <span className="cat">{project.category}</span>
        <h3>{project.title}</h3>
        <div className="loc">{project.location}</div>
        <p>{project.description}</p>
        <a className="view" href={project.href}>View Project <ArrowRight size={16} /></a>
      </Copy>
    </Row>
  );
}
