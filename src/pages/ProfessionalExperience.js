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
            Berger Paints India Ltd. (British Paints Division)—Backend Developer Intern
          </h2>
        </div>

        {/* Company Overview */}
        <div className="content-section">
          <h3 className="subheading gradient-text">
            Company Overview:
          </h3>
          <p className="subheading-content">
            British Paints, a division of Berger Paints India Ltd., is committed to innovation and sustainability. 
            The IT department plays a key role in driving the digital transformation across the company.
          </p>
        </div>

        {/* Key Learning */}
        <div className="content-section">
          <h3 className="subheading gradient-text">
            Key Learning:
          </h3>
          <ul className="subheading-content">
            <li>
              Gained hands-on experience in ERP system implementation with Oracle Database, including configuration, customization, and troubleshooting.
            </li>
            <li>
              Gained in-depth knowledge of the Order-to-Cash (O2C) cycle, enhancing understanding of order management, inventory control, billing, and cash collection.
            </li>
            <li>
              Explored network system administration across multiple locations, improving connectivity, security, and performance.
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
              Contributed to ERP system optimization, streamlining business processes and improving user experience.
            </li>
            <li>
              Applied insights to optimize the O2C cycle, reducing lead times and improving order fulfillment accuracy.
            </li>
            <li>
              Enhanced network performance by implementing best practices in administration and security measures.
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
              Technical skills in Oracle Database, ERP system integration, and network infrastructure.
            </li>
            <li>
              Strong analytical and problem-solving abilities through data analysis, process optimization, and troubleshooting.
            </li>
            <li>
              Improved communication and collaboration through interaction with cross-functional teams.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProfessionalExperience;