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
    letter-spacing: -0.01em;
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
`;
