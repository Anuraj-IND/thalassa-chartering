'use client';

import styled from 'styled-components';
import { Container, Section, Eyebrow, Reveal } from './ui';
import { divisions } from '@/data/siteData';

const Division = styled.div`
  scroll-margin-top: 84px;
  padding-block: clamp(48px, 6vw, 80px);

  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  }
  &:first-child { padding-top: 0; }
  &:last-child { padding-bottom: 0; }
`;

const DivHead = styled.div`
  max-width: 780px;

  h2 {
    margin-top: 16px;
    font-size: clamp(28px, 4vw, 46px);
    letter-spacing: -0.02em;
    color: ${({ theme }) => theme.colors.headingOnLight};
  }
  p {
    margin-top: 16px;
    font-size: 17px;
    line-height: 1.65;
    color: ${({ theme }) => theme.colors.bodyOnLight};
  }
`;

const Label = styled.h3`
  margin: clamp(30px, 4vw, 44px) 0 16px;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 12.5px;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.bodyOnLight};
`;

const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  span {
    padding: 9px 16px;
    font-size: 13.5px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.navy};
    background: ${({ theme }) => theme.colors.offWhite};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.layout.radiusPill};
  }
`;

const CapGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 18px;

  @media (min-width: 720px) { grid-template-columns: 1fr 1fr; }
  @media (min-width: 1080px) { grid-template-columns: 1fr 1fr 1fr; }
`;

const Cap = styled.div`
  background: ${({ theme }) => theme.colors.offWhite};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.layout.radiusLg};
  padding: 24px 26px;

  h4 {
    font-size: 17px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.headingOnLight};
  }
  p {
    margin-top: 10px;
    font-size: 14.5px;
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.bodyOnLight};
  }
`;

const FlowLine = styled.p`
  margin-top: clamp(26px, 3.5vw, 40px);
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: clamp(11px, 1.5vw, 14px);
  font-weight: 600;
  letter-spacing: 0.06em;
  color: ${({ theme }) => theme.colors.orange};
`;

const ClosingLine = styled.p`
  margin-top: 18px;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(19px, 2.4vw, 26px);
  font-weight: 600;
  color: ${({ theme }) => theme.colors.navy};
`;

const TectPanel = styled.div`
  margin-top: clamp(26px, 3.5vw, 40px);
  background: ${({ theme }) => theme.colors.navy};
  border-radius: ${({ theme }) => theme.layout.radiusLg};
  padding: clamp(28px, 4vw, 48px);
  color: #fff;

  h4 {
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 12.5px;
    font-weight: 500;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.mutedOnDark};
    margin: 28px 0 16px;
    &:first-child { margin-top: 0; }
  }
  .tags { display: flex; flex-wrap: wrap; gap: 10px; }
  .tags span {
    padding: 9px 16px;
    font-size: 13.5px;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.88);
    border: 1px solid ${({ theme }) => theme.colors.borderOnDark};
    border-radius: ${({ theme }) => theme.layout.radiusPill};
  }
  .quote {
    margin-top: 28px;
    padding-top: 24px;
    border-top: 1px solid ${({ theme }) => theme.colors.borderOnDark};
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: clamp(18px, 2.4vw, 24px);
    font-weight: 600;
    line-height: 1.4;
    color: #fff;
  }
  .flow {
    margin-top: 20px;
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: clamp(11px, 1.5vw, 14px);
    font-weight: 600;
    letter-spacing: 0.06em;
    color: ${({ theme }) => theme.colors.orange};
  }
`;

const TwoCol = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 26px;

  @media (min-width: 860px) { grid-template-columns: 1fr 1fr; }
`;

const ListCard = styled.div`
  background: ${({ theme }) => theme.colors.offWhite};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.layout.radiusLg};
  padding: 26px 28px;

  h4 {
    font-size: 17px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.headingOnLight};
    margin-bottom: 14px;
  }
  ul { display: grid; gap: 9px; }
  li {
    display: flex;
    gap: 10px;
    align-items: flex-start;
    font-size: 14.5px;
    color: ${({ theme }) => theme.colors.bodyOnLight};

    &::before {
      content: '';
      flex-shrink: 0;
      width: 6px;
      height: 6px;
      margin-top: 7px;
      border-radius: 50%;
      background: ${({ theme }) => theme.colors.orange};
    }
  }
`;

export default function DivisionsSection() {
  const { datamatics: dm, tectonics: te, digitronics: dg } = divisions;

  return (
    <Section $bg="white">
      <Container>
        <Division id="datamatics">
          <Reveal>
            <DivHead>
              <Eyebrow>{dm.eyebrow}</Eyebrow>
              <h2>{dm.heading}</h2>
              <p>{dm.body}</p>
            </DivHead>
          </Reveal>
          <Reveal>
            <Label>{dm.integratesHeading}</Label>
            <TagRow>
              {dm.integrates.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </TagRow>
          </Reveal>
          <Reveal>
            <Label>{dm.capabilitiesHeading}</Label>
            <CapGrid>
              {dm.capabilities.map((c) => (
                <Cap key={c.title}>
                  <h4>{c.title}</h4>
                  <p>{c.text}</p>
                </Cap>
              ))}
            </CapGrid>
          </Reveal>
          <Reveal>
            <Label>{dm.reportingHeading}</Label>
            <CapGrid>
              {dm.reporting.map((r) => (
                <Cap key={r.title}>
                  <h4>{r.title}</h4>
                  <p>{r.text}</p>
                </Cap>
              ))}
            </CapGrid>
            <FlowLine>{dm.flow}</FlowLine>
            <ClosingLine>{dm.closing}</ClosingLine>
          </Reveal>
        </Division>

        <Division id="tectonics">
          <Reveal>
            <DivHead>
              <Eyebrow>{te.eyebrow}</Eyebrow>
              <h2>{te.heading}</h2>
              <p>{te.body}</p>
            </DivHead>
          </Reveal>
          <Reveal>
            <TectPanel>
              <h4>{te.developsHeading}</h4>
              <div className="tags">
                {te.develops.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <h4>{te.capabilitiesHeading}</h4>
              <div className="tags">
                {te.capabilities.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <p className="quote">{te.philosophy}</p>
              <h4>{te.consultingHeading}</h4>
              <div className="tags">
                {te.consulting.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <div className="flow">{te.lifecycle}</div>
              <h4>{te.assetHeading}</h4>
              <div className="tags">
                {te.asset.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <div className="flow">{te.assetFlow}</div>
            </TectPanel>
          </Reveal>
        </Division>

        <Division id="digitronics">
          <Reveal>
            <DivHead>
              <Eyebrow>{dg.eyebrow}</Eyebrow>
              <h2>{dg.heading}</h2>
              <p>{dg.body}</p>
            </DivHead>
          </Reveal>
          <Reveal>
            <Label>{dg.capabilitiesHeading}</Label>
            <TagRow>
              {dg.capabilities.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </TagRow>
            <FlowLine>{dg.chain}</FlowLine>
          </Reveal>
          <Reveal>
            <Label>{dg.principlesHeading}</Label>
            <TagRow>
              {dg.principles.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </TagRow>
          </Reveal>
          <Reveal>
            <Label>{dg.aiHeading}</Label>
            <TwoCol>
              <ListCard>
                <h4>{dg.aiHeading}</h4>
                <ul>
                  {dg.ai.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </ListCard>
              <ListCard>
                <h4>{dg.cloudHeading}</h4>
                <ul>
                  {dg.cloud.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </ListCard>
            </TwoCol>
          </Reveal>
          <Reveal>
            <Label>{dg.frontiersHeading}</Label>
            <CapGrid>
              {dg.frontiers.map((f) => (
                <Cap key={f.title}>
                  <h4>{f.title}</h4>
                  <p>{f.text}</p>
                </Cap>
              ))}
            </CapGrid>
          </Reveal>
        </Division>
      </Container>
    </Section>
  );
}
