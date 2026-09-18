'use client';

import styled from 'styled-components';
import { Container, Section, Eyebrow } from './ui';
import { Mail, Phone, MapPin } from './icons';
import { contact } from '@/data/siteData';

const Wrap = styled(Container)`
  max-width: 860px;
  text-align: center;
`;

const Heading = styled.h2`
  margin-top: 16px;
  font-size: clamp(28px, 3.4vw, 42px);
  letter-spacing: -0.02em;
`;

const Lead = styled.p`
  margin: 16px auto 0;
  max-width: 600px;
  font-size: 16.5px;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.bodyOnLight};
`;

const Items = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 18px;
  text-align: left;

  @media (min-width: 720px) { grid-template-columns: 1fr 1fr; }
`;

const InfoRow = styled.div`
  display: flex;
  gap: 14px;
  align-items: flex-start;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.layout.radiusLg};
  padding: 22px;
  box-shadow: ${({ theme }) => theme.shadow.card};

  .ico {
    flex-shrink: 0;
    width: 42px; height: 42px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    background: ${({ theme }) => theme.colors.orangeSoft};
    color: ${({ theme }) => theme.colors.orange};
  }
  .label { font-size: 12.5px; font-family: ${({ theme }) => theme.fonts.mono}; letter-spacing: 0.08em; text-transform: uppercase; color: ${({ theme }) => theme.colors.bodyOnLight}; }
  .value { margin-top: 3px; font-size: 15.5px; font-weight: 500; color: ${({ theme }) => theme.colors.headingOnLight}; }
`;

export default function ContactSection() {
  return (
    <Section id="contact" $bg="light">
      <Wrap as="div">
        <Eyebrow>{contact.eyebrow}</Eyebrow>
        <Heading>{contact.heading}</Heading>
        <Lead>{contact.body}</Lead>
        <Items>
          {contact.info.map((it, i) => (
            <InfoRow key={it.label}>
              <span className="ico">
                {i === 0 ? <Mail size={20} /> : i === 1 ? <Phone size={18} /> : <MapPin size={20} />}
              </span>
              <div>
                <div className="label">{it.label}</div>
                <div className="value">{it.value}</div>
              </div>
            </InfoRow>
          ))}
        </Items>
      </Wrap>
    </Section>
  );
}
