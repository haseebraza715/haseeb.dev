import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import anime from 'animejs';
import styled from 'styled-components';
import { IconLoader } from '@components/icons';

const StyledLoader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #0a192f;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transform: scale(${({ isVisible }) => (isVisible ? 1 : 1.05)});
  transition: opacity 0.6s ease, transform 0.8s ease;
  pointer-events: ${({ isVisible }) => (isVisible ? 'auto' : 'none')};

  .logo-wrapper {
    opacity: ${({ isMounted }) => (isMounted ? 1 : 0)};
    transform: scale(${({ isMounted }) => (isMounted ? 1 : 0.9)});
    transition: all 0.6s ease;
    will-change: opacity, transform;
  }
`;

const Loader = ({ finishLoading }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer1 = setTimeout(() => setIsMounted(true), 100);

    anime({
      targets: '#logo path',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutQuart',
      duration: 1800,
      delay: 200,
    });

    anime({
      targets: '#logo text',
      opacity: [0, 1],
      duration: 1000,
      easing: 'easeInOutQuad',
      delay: 1200,
    });

    const timer2 = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => finishLoading(), 700); // match fade out
    }, 3000); // total duration visible

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [finishLoading]);

  return (
    <StyledLoader isMounted={isMounted} isVisible={isVisible} className="loader">
      <Helmet bodyAttributes={{ class: 'hidden' }} />
      <div className="logo-wrapper">
        <IconLoader />
      </div>
    </StyledLoader>
  );
};

Loader.propTypes = {
  finishLoading: PropTypes.func.isRequired,
};

export default Loader;
