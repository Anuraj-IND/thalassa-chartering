'use client';

import styled from 'styled-components';
import { useState } from 'react';
import { Container, Section, Eyebrow, Button } from './ui';
import { Mail, Phone, MapPin } from './icons';
import { contact } from '@/data/siteData';

const Grid = styled(Container)`
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(36px, 5vw, 64px);

  @media (min-width: 940px) { grid-template-columns: 0.85fr 1.15fr; }
`;

const Info = styled.div`
  h2 { margin-top: 16px; font-size: clamp(28px, 3.4vw, 42px); letter-spacing: -0.02em; }
  .lead { margin-top: 16px; font-size: 16.5px; line-height: 1.6; color: ${({ theme }) => theme.colors.bodyOnLight}; }
`;

const Items = styled.div`
  margin-top: 32px;
  display: grid;
  gap: 22px;
`;

const InfoRow = styled.div`
  display: flex;
  gap: 14px;

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

const Form = styled.form`
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.layout.radiusLg};
  padding: clamp(24px, 3vw, 40px);
  box-shadow: ${({ theme }) => theme.shadow.card};
  display: grid;
  gap: 18px;
  grid-template-columns: 1fr 1fr;

  .full { grid-column: 1 / -1; }

  label { display: block; font-size: 13px; font-weight: 500; margin-bottom: 7px; color: ${({ theme }) => theme.colors.headingOnLight}; }

  input, select, textarea {
    width: 100%;
    padding: 13px 15px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 10px;
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 15px;
    color: ${({ theme }) => theme.colors.headingOnLight};
    background: ${({ theme }) => theme.colors.offWhite};
    transition: border-color 0.18s ease, background 0.18s ease;
    &:focus { outline: none; border-color: ${({ theme }) => theme.colors.orange}; background: #fff; }
  }
  textarea { resize: vertical; min-height: 120px; }

  @media (max-width: 560px) { grid-template-columns: 1fr; }
`;

const Sent = styled.p`
  grid-column: 1 / -1;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.blue};
`;

export default function ContactSection() {
  const [sent, setSent] = useState(false);
  return (
    <Section id="contact" $bg="light">
      <Grid as="div">
        <Info>
          <Eyebrow>{contact.eyebrow}</Eyebrow>
          <h2>{contact.heading}</h2>
          <p className="lead">{contact.body}</p>
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
        </Info>

        <Form onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
          <div>
            <label htmlFor="c-name">Full Name</label>
            <input id="c-name" name="name" type="text" placeholder="Your name" required />
          </div>
          <div>
            <label htmlFor="c-company">Company</label>
            <input id="c-company" name="company" type="text" placeholder="Company name" />
          </div>
          <div>
            <label htmlFor="c-email">Email</label>
            <input id="c-email" name="email" type="email" placeholder="you@company.com" required />
          </div>
          <div>
            <label htmlFor="c-phone">Phone</label>
            <input id="c-phone" name="phone" type="tel" placeholder="+00 000 000 0000" />
          </div>
          <div className="full">
            <label htmlFor="c-service">Service</label>
            <select id="c-service" name="service" defaultValue="">
              <option value="" disabled>Select a service</option>
              {contact.form.services.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>
          <div className="full">
            <label htmlFor="c-message">Message</label>
            <textarea id="c-message" name="message" placeholder="How can we help?" required />
          </div>
          <div className="full">
            <Button type="submit" $variant="primary" $block>{contact.form.submit}</Button>
          </div>
          {sent && <Sent>Thanks — this is a demo form. Connect it to your backend to receive enquiries.</Sent>}
        </Form>
      </Grid>
    </Section>
  );
}
