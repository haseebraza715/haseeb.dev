import React from 'react';

const IconLoader = () => (
  <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <title>Loader Logo</title>
    <defs>
      {/* Gradient for the hexagon stroke */}
      <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3A9188" />
        <stop offset="100%" stopColor="#50C9CE" />
      </linearGradient>
      {/* Filter for subtle text shadow */}
      <filter id="textShadow">
        <feDropShadow dx="0" dy="2" stdDeviation="1" floodColor="#50C9CE" />
      </filter>
    </defs>
    <g>
      <text
        x="50%"
        y="52%"
        textAnchor="middle"
        fill="#3A9188"
        fontSize="50"
        fontFamily="var(--font-serif)"
        dy=".3em"
        filter="url(#textShadow)"
      >
        H
      </text>
      <path
        fill="none"
        stroke="url(#hexGradient)"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M50,5 L11,27 L11,72 L50,95 L89,73 L89,28 Z"
      />
    </g>
  </svg>
);

export default IconLoader;
