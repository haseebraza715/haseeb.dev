module.exports = {
  email: 'haseeb.javed715@gmail.com',

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/haseebraza715',
    },

    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/haseeb-raza-00a845231/',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/ylocctjv-the-decoder',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/haseeb.rada/',
    },
    {
      name: 'Twitter',
      url: 'https://x.com/HaseebRaza715',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  colors: {
    blue: '#7FDBFF',           // Soft Sky Blue
    midnight: '#1B1F3B',       // Deep Midnight Blue
    darkMidnight: '#0F1323',   // Almost Black Blue
    mysticPurpleDarkest: '#2C2A4A',
    mysticPurpleDarker: '#4B3C72',
    mysticPurpleDark: '#7D5BA6',
    mysticPurple: '#D6C3FF',
    cloudWhite: '#F8F9FA',
  }
  ,

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
