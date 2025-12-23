import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { navDelay, loaderDelay } from '@utils';
import { usePrefersReducedMotion } from '@hooks';
// import { email } from '@config';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  padding: 0;

  @media (max-width: 768px) {
    padding: 100px 0 60px;
  }

  @media (max-width: 600px) {
    padding: 80px 0 40px;
  }

  h1 {
    margin: 0 0 20px 4px;
    color: var(--primary);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h2 {
    margin: 0;
    font-size: clamp(40px, 8vw, 80px);
    font-weight: 700;
    letter-spacing: -0.02em;
    // Charming Slate-to-Teal Gradient
    background: linear-gradient(90deg, var(--text-primary) 10%, var(--primary) 90%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    line-height: 1.1;
    
    // Fallback
    @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
      color: var(--text-primary);
      background: none;
    }
  }

  h3 {
    margin: 5px 0 0; // tighter spacing
    color: var(--text-tertiary);
    line-height: 0.9;
    font-size: clamp(30px, 7vw, 70px);
    font-weight: 700;
  }

  p {
    margin: 30px 0 0;
    max-width: 540px;
    font-size: var(--fz-lg);
    line-height: 1.6;
    color: var(--text-secondary);
    
    // Make link pop
    a {
      color: var(--primary);
      position: relative;
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 1px;
        background-color: var(--primary);
        transition: width 0.3s ease;
      }
      &:hover::after {
        width: 100%;
      }
    }
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
    display: inline-block; // Ensure it doesn't overlap
    text-align: center;

    @media (max-width: 600px) {
      margin-top: 30px;
      display: block; // Stack on small screens
      width: fit-content;
      margin-left: auto;
      margin-right: auto;
    }
  }
`;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <h1>Hi, my name is</h1>;
  const two = <h2>Haseeb Raza.</h2>;
  const three = <h3>Build cool things with Web and AI.</h3>;
  const four = (
    <>
      <p>
        I’m a Computer Science student at <a href="https://www.elte.hu/en" target="_blank" rel="noreferrer">ELTE</a> in Budapest, focused on advancing AI and Machine Learning. I build intelligent systems that learn, adapt, and scale reliably beyond basic execution.
      </p>
    </>
  );
  const five = (
    <a
      className="email-link"
      href="mailto:haseeb.javed715@gmail.com?subject=Hello%20there&body=Hi%2C%20Haseeb%0A"
      target="_blank"
      rel="noreferrer"
    >
      Reach out to me!
    </a>
  );

  const items = [one, two, three, four, five];

  return (
    <StyledHeroSection>
      {prefersReducedMotion ? (
        <>
          {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </>
      ) : (
        <TransitionGroup component={null}>
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
              </CSSTransition>
            ))}
        </TransitionGroup>
      )}
    </StyledHeroSection>
  );
};

export default Hero;
