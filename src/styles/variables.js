import { css } from 'styled-components';

const variables = css`
  :root {
    /* -- Classic Midnight Theme -- */
    --bg-main: #0a192f;           /* Deep Navy */
    --bg-section: #112240;        /* Light Navy */
    --bg-elevated: #233554;       /* Lighter Navy */
    
    /* Text Colors */
    --text-primary: #ccd6f6;      /* Lightest Slate */
    --text-secondary: #8892b0;    /* Light Slate */
    --text-tertiary: #a8b2d1;     /* Slate */
    
    /* Branding & Accents */
    --primary: #64ffda;           /* Green / Teal */
    --primary-dark: #64ffda;      /* Same for now */
    --primary-tint: rgba(100, 255, 218, 0.1);
    
    /* Legacy mapping */
    --navy: var(--bg-main);
    --light-navy: var(--bg-section);
    --lightest-navy: var(--bg-elevated);
    --slate: var(--text-secondary);
    --light-slate: var(--text-tertiary);
    --lightest-slate: var(--text-primary);
    --green: var(--primary);
    --green-tint: var(--primary-tint);
    --white: #e6f1ff;

    /* Shadow & Effects */
    --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    --shadow-main: 0 10px 30px -10px rgba(0, 0, 0, 0.4);
    --shadow-hover: 0 20px 40px -15px rgba(0, 0, 0, 0.5);
    --shadow-glow: 0 0 20px rgba(100, 255, 218, 0.2);

    /* Typography - Clean, modern fonts */
    --font-sans: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
    --font-mono: 'Fira Code', 'SF Mono', 'Consolas', 'Monaco', monospace;

    /* Font Sizes - Balanced scale */
    --fz-xxs: 0.75rem;    /* 12px */
    --fz-xs: 0.8125rem;   /* 13px */
    --fz-sm: 0.875rem;    /* 14px */
    --fz-md: 1rem;        /* 16px */
    --fz-lg: 1.125rem;    /* 18px */
    --fz-xl: 1.25rem;     /* 20px */
    --fz-xxl: 1.375rem;   /* 22px */
    --fz-heading: 2rem;   /* 32px */

    /* Spacing & Layout */
    --border-radius: 6px;
    --border-radius-sm: 4px;
    --border-radius-lg: 12px;
    
    --nav-height: 70px;
    --nav-scroll-height: 60px;

    --tab-height: 42px;
    --tab-width: 120px;

    /* Animations */
    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --easing-smooth: cubic-bezier(0.4, 0, 0.2, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition-smooth: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

    --hamburger-width: 30px;
    --ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
    --ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
    --ham-after: bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    --ham-after-active: bottom 0.1s ease-out, transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
  }
`;

export default variables;
