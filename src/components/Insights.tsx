'use client';

import styled from 'styled-components';
import { Container, Section, Eyebrow, SectionHead, Reveal } from './ui';
import { ArrowRight } from './icons';
import { insights } from '@/data/siteData';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 26px;

  @media (min-width: 720px) { grid-template-columns: 1fr 1fr; }
  @media (min-width: 1040px) { grid-template-columns: repeat(3, 1fr); }
`;

const Card = styled.a`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.layout.radiusLg};
  overflow: hidden;
  transition: transform 0.26s ease, box-shadow 0.26s ease;
  &:hover { transform: translateY(-5px); box-shadow: ${({ theme }) => theme.shadow.cardHover}; }
  &:hover img { transform: scale(1.05); }
  &:hover .read { gap: 12px; color: ${({ theme }) => theme.colors.orange}; }

  .media { height: 190px; overflow: hidden; }
  img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s cubic-bezier(0.22,1,0.36,1); }
`;

const Body = styled.div`
  padding: 22px 24px 26px;
  display: flex;
  flex-direction: column;
  flex: 1;

  .meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 12px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }
  .cat { color: ${({ theme }) => theme.colors.orange}; }
  .date { color: ${({ theme }) => theme.colors.bodyOnLight}; opacity: 0.8; }
  h3 {
    margin-top: 14px;
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: 19px;
    font-weight: 600;
    line-height: 1.35;
    color: ${({ theme }) => theme.colors.headingOnLight};
    flex: 1;
  }
  .read {
    margin-top: 18px;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.navy};
    transition: gap 0.2s ease, color 0.2s ease;
  }
`;

export default function Insights() {
  return (
    <Section id="insights" $bg="light">
      <Container>
        <SectionHead>
          <Eyebrow>{insights.eyebrow}</Eyebrow>
          <h2>{insights.heading}</h2>
          <p>{insights.body}</p>
        </SectionHead>
        <Grid>
          {insights.articles.map((a, i) => (
            <Reveal key={i} delay={i * 90}>
              <Card href="#insights">
                <div className="media"><img src={a.image} alt={a.title} /></div>
                <Body>
                  <div className="meta">
                    <span className="cat">{a.category}</span>
                    <span className="date">{a.date}</span>
                  </div>
                  <h3>{a.title}</h3>
                  <span className="read">Read More <ArrowRight size={15} /></span>
                </Body>
              </Card>
            </Reveal>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
