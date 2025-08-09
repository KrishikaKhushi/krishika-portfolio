import React, { useState, useEffect, useRef } from 'react';
import './Projects.css';
import './ProjectsRes.css';
import clinicImage from '../assets/projects/clinic.png';
import aiRemoteImage from '../assets/projects/airemote.jpg';
import smartHomeImage from '../assets/projects/smarthome.png';
import wanderlogImage from '../assets/projects/wanderlog.png';
import portfolioImage from '../assets/projects/portfolio.png';
import hyperparameterImage from '../assets/projects/hyperparameter.png';
import aiResumeImage from '../assets/projects/airesume.png';
import chibiLeft from '../assets/chibi/left.png';

// Intersection Observer Hook for animations - Modified to trigger every time
const useInViewAnimation = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Set visibility based on whether element is intersecting
        setIsVisible(entry.isIntersecting);
        // DON'T unobserve - keep watching for repeated triggers
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
        ...options
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options]);

  return [ref, isVisible];
};

function Projects() {
  // Animation refs for each container
  const [titleRef, isTitleVisible] = useInViewAnimation();
  const [clinicRef, isClinicVisible] = useInViewAnimation();
  const [aiRemoteRef, isAiRemoteVisible] = useInViewAnimation();
  const [smartHomeRef, isSmartHomeVisible] = useInViewAnimation();
  const [wanderlogRef, isWanderlogVisible] = useInViewAnimation();
  const [hyperparameterRef, isHyperparameterVisible] = useInViewAnimation();
  const [portfolioRef, isPortfolioVisible] = useInViewAnimation();
  const [aiResumeRef, isAiResumeVisible] = useInViewAnimation();
  const [githubRef, isGithubVisible] = useInViewAnimation();

  return (
    <div className="projects-section">
      {/* Grid background elements */}
      <div className="vertical-lights"></div>
      <div className="corner-glow-1"></div>
      <div className="corner-glow-2"></div>
      <div className="particle1"></div>
      <div className="particle2"></div>
      
      {/* Chibi Sticker with Dialogue - Left corner (NO ANIMATION) */}
      <div className="projects-chibi-container">
        <div className="projects-chibi-sticker">
          <img src={chibiLeft} alt="Chibi Helper" className="projects-chibi-image" />
        </div>
        <div className="projects-dialogue-bubble">
          <p>OH also... You can click on the Project Name to view on Github</p>
          <div className="projects-bubble-arrow"></div>
        </div>
      </div>
      
      <h1 
        ref={titleRef}
        className={`section-heading ${isTitleVisible ? 'fade-in-down' : ''}`}
      >
        Projects
      </h1>

      {/* First Project - With Background Image */}
      <div 
        ref={clinicRef}
        className={`project-card clinic-project ${isClinicVisible ? 'slide-in-left' : ''}`}
      >
        <div className="clinic-background" style={{
          backgroundImage: `url(${clinicImage})`
        }}></div>
        <div className="clinic-overlay"></div>
        <div className="clinic-content">
          <h3 className="project-title">
            <a
              href="https://github.com/KrishikaKhushi/Clinic-Database-Web-Application"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-text"
            >
              Clinic Database Web Application<br />
              <span className="tech-stack">(MERN Stack, MongoDB, Node.js, Express.js)</span>
            </a>
          </h3>
          <ul className="project-description">
            <li>Designed a CRUD-based clinic management system using MongoDB, Express.js, and Node.js, enabling efficient and scalable data storage and retrieval.</li>
            <li>Developed and optimized RESTful APIs for smooth communication between front-end and back-end.</li>
            <li>Implemented user authentication and data validation to ensure security.</li>
          </ul>
        </div>
      </div>

      {/* Second Project */}
      <div 
        ref={aiRemoteRef}
        className={`project-card ai-remote-project ${isAiRemoteVisible ? 'slide-in-right' : ''}`}
      >
        <div className="ai-remote-background" style={{
          backgroundImage: `url(${aiRemoteImage})`
        }}></div>
        <div className="ai-remote-overlay"></div>
        <div className="ai-remote-content">
          <h3 className="project-title">
            <a
              href="https://github.com/KrishikaKhushi/AI-Driven-Enhancements"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-text"
            >
              AI-Driven Enhancements in Remote Doctor Consultation<br />
              <span className="tech-stack">(AI, Python, OpenCV, TensorFlow)</span>
            </a>
          </h3>
          <ul className="project-description">
            <li>Built an AI-powered telemedicine platform that analyses patient emotions and physical state using facial expression analysis.</li>
            <li>Integrated real-time behavior analysis for improved remote healthcare diagnostics.</li>
            <li>Processed large volumes of patient data using ML models, optimizing prediction accuracy using algorithms based on advanced data structures.</li>
          </ul>
        </div>
      </div>

      {/* Third Project */}
      <div 
        ref={smartHomeRef}
        className={`project-card smart-home-project ${isSmartHomeVisible ? 'slide-in-left' : ''}`}
      >
        <div className="smart-home-background" style={{
          backgroundImage: `url(${smartHomeImage})`
        }}></div>
        <div className="smart-home-overlay"></div>
        <div className="smart-home-content">
          <h3 className="project-title">
            <a
              href="https://github.com/KrishikaKhushi/smart-home-automation"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-text"
            >
              AI-Powered Smart Home Automation System<br />
              <span className="tech-stack">(Python, Flask, REST APIs, MySQL, Docker, AWS/GCP, Git/GitHub)</span>
            </a>
          </h3>
          <ul className="project-description">
            <li>Developed a smart home solution using AI and ML technologies.</li>
            <li>Integrated image and voice processing into household devices for improved automation.</li>
            <li>Enhanced user interaction with appliances, creating a more intelligent living environment.</li>
            <li>Focused on seamless control and automation of home systems.</li>
          </ul>
        </div>
      </div>

      {/* Fourth Project - NEW WanderLog Project */}
      <div 
        ref={wanderlogRef}
        className={`project-card wanderlog-project ${isWanderlogVisible ? 'slide-in-right' : ''}`}
      >
        <div className="wanderlog-background" style={{
          backgroundImage: `url(${wanderlogImage})`
        }}></div>
        <div className="wanderlog-overlay"></div>
        <div className="wanderlog-content">
          <h3 className="project-title">
            <a
              href="https://github.com/KrishikaKhushi/wanderlog"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-text"
            >
              WanderLog – Dream Destination Explorer [IN PROGRESS]<br />
              <span className="tech-stack">(React.js, TailwindCSS, Leaflet.js/Mapbox)</span>
            </a>
          </h3>
          <ul className="project-description">
            <li>A globe-based travel journal app to pin dream destinations and visited places.</li>
            <li>Adding features for photo uploads, journal entries, and smooth navigation transitions.</li>
            <li>Implementing a social media layout with responsive design for users to connect and explore.</li>
            <li>Focused on creating an immersive, visually engaging frontend experience.</li>
          </ul>
        </div>
      </div>

      {/* Fifth Project */}
      <div 
        ref={hyperparameterRef}
        className={`project-card hyperparameter-project ${isHyperparameterVisible ? 'slide-in-left' : ''}`}
      >
        <div className="hyperparameter-background" style={{
          backgroundImage: `url(${hyperparameterImage})`
        }}></div>
        <div className="hyperparameter-overlay"></div>
        <div className="hyperparameter-content">
          <h3 className="project-title">
            <a
              href="https://github.com/KrishikaKhushi/Hyperparameter-Visualization"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-text"
            >
              Hyperparameter Visualization in Generative ML Models <br />
              <span className="tech-stack">(Python, Machine Learning)</span>
            </a>
          </h3>
          <ul className="project-description">
            <li>Explored the effect of hyperparameter variations (learning rates, batch sizes, weight decay) on generative model outputs.</li>
            <li>Used heatmaps, latent space projections, and output grids to provide visual insights.</li>
            <li>Improved model interpretability, optimization, and decision-making.</li>
          </ul>
        </div>
      </div>

      {/* Sixth Project */}
      <div 
        ref={portfolioRef}
        className={`project-card portfolio-project ${isPortfolioVisible ? 'slide-in-right' : ''}`}
      >
        <div className="portfolio-background" style={{
          backgroundImage: `url(${portfolioImage})`
        }}></div>
        <div className="portfolio-overlay"></div>
        <div className="portfolio-content">
          <h3 className="project-title">
            <a
              href="https://github.com/KrishikaKhushi/krishika-portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-text"
            >
              Krishika's Dev Portfolio<br />
              <span className="tech-stack">(React, JavaScript, HTML, CSS, Git, GitHub, Node.js, Express.js, SQL)</span>
            </a>
          </h3>
          <ul className="project-description">
            <li>Developed a personal portfolio website to showcase skills, projects, and experience.</li>
            <li>Integrated responsive design, animations, and seamless navigation using React Router.</li>
            <li>Deployed the website on a cloud platform, ensuring real-time access and version control with GitHub.</li>
          </ul>
        </div>
      </div>

      {/* Seventh Project */}
      <div 
        ref={aiResumeRef}
        className={`project-card ai-resume-project ${isAiResumeVisible ? 'slide-in-left' : ''}`}
      >
        <div className="ai-resume-background" style={{
          backgroundImage: `url(${aiResumeImage})`
        }}></div>
        <div className="ai-resume-overlay"></div>
        <div className="ai-resume-content">
          <h3 className="project-title">
            <a
              href="https://github.com/KrishikaKhushi/smart-resume-screening-system"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-text"
            >
              Smart Resume Screening & Feedback System<br />
              <span className="tech-stack">(Python, FastAPI, Java with Spring Boot, Docker, GitHub, AWS/GCP, SQL)</span>
            </a>
          </h3>
          <ul className="project-description">
            <li>Developed a resume parser to extract key information such as skills and experience from uploaded resumes.</li>
            <li>Built a web-based backend that interacts with the Python API to process resumes and provide feedback.</li>
            <li>Designed and deployed the entire system ensuring scalability and efficient management.</li>
          </ul>
        </div>
      </div>

      {/* GitHub Button */}
      <div 
        ref={githubRef}
        className={`github-button-container ${isGithubVisible ? 'fade-in-up' : ''}`}
      >
        <a 
          href="https://github.com/KrishikaKhushi" 
          target="_blank" 
          rel="noopener noreferrer"
          className="github-button"
        >
          Visit my Github
        </a>
      </div>
    </div>
  );
}

export default Projects;