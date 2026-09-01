import { createGlobalStyle } from "styled-components"

/**
 * Brand palette + global resets. Headings use "Fredoka" — a rounded, whimsical
 * display font that stays easy to read — loaded from Google Fonts in the page
 * <Head>. Swap --display below to try a different heading font everywhere.
 */
export const GlobalStyle = createGlobalStyle`
  :root {
    --display: "Fredoka", "Trebuchet MS", "Segoe UI", sans-serif;
    /* Evergreen & Cream — warm, festive, trustworthy (no pink) */
    --evergreen: #14653f;
    --evergreen-dark: #0e4a2d;
    --brand-red: #c62828;
    --brand-red-dark: #9c1f1f;
    --gold: #c1922e;
    --paper: #f5f8f6;
    --mist: #e5efe8;
    --ink: #2c2a22;
    --ink-soft: #6a6252;
    --surface: #ffffff;
    --shadow: 0 18px 40px -22px rgba(20, 50, 32, 0.4);
  }

  * {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    color: var(--ink);
    background: var(--paper);
    font-family: "Inter", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto,
      Helvetica, Arial, sans-serif;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
  }

  h1, h2, h3 {
    font-family: var(--display);
    font-weight: 500;
    color: var(--evergreen);
    line-height: 1.15;
    letter-spacing: -0.01em;
    margin: 0;
  }

  a {
    color: var(--brand-red-dark);
  }

  :focus-visible {
    outline: 3px solid var(--brand-red);
    outline-offset: 2px;
    border-radius: 4px;
  }
`
