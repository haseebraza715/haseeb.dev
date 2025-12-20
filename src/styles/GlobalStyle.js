import { createGlobalStyle } from 'styled-components';
import fonts from './fonts';
import variables from './variables';
import TransitionStyles from './TransitionStyles';
import PrismStyles from './PrismStyles';

const GlobalStyle = createGlobalStyle`
  ${fonts};
  ${variables};

  html {
    box-sizing: border-box;
    width: 100%;
    scroll-behavior: smooth;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  ::selection {
    background-color: var(--primary-tint);
    color: var(--text-primary);
  }



  /* Provide basic, default focus styles.*/
  :focus {
    outline: 2px dashed var(--primary);
    outline-offset: 3px;
  }

  /*
    Remove default focus styles for mouse users ONLY if
    :focus-visible is supported on this platform.
  */
  :focus:not(:focus-visible) {
    outline: none;
    outline-offset: 0px;
  }

  /*
    Optionally: If :focus-visible is supported on this
    platform, provide enhanced focus styles for keyboard
    focus.
  */
  :focus-visible {
    outline: 2px dashed var(--primary);
    outline-offset: 3px;
  }

  /* Scrollbar Styles */
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--text-secondary) var(--bg-main);
  }
  ::-webkit-scrollbar {
    width: 12px;
  }
  ::-webkit-scrollbar-track {
    background: var(--bg-main);
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--text-secondary);
    border: 3px solid var(--bg-main);
    border-radius: 10px;
  }

  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    background-color: var(--bg-main);
    color: var(--text-secondary);
    font-family: var(--font-sans);
    font-size: clamp(16px, 1vw + 0.5rem, 18px);
    line-height: 1.7;
    font-weight: 400;

    @media (max-width: 480px) {
      font-size: clamp(14px, 3vw, 16px);
      line-height: 1.5;
    }

    &.hidden {
      overflow: hidden;
    }

    &.blur {
      overflow: hidden;

      header {
        background-color: transparent;
      }

      #content > * {
        filter: blur(5px) brightness(0.7);
        transition: var(--transition);
        pointer-events: none;
        user-select: none;
      }
    }
  }

  #root {
    min-height: 100vh;
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns: 100%;
  }

  main {
    margin: 0 auto;
    width: 100%;
    max-width: 1600px;
    min-height: 100vh;
    padding: 100px 80px;

    @media (max-width: 1200px) {
      padding: 100px 60px;
    }
    @media (max-width: 1080px) {
      padding: 90px 50px;
    }
    @media (max-width: 768px) {
      padding: 80px 40px;
    }
    @media (max-width: 480px) {
      padding: 70px 25px;
    }

    &.fillHeight {
      padding: 0 80px;

      @media (max-width: 1200px) {
        padding: 0 60px;
      }
      @media (max-width: 1080px) {
        padding: 0 50px;
      }
      @media (max-width: 768px) {
        padding: 0 40px;
      }
      @media (max-width: 480px) {
        padding: 0 25px;
      }
    }
  }

  section {
    margin: 0 auto;
    padding: 60px 0;
    max-width: 1000px;

    @media (max-width: 768px) {
      padding: 50px 0;
    }

    @media (max-width: 480px) {
      padding: 40px 0;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0 0 10px 0;
    font-weight: 600;
    color: var(--text-primary);
    line-height: 1.2;
    letter-spacing: -0.02em;
  }

  .big-heading {
    margin: 0;
    font-size: clamp(40px, 8vw, 80px);
    font-weight: 700;
    letter-spacing: -0.03em;
  }

  .big-heading-archive {
    margin: 0;
    font-size: clamp(40px, 8vw, 80px);
    font-weight: 700;
    color: var(--primary);
    letter-spacing: -0.03em;
  }

  .medium-heading {
    margin: 0;
    font-size: clamp(32px, 6vw, 60px);
    font-weight: 600;
    letter-spacing: -0.02em;
  }

  .numbered-heading {
    display: flex;
    align-items: center;
    position: relative;
    margin: 10px 0 40px;
    width: 100%;
    font-size: clamp(22px, 4vw, var(--fz-heading));
    white-space: nowrap;
    color: var(--text-primary);
    font-weight: 600;

    &:before {
      position: relative;
      bottom: 4px;
      counter-increment: section;
      content: '0' counter(section) '.';
      margin-right: 10px;
      color: var(--primary);
      font-family: var(--font-mono);
      font-size: clamp(var(--fz-md), 3vw, var(--fz-xl));
      font-weight: 400;

      @media (max-width: 480px) {
        margin-bottom: -3px;
        margin-right: 5px;
      }
    }

    &:after {
      content: '';
      display: block;
      position: relative;
      top: -5px;
      width: 300px;
      height: 1px;
      margin-left: 20px;
      background-color: var(--bg-elevated);

      @media (max-width: 1080px) {
        width: 200px;
      }
      @media (max-width: 768px) {
        width: 100%;
      }
      @media (max-width: 600px) {
        margin-left: 10px;
      }
    }
  }

  img,
  svg,
  .gatsby-image-wrapper {
    width: 100%;
    max-width: 100%;
    vertical-align: middle;
  }

  img[alt=""],
  img:not([alt]) {
    filter: blur(5px);
  }

  svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
    vertical-align: middle;

    &.feather {
      fill: none;
    }
  }

  a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: var(--transition);
    cursor: pointer;

    &:hover,
    &:focus {
      color: var(--primary);
    }

    &:focus-visible {
      outline: 2px solid var(--primary);
      outline-offset: 3px;
      border-radius: 2px;
    }

    &.inline-link {
      ${({ theme }) => theme.mixins.inlineLink};
    }

    &.inline-company-link {
      ${({ theme }) => theme.mixins.inlineCompanyLink};
    }
  }

  button {
    cursor: pointer;
    border: 0;
    border-radius: 0;
    min-height: 44px;
    
    &:focus-visible {
      outline: 2px solid var(--primary);
      outline-offset: 2px;
      border-radius: 4px;
    }
  }

  input, textarea {
    border-radius: 0;
    outline: 0;
    font-size: 16px; /* Prevents zoom on iOS */

    &:focus {
      outline: 0;
    }
    &:focus,
    &:active {
      outline: 0;
    }
    
    &:focus-visible {
      outline: 2px solid var(--primary);
      outline-offset: 2px;
    }
  }

  p {
    margin: 0 0 15px 0;
    max-width: 65ch;
    line-height: 1.7;

    &:last-child,
    &:last-of-type {
      margin: 0;
    }

    & > a {
      ${({ theme }) => theme.mixins.inlineLink};
    }

    & > code {
      background-color: var(--bg-elevated);
      color: var(--text-primary);
      font-size: var(--fz-sm);
      border-radius: 3px;
      padding: 0.3em 0.5em;
    }
  }

  ul {
    &.fancy-list {
      padding: 0;
      margin: 0;
      list-style: none;
      font-size: var(--fz-lg);
      li {
        position: relative;
        padding-left: 30px;
        margin-bottom: 10px;
        &:before {
          content: '▹';
          position: absolute;
          left: 0;
          color: var(--primary);
        }
      }
    }
  }

  blockquote {
    border-left-color: var(--primary);
    border-left-style: solid;
    border-left-width: 1px;
    margin-left: 0px;
    margin-right: 0px;
    padding-left: 1.5rem;

    p {
      font-style: italic;
      font-size: 24px;
    }
  }

  hr {
    background-color: var(--bg-elevated);
    height: 1px;
    border-width: 0px;
    border-style: initial;
    border-color: initial;
    border-image: initial;
    margin: 1rem;
  }

  code {
    font-family: var(--font-mono);
    font-size: var(--fz-md);
  }

  .skip-to-content {
    ${({ theme }) => theme.mixins.button};
    position: absolute;
    top: auto;
    left: -999px;
    width: 1px;
    height: 1px;
    overflow: hidden;
    z-index: -99;

    &:focus,
    &:active {
      background-color: var(--primary);
      color: var(--bg-main);
      top: 0;
      left: 0;
      width: auto;
      height: auto;
      overflow: auto;
      z-index: 99;
    }
  }

  #logo {
    color: var(--primary);
  }

  .overline {
    color: var(--primary);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;
  }

  .subtitle {
    color: var(--primary);
    margin: 0 0 20px 0;
    font-size: var(--fz-md);
    font-family: var(--font-mono);
    font-weight: 400;
    line-height: 1.5;
    @media (max-width: 1080px) {
      font-size: var(--fz-sm);
    }
    @media (max-width: 768px) {
      font-size: var(--fz-xs);
    }

    a {
      ${({ theme }) => theme.mixins.inlineLink};
      line-height: 1.5;
    }
  }

  .breadcrumb {
    display: flex;
    align-items: center;
    margin-bottom: 50px;
    color: var(--primary);

    .arrow {
      display: block;
      margin-right: 10px;
      padding-top: 4px;
    }

    a {
      ${({ theme }) => theme.mixins.inlineLink};
      font-family: var(--font-mono);
      font-size: var(--fz-sm);
      font-weight: 600;
      line-height: 1.5;
      text-transform: uppercase;
      letter-spacing: 0.1em;
    }
  }

  .gatsby-image-outer-wrapper {
    height: 100%;
  }

  ${TransitionStyles};

  ${PrismStyles};
`;

export default GlobalStyle;
