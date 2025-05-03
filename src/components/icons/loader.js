import React from 'react';
import styled, { keyframes } from 'styled-components';

const drawHexagon = keyframes`
  0% {
    stroke-dashoffset: 360;
  }
  100% {
    stroke-dashoffset: 0;
  }
`;

const glow = keyframes`
  0%, 100% {
    fill: #3A9188;
    filter: drop-shadow(0 0 6px #3A9188);
  }
  50% {
    fill: #50C9CE;
    filter: drop-shadow(0 0 14px #50C9CE);
  }
`;

const StyledSVG = styled.svg`
  width: 100px;
  height: 100px;
  display: block;
`;

const Hexagon = styled.path`
  fill: none;
  stroke: url(#grad);
  stroke-width: 4;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 360;
  stroke-dashoffset: 360;
  animation: ${drawHexagon} 3s cubic-bezier(0.77, 0, 0.175, 1) forwards;
`;

const Letter = styled.text`
  font-size: 42px;
  text-anchor: middle;
  dominant-baseline: middle;
  font-family: 'Georgia', serif;
  animation: ${glow} 3s ease-in-out infinite;
`;

const IconLoader = () => (
  <StyledSVG id="logo" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3A9188" />
        <stop offset="100%" stopColor="#50C9CE" />
      </linearGradient>
    </defs>

    <Hexagon d="M50,5 L11,27 L11,72 L50,95 L89,73 L89,28 Z" />
    <Letter x="50" y="54">H</Letter>
  </StyledSVG>
);

export default IconLoader;
