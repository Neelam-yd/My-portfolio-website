import React from 'react';
import styled, { keyframes } from 'styled-components';
import { slideInLeft, slideInRight, zoomIn } from 'react-animations';
import './Styles/project.css'; 
import landingpage from './landingpage.png';
import portfolio from './portfolio.png';
import url from "./url.png";

const slideInLeftAnimation = keyframes`${slideInLeft}`;
const slideInRightAnimation = keyframes`${slideInRight}`;
const zoomInAnimation = keyframes`${zoomIn}`;

const LeftAnimatedDiv = styled.div`
  animation: 1s ${slideInLeftAnimation};
`;

const RightAnimatedDiv = styled.div`
  animation: 1s ${slideInRightAnimation};
`;

const ZoomInAnimatedDiv = styled.div`
  animation: 1s ${zoomInAnimation};
`;

const MyProjects = () => {
  return (
    <section className="ProjectSection">
      <h2 className='project'><span className="name">My</span> Projects</h2>
      <div className="ProjectsWrapper">
        <LeftAnimatedDiv className="ProjectCard">
          <a href="https://neelam-portfolio-website.vercel.app/">
            <img src={portfolio} alt='Portfolio' className="ProjectImage" />
            <h3 className="ProjectTitle">Portfolio using React</h3>
          </a>
          <p className="ProjectDescription">
            "An interactive showcase of my skills and achievements, crafted with React to captivate and inform visitors about my professional journey."
          </p>
        </LeftAnimatedDiv>
        < ZoomInAnimatedDiv className="ProjectCard">
          <a href="https://github.com/Neelam-yd/landing-page">
            <img src={landingpage} alt="Landing page" className="ProjectImage" />
            <h3 className="ProjectTitle">Landing Page</h3>
          </a>
          <p className="ProjectDescription">
            "A striking landing page designed to leave a lasting impression, offering a seamless introduction to my brand or product with intuitive navigation and captivating visuals."
          </p>
          </ZoomInAnimatedDiv>
      
        < RightAnimatedDiv className="ProjectCard">
          <img src={url} alt="url tracker" className="ProjectImage" />
          <h3 className="ProjectTitle">ML based URL Tracker</h3>
          <p className="ProjectDescription">
            "An extension is made using machine learning that detects phishing and safe websites."
          </p>
          </RightAnimatedDiv>
       
      </div>
    </section>
  );
};

export default MyProjects;
