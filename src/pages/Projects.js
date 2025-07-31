import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <div className="projects-section">
      <h1 className="section-heading">Projects</h1>

      {/* First Project */}
      <div className="project-card">
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

      {/* Second Project */}
      <div className="project-card">
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

      {/* Third Project */}
      <div className="project-card">
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

      {/* Fourth Project - NEW WanderLog Project */}
      <div className="project-card">
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

      {/* Fifth Project */}
      <div className="project-card">
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

      {/* Sixth Project */}
      <div className="project-card">
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

      {/* Seventh Project */}
      <div className="project-card">
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

      {/* GitHub Button */}
      <div className="github-button-container">
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