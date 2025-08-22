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

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--lightest-mimir-green);
        font-size: var(--fz-sm);
        line-height: 12px;
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
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    //background-color: var(--lightest-mimir-green);
    background-color: white;
    &:hover,
    &:focus {
      outline: 0;

      &:after {
        top: 15px;
        left: 15px;
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--mimir-green);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--lightest-mimir-green);
      top: 20px;
      left: 20px;
      z-index: -1;
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
  I love creating systems that not only work but feel seamless—whether it’s a clean, responsive interface or a robust, well-architected backend. Curiosity drives me, and I thrive on the challenge of turning ideas into intelligent digital solutions that people genuinely enjoy using.
</p>

<p>
  My journey started in 2022 with an internship at <a href="https://waseerhost.com" target="_blank">WaseerHost</a>, where I built responsive, SEO-friendly websites and got my first real taste of development in practice. That experience inspired me to pursue Computer Science at <a href="https://www.elte.hu/en" target="_blank">Eötvös Loránd University (ELTE)</a> in Budapest, where I’ve since expanded my focus to software engineering, backend systems, and applied AI.
</p>

<p>
  Since then, I’ve worked with technologies like React, Laravel, Flask, and MongoDB—building projects ranging from learning platforms to intelligent assistants. Alongside development, I’ve explored containerization, cloud-based workflows, and scalable architectures, with growing research interests in artificial intelligence and machine learning.
</p>

<p>
  I enjoy solving real problems, collaborating with curious people, and continuously learning through hands-on experimentation, research, and building practical tools.
</p>

<p>Here are a few technologies and areas I’ve been working with or exploring recently:</p>

        </div>




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
