import React from 'react';

const IconLogo = () => (
  <svg
    id="logo"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    viewBox="0 0 100 100"
  >
    <title>Logo</title>
    <defs>
      {/* Corner glow effect */}
      <filter id="cornerGlow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
        <feComponentTransfer in="blur" result="glow">
          <feFuncA type="linear" slope="0.8" />
        </feComponentTransfer>
        <feMerge>
          <feMergeNode in="glow" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    {/* Main hexagon with corner glow */}
    <path
      fill="none"
      stroke="#10b981"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M50,5 L11,27 L11,72 L50,95 L89,73 L89,28 Z"
      filter="url(#cornerGlow)"
    />

    {/* Bright letter H */}
    <text
      x="50"
      y="52"
      textAnchor="middle"
      fill="#34d399"
      fontSize="52"
      fontFamily="Poppins, sans-serif"
      fontWeight="700"
      dy=".35em"
      style={{
        filter: 'drop-shadow(0 0 8px rgba(52, 211, 153, 0.5))'
      }}
    >
      H
    </text>
  </svg>
);

export default IconLogo;
