// Central design tokens — INCWORX brand system.
// Blue/navy dominates (~80% of the visual system); orange is a strategic accent.
// Kept as a typed object so components can reference theme.colors.* etc.

export const theme = {
  colors: {
    // --- Blues (dominant) ---
    navy: '#062C3B',        // Deep navy — primary dark background & headings
    navyDeep: '#041E28',    // Deeper navy — footer / cinematic overlays
    ocean: '#0B5266',       // Ocean blue — secondary surfaces
    blue: '#126B82',        // Blue — borders, subtle fills, links
    // --- Orange (accent only) ---
    orange: '#F47A32',      // Bright orange — CTAs, highlights, numbers
    orangeLight: '#FF9A5B', // Light orange — hover / gradient tip
    orangeSoft: 'rgba(244, 122, 50, 0.12)', // pale accent (badges / chips)
    // --- Neutrals ---
    white: '#FFFFFF',
    offWhite: '#F5F7F6',    // page background on light sections
    headingOnLight: '#062C3B',   // navy blue — headings on light (never black)
    bodyOnLight: '#3D545E',      // paragraph text on light
    bodyOnDark: 'rgba(235, 243, 245, 0.74)',
    mutedOnDark: 'rgba(235, 243, 245, 0.52)',
    border: '#DEE5E6',           // card / divider borders on light
    borderStrong: '#C6D2D4',
    borderOnDark: 'rgba(255, 255, 255, 0.12)',
    track: 'rgba(255, 255, 255, 0.14)',
    cardBg: '#FFFFFF',
    pageBg: '#F5F7F6',
  },
  fonts: {
    // Font families loaded via next/font in layout.tsx and exposed as CSS vars.
    display: 'var(--font-display), system-ui, sans-serif', // Sora — editorial display
    body: 'var(--font-body), system-ui, -apple-system, sans-serif', // Inter
    mono: "var(--font-mono), ui-monospace, 'SFMono-Regular', monospace", // IBM Plex Mono
  },
  layout: {
    maxWidth: '1320px',
    gutter: 'clamp(22px, 5vw, 84px)',
    radius: '10px',
    radiusLg: '16px',
    radiusPill: '999px',
  },
  shadow: {
    card: '0 1px 2px rgba(6, 44, 59, 0.05), 0 14px 34px rgba(6, 44, 59, 0.07)',
    cardHover: '0 8px 20px rgba(6, 44, 59, 0.12), 0 28px 56px rgba(6, 44, 59, 0.16)',
  },
} as const;

export type AppTheme = typeof theme;
