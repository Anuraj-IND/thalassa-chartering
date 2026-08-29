'use client';

import styled from 'styled-components';
import { serviceIcons } from './icons';
import { ArrowRight } from './icons';

export type Service = {
  key: string;
  icon: string;
  title: string;
  text: string;
  image: string;
  href: string;
};

const Card = styled.a`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.layout.radiusLg};
  overflow: hidden;
  transition: transform 0.28s ease, box-shadow 0.28s ease, border-color 0.28s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: ${({ theme }) => theme.shadow.cardHover};
    border-color: transparent;
  }
  &:hover .img img { transform: scale(1.06); }
  &:hover .more { color: ${({ theme }) => theme.colors.orange}; gap: 12px; }
`;

const Media = styled.div`
  position: relative;
  height: 230px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
  }
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(6,44,59,0.05) 0%, rgba(6,44,59,0.55) 100%);
  }
`;

const IconChip = styled.span`
  position: absolute;
  left: 20px;
  bottom: 20px;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.orange};
  color: #fff;
`;

const Body = styled.div`
  padding: 26px 26px 28px;
  display: flex;
  flex-direction: column;
  flex: 1;

  h3 {
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: 22px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.headingOnLight};
  }
  p {
    margin-top: 12px;
    font-size: 15px;
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.bodyOnLight};
    flex: 1;
  }
  .more {
    margin-top: 22px;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.navy};
    transition: color 0.2s ease, gap 0.2s ease;
  }
`;

export default function ServiceCard({ service }: { service: Service }) {
  const Icon = serviceIcons[service.icon as keyof typeof serviceIcons] ?? serviceIcons.ship;
  return (
    <Card href={service.href}>
      <Media className="img">
        <IconChip><Icon size={24} /></IconChip>
        <img src={service.image} alt={service.title} />
      </Media>
      <Body>
        <h3>{service.title}</h3>
        <p>{service.text}</p>
        <span className="more">Learn More <ArrowRight size={16} /></span>
      </Body>
    </Card>
  );
}
