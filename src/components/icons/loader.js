import React from 'react';
import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
  0% {
    stroke-dashoffset: 400;
  }
  100% {
    stroke-dashoffset: 0;
  }
`;

const pulseGlow = keyframes`
  0%, 100% {
    text-shadow: 0 0 5px #3A9188;
  }
  50% {
    text-shadow: 0 0 15px #50C9CE;
  }
`;

const StyledSVG = styled.svg`
  width: 120px;
  height: 120px;
  display: block;
  margin: 0 auto;
`;

const Hexagon = styled.path`
  fill: none;
  stroke: url(#grad);
  stroke-width: 4;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 400;
  stroke-dashoffset: 400;
  animation: ${shimmer} 3s ease-in-out infinite;
`;

const Letter = styled.text`
  fill: #3A9188;
  font-family: var(--font-serif);
  font-size: 44px;
  text-anchor: middle;
  dominant-baseline: central;
  animation: ${pulseGlow} 2s ease-in-out infinite;
`;

const IconLoader = () => (
  <StyledSVG
    id="logo"
    role="img"
    aria-label="Hexagon with glowing H"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
  >
    <defs>
      <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3A9188" />
        <stop offset="100%" stopColor="#50C9CE" />
      </linearGradient>
    </defs>

    {/* Hexagon shimmer */}
    <Hexagon d="M 50, 5
                L 11, 27
                L 11, 72
                L 50, 95
                L 89, 73
                L 89, 28 z" />

    {/* Glowing "H" */}
    <Letter x="50" y="52">H</Letter>
  </StyledSVG>
);

export default IconLoader;
