import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 1024px) {
      grid-gap: 30px;
    }

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    padding: 0;
    margin: 20px 0 0 0;
    list-style: none;

    li {
      position: relative;
      padding: 6px 14px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);
      background: rgba(16, 185, 129, 0.1);
      color: var(--primary);
      border: 1px solid rgba(16, 185, 129, 0.2);
      border-radius: 20px;
      transition: all 0.2s ease;
      cursor: default;

      &:hover {
        background: rgba(16, 185, 129, 0.2);
        transform: translateY(-2px);
      }
    }
  }
`;

const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    
    // Floating animation
    animation: float 6s ease-in-out infinite;

    @keyframes float {
      0% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
      100% { transform: translateY(0px); }
    }

    &:hover,
    &:focus {
      outline: 0;

      .img {
        filter: none;
        mix-blend-mode: normal;
        transform: scale(1.02);
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      // Clean, no heavy tint
      transition: var(--transition);
      box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
    }
    
    // Decorative border ring
    &::after {
        content: '';
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: var(--border-radius);
        border: 2px solid var(--primary);
        top: 15px;
        left: 15px;
        z-index: -1;
        transition: var(--transition);
    }
    
    &:hover::after {
        top: 10px;
        left: 10px;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = [
    'JavaScript',
    'Python',
    'Java',
    'HTML & CSS',
    'React.js',
    'Flask',
    'Node.js',
    'Express.js',
    'SQL',
    'MongoDB',
    'Docker',
    'Kubernetes',
    'Git & GitHub',
    'REST APIs'
  ];


  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>

            <p>
              I like building systems that work reliably and are straightforward to use, whether that is a small web app, a backend service, or a tool that automates something repetitive.
            </p>

            <p>
              I study Computer Science at{' '}
              <a href="https://www.elte.hu/en" target="_blank"> Eötvös Loránd University (ELTE)</a> in Budapest, where I focus on software engineering, data science, and applied AI. Most of my projects sit somewhere between backend development and data-heavy applications.
            </p>

            <p>
              I have worked with technologies like React, Laravel, Flask, FastAPI, and MongoDB, and on the data side I use Python, pandas, NumPy, and scikit-learn for analysis and ML experiments. I have built things like learning platforms, small intelligent assistants, and tools that process and interpret real-world data.
            </p>

            <p>
              I like clear problems, direct feedback, and building things that are actually used, not just nice to show in a presentation.
            </p>
          </div>
          <p>Here are a few technologies and areas I’ve been working with or exploring recently:</p>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me1.jpg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
