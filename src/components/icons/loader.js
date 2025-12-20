import React from 'react';
import styled, { keyframes } from 'styled-components';

const draw = keyframes`
  to {
    stroke-dashoffset: 0;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const StyledSVG = styled.svg`
  width: 100px;
  height: 100px;
  display: block;
`;

const Hexagon = styled.path`
  fill: none;
  stroke: #34d399;
  stroke-width: 4;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 360;
  stroke-dashoffset: 360;
  animation: ${draw} 1.5s ease-out forwards;
  filter: drop-shadow(0 0 10px rgba(52, 211, 153, 0.6));
`;

const Letter = styled.text`
  font-size: 50px;
  font-weight: 700;
  text-anchor: middle;
  dominant-baseline: middle;
  font-family: 'Poppins', sans-serif;
  fill: #34d399;
  opacity: 0;
  animation: ${fadeIn} 0.5s ease-out 1s forwards;
  filter: drop-shadow(0 0 6px rgba(52, 211, 153, 0.6));
`;

const IconLoader = () => (
  <StyledSVG viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <Hexagon d="M50,5 L11,27 L11,72 L50,95 L89,73 L89,28 Z" />
    <Letter x="50" y="52">H</Letter>
  </StyledSVG>
);

export default IconLoader;
