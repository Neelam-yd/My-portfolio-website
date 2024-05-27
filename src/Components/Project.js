import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Styles/project.css'; 
import landingpage from './landingpage.png';
import portfolio from './portfolio.png';

AOS.init();
const Project = ({ name, description, image, githubUrl }) => {
  const handleViewProject = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="p" >
      <h2><span className="name">My</span> Projects</h2>
      <div className="container">
       
    <div className="project project1">
    <div data-aos="flip-left">
      <img src={landingpage} alt={landingpage} />
      <div className="overlay">
        <div className="project-details">
          <h2>Landing Page</h2>
          <p>{description}</p>
          <button onClick={() => handleViewProject(githubUrl)}>View</button>
        </div>
      </div>
    </div>
    </div>
     <div className="project project2">
     <div data-aos="flip-right">
     <img src={portfolio} alt={portfolio} />
     <div className="overlay">
       <div className="project-details">
         <h2>Portfolio</h2>
         <p>{description}</p>
         <button onClick={() => handleViewProject(githubUrl)}>View</button>
       </div>
     </div>
   </div>
   </div>

   </div>
   </div>
  );
};

export default Project;
