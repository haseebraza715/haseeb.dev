import { css } from 'styled-components';

const variables = css`
  :root {
      * Navy Base Colors */
      --dark-navy: #020c1b;               /* Rich deep navy-black */
      --navy: #1a2635;                    /* Cooler modern navy */
      --light-navy: #112240;              /* Section backgrounds */
      --lightest-navy: #233554;           /* Cards or panels */
      --navy-shadow: rgba(2, 12, 27, 0.7);

      /* Slate Text and UI Grays */
      --dark-slate: #4e5d6c;
      --slate: #9caec1;
      --light-slate: #cedae4;
      --lightest-slate: #ccd6f6;

      /* Whites */
      --white: #f9fbfc;

      /* Accent Colors */
      --green: #5ddacb;                   /* Balanced mint tone */
      --green-tint: rgba(93, 218, 203, 0.12);

      --pink: #ee91b3;                    /* Soft rose accent */
      --blue: #78bff6;                    /* Cool sky blue */

      /* Mimir Branding Variants */
      --dark-mimir-green:rgb(5, 16, 29);        /* Soft deep navy for header */
      --dark-mimir-green-og:rgb(10, 36, 67);     /* Slightly lifted depth */
      --mimir-green: #0c453e;             /* Same as primary green */
      --light-mimir-green:rgb(11, 130, 112);       /* Lighter mint accent */
      --lightest-mimir-green: #8cfff0;
      --mimir-green-shadow: rgba(93, 218, 203, 0.3);
      --mimir-white: #f2f7f9;
      --mimir-green-tint: rgba(16, 51, 47, 0.15);





    --font-sans: 'Calibre', 'Inter', 'San Francisco', 'SF Pro Text', -apple-system, system-ui,
      sans-serif;
    --font-mono: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;
    --font-serif: 'Merriweather', 'Georgia', serif;
    --font-heading: 'Calibre', 'Inter', 'San Francisco', 'SF Pro Text', -apple-system, system-ui,
      sans-serif;
    --font-pop: 'Poppins', sans-serif;
    --font-cor : 'Montserrat, sans-serif';

    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-heading: 32px;

    --border-radius: 4px;
    --nav-height: 100px;
    --nav-scroll-height: 70px;

    --tab-height: 42px;
    --tab-width: 120px;

    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    --hamburger-width: 30px;

    --ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
    --ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
    --ham-after: bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    --ham-after-active: bottom 0.1s ease-out,
      transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
  }
`;

export default variables;
