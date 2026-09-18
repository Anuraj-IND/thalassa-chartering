'use client';

import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  html, body {
    padding: 0;
    margin: 0;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.body};
    background: ${({ theme }) => theme.colors.pageBg};
    color: ${({ theme }) => theme.colors.headingOnLight};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.5;
  }

  /* Offset in-page anchors so the sticky navbar doesn't cover section tops. */
  section[id] {
    scroll-margin-top: 84px;
  }

  ::selection {
    background: ${({ theme }) => theme.colors.orange};
    color: #fff;
  }

  @media (prefers-reduced-motion: reduce) {
    html { scroll-behavior: auto; }
    *, *::before, *::after {
      animation-duration: 0.001ms !important;
      transition-duration: 0.001ms !important;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-family: ${({ theme }) => theme.fonts.display};
    font-weight: 600;
    letter-spacing: 0;
    line-height: 1.08;
  }

  p {
    margin: 0;
  }

  button {
    font-family: inherit;
    cursor: pointer;
  }

  img {
    max-width: 100%;
    display: block;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  :focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.orange};
    outline-offset: 2px;
  }

  /* OpenFreeMap / MapLibre city markers + labels. */
  .ofm-dot {
    position: relative;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: #F47A32;
    box-shadow: 0 0 12px rgba(244, 122, 50, 0.8);
  }
  .ofm-dot::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50%;
    border: 2px solid #F47A32;
    animation: ofmPulse 2.6s ease-out infinite;
  }
  @keyframes ofmPulse {
    0% { transform: scale(0.6); opacity: 0.9; }
    70% { transform: scale(2.6); opacity: 0; }
    100% { transform: scale(2.6); opacity: 0; }
  }
  .maplibregl-popup.ofm-pop .maplibregl-popup-content {
    background: rgba(4, 30, 40, 0.92);
    border: 1px solid rgba(244, 122, 50, 0.65);
    border-radius: 8px;
    color: #fff;
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    padding: 6px 12px;
  }
  .maplibregl-popup.ofm-pop .maplibregl-popup-tip { display: none; }
  .maplibregl-ctrl-attrib {
    background: rgba(4, 30, 40, 0.7);
    font-size: 10px;
  }
  .maplibregl-ctrl-attrib a { color: rgba(255, 255, 255, 0.65); }
  @media (prefers-reduced-motion: reduce) {
    .ofm-dot::after { animation: none; opacity: 0; }
  }
`;
