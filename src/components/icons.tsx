'use client';

import React from 'react';

type IconProps = React.SVGProps<SVGSVGElement> & { size?: number };

const base = (size: number) => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  xmlns: 'http://www.w3.org/2000/svg',
});

export const Anchor = ({ size = 24, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <circle cx="12" cy="5" r="2.4" stroke="currentColor" strokeWidth="2" />
    <path d="M12 7.4V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M8.5 12h7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path
      d="M20 13.5a8 8 0 0 1-16 0l2 1M20 13.5l-2 1"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ArrowRight = ({ size = 18, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const Phone = ({ size = 18, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path
      d="M6.5 4h3l1.5 4-2 1.5a12 12 0 0 0 5 5L15.5 12l4 1.5v3a2 2 0 0 1-2.2 2A16 16 0 0 1 4.5 6.2 2 2 0 0 1 6.5 4Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </svg>
);

export const CheckCircle = ({ size = 22, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
    <path d="M8.5 12.2l2.3 2.3 4.7-4.8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ChevronDown = ({ size = 20, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const Quote = ({ size = 40, ...p }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...p}>
    <path
      d="M6 22c0-6 3.5-10 9-11l1 3c-3 1-4.5 3-4.5 5.5H16V29H6v-7Zm16 0c0-6 3.5-10 9-11l1 3c-3 1-4.5 3-4.5 5.5H32V29H22v-7Z"
      fill="currentColor"
    />
  </svg>
);

/* Service icons (shown white on a navy tile) */
export const DryBulk = ({ size = 22, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M3 14h18l-2 5H5l-2-5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    <path d="M6 14V9h9l3 5" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    <path d="M9 9V5h3v4" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
  </svg>
);

export const Droplet = ({ size = 22, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path
      d="M12 3s6 6.5 6 10.5A6 6 0 0 1 6 13.5C6 9.5 12 3 12 3Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </svg>
);

export const Box = ({ size = 22, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    <path d="M4 7.5l8 4.5 8-4.5M12 12v9" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
  </svg>
);

export const Menu = ({ size = 24, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const Close = ({ size = 24, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const ArrowDown = ({ size = 22, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M12 5v14M6 13l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const MapPin = ({ size = 20, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    <circle cx="12" cy="10" r="2.6" stroke="currentColor" strokeWidth="2" />
  </svg>
);

export const Mail = ({ size = 20, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
    <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
  </svg>
);

/* Service icon: Shipping (container vessel) */
export const Ship = ({ size = 24, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M3 15l1.6 4.2a2 2 0 0 0 1.9 1.3h11a2 2 0 0 0 1.9-1.3L22 15" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    <path d="M5 15V9h11l3 6" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    <path d="M9 9V5.5h3.5V9M12 3v2" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
  </svg>
);

/* Service icon: Trading (globe + exchange) */
export const Trade = ({ size = 24, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
    <path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
  </svg>
);

/* Service icon: Mobility (movement / transport) */
export const Mobility = ({ size = 24, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M4 16l1.6-5.2A3 3 0 0 1 8.5 8.5h6a3 3 0 0 1 2.9 2.3L19 16" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    <path d="M3 16h18v2a1 1 0 0 1-1 1h-2v-3M8 19v-3M6 19H4a1 1 0 0 1-1-1v-2" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
  </svg>
);

export const LinkedIn = ({ size = 18, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="2" />
    <path d="M7 10v6M7 7.2v.01M11 16v-3.2a1.8 1.8 0 0 1 3.6 0V16M11 10v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const Instagram = ({ size = 18, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
    <path d="M16.6 7.4v.01" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
  </svg>
);

export const YouTube = ({ size = 18, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <rect x="3" y="6" width="18" height="12" rx="3.5" stroke="currentColor" strokeWidth="2" />
    <path d="M11 9.5l4 2.5-4 2.5v-5Z" fill="currentColor" />
  </svg>
);

// Map service icon keys (from siteData) to components.
export const serviceIcons = {
  ship: Ship,
  trade: Trade,
  mobility: Mobility,
  intelligence: Trade,
  datamatics: Box,
  tectonics: DryBulk,
  digitronics: Droplet,
} as const;
export const socialIcons = { LinkedIn, Instagram, YouTube } as const;
