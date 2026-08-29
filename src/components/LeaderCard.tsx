'use client';

import styled from 'styled-components';

export type Leader = { name: string; role: string; bio: string };

const Card = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.layout.radiusLg};
  overflow: hidden;
  transition: transform 0.26s ease, box-shadow 0.26s ease;
  &:hover { transform: translateY(-5px); box-shadow: ${({ theme }) => theme.shadow.cardHover}; }
`;

/* Abstract professional silhouette — placeholder until real portraits exist. */
const Portrait = styled.div`
  position: relative;
  height: 260px;
  background: linear-gradient(160deg, ${({ theme }) => theme.colors.ocean} 0%, ${({ theme }) => theme.colors.navy} 100%);
  display: flex;
  align-items: flex-end;
  justify-content: center;

  svg { width: 128px; height: 128px; color: rgba(255, 255, 255, 0.22); }
  &::after {
    content: '';
    position: absolute;
    left: 0; bottom: 0;
    width: 100%; height: 3px;
    background: ${({ theme }) => theme.colors.orange};
    opacity: 0;
    transition: opacity 0.26s ease;
  }
  ${Card}:hover &::after { opacity: 1; }
`;

const Body = styled.div`
  padding: 22px 24px 26px;

  h3 {
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: 19px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.headingOnLight};
  }
  .role {
    margin-top: 5px;
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 12.5px;
    letter-spacing: 0.06em;
    color: ${({ theme }) => theme.colors.orange};
  }
  p {
    margin-top: 14px;
    font-size: 14.5px;
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.bodyOnLight};
  }
`;

export default function LeaderCard({ leader }: { leader: Leader }) {
  return (
    <Card>
      <Portrait aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2c-5 0-9 3-9 7v1h18v-1c0-4-4-7-9-7Z" />
        </svg>
      </Portrait>
      <Body>
        <h3>{leader.name}</h3>
        <div className="role">{leader.role}</div>
        <p>{leader.bio}</p>
      </Body>
    </Card>
  );
}
