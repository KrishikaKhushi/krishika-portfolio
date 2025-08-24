import React, { useEffect } from 'react';
import './ProfessionalExperience.css';
import './ProfessionalExperienceRes.css';
import companyLogo from '../assets/Berger_Paints_logo-removebg-preview.png';

function ProfessionalExperience() {
  // Scroll animation effect - same pattern as AboutMe
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          } else {
            entry.target.classList.remove('animate');
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Elements to animate
    const elementsToAnimate = [
      '.section-heading',
      '.company-section'
    ];

    // Small delay to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      elementsToAnimate.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
          element.classList.add('scroll-animate');
          observer.observe(element);
        });
      });
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="experience-section">
      {/* Grid background elements */}
      <div className="vertical-lights"></div>
      <div className="corner-glow-1"></div>
      <div className="corner-glow-2"></div>
      <div className="particle1"></div>
      <div className="particle2"></div>
      
      <h1 className="section-heading gradient-text">
        Professional Experience
      </h1>

      {/* Berger Paints Section */}
      <div className="company-section">
        <div className="company-header">
          <img 
            src={companyLogo} 
            alt="Berger Paints Logo" 
            className="company-logo"
          />
          <h2 className="company-name gradient-text">
            Berger Paints India Ltd. (British Paints Division)—IT Systems Intern
          </h2>
        </div>

        {/* Company Overview */}
        <div className="content-section">
          <h3 className="subheading gradient-text">
            Company Overview:
          </h3>
          <p className="subheading-content">
            British Paints, a division of Berger Paints India Ltd., focuses on innovation and sustainability in the coatings industry. 
            The IT division supports enterprise systems and internal digital solutions.
          </p>
        </div>

        {/* Key Learning */}
        <div className="content-section">
          <h3 className="subheading gradient-text">
            Key Learning:
          </h3>
          <ul className="subheading-content">
            <li>
              Studied ERP workflows and Oracle Database applications, gaining exposure to enterprise system functionalities and business processes.
            </li>
            <li>
              Explored the Order-to-Cash (O2C) cycle, building an understanding of order management, billing, and inventory flow.
            </li>
            <li>
              Analyzed the British Paints development application's codebase to identify usability gaps.
            </li>
            <li>
              Researched approaches for improving system usability and internal application design.
            </li>
          </ul>
        </div>

        {/* Application of Knowledge */}
        <div className="content-section">
          <h3 className="subheading gradient-text">
            Application of Knowledge:
          </h3>
          <ul className="subheading-content">
            <li>
              Proposed a user-friendly redesign concept for the development application, improving visual appeal and usability by ~30%.
            </li>
            <li>
              Applied ERP workflow learnings to understand how technology supports process efficiency in large organizations.
            </li>
            <li>
              Contributed ideas for better system navigation and user experience within internal applications.
            </li>
          </ul>
        </div>

        {/* Skills Developed */}
        <div className="content-section">
          <h3 className="subheading gradient-text">
            Skills Developed:
          </h3>
          <ul className="subheading-content">
            <li>
              Technical: Oracle Database basics, ERP workflows, application usability and redesign concepts.
            </li>
            <li>
              Professional: Analytical problem-solving, technical research, and effective communication with IT team members.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProfessionalExperience;