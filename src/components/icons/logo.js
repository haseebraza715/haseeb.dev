import React from 'react';

const IconLoader = () => (
  <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <title>Loader Logo</title>
    <g>
      {/* Replace W path with clean text "H" */}
      <text
        x="50%"
        y="54%"
        textAnchor="middle"
        fill="#3A9188"
        fontSize="50"
        fontFamily="var(--font-serif)"
        dy=".3em"
      >
        H
      </text>

      {/* Hexagon outline stays the same */}
      <path
        stroke="#3A9188"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M 50, 5
           L 11, 27
           L 11, 72
           L 50, 95
           L 89, 73
           L 89, 28 z"
      />
    </g>
  </svg>
);

export default IconLoader;
