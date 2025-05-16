import React from 'react';
import './ProfessionalExperience.css';
import companyLogo from '../assets/Berger_Paints_logo-removebg-preview.png';

function ProfessionalExperience() {
  return (
    <div className="experience-section">
      <h1 className="section-heading gradient-text">Professional Experience</h1>

      {/* Berger Paints Section */}
      <div className="company-section">
        <div className="company-header">
          <img src={companyLogo} alt="Berger Paints Logo" className="company-logo" />
          <h2 className="company-name gradient-text">Berger Paints India Ltd. (British Paints Division) [Sept' 2023- Oct' 2024]</h2>
        </div>

        {/* Company Overview */}
        <h3 className="subheading gradient-text">Company Overview:</h3>
        <p className="subheading-content">
          British Paints, a division of Berger Paints India Ltd., is committed to innovation and sustainability. 
          The IT department plays a key role in driving the digital transformation across the company.
        </p>

        {/* Key Learning */}
        <h3 className="subheading gradient-text">Key Learning:</h3>
        <ul className="subheading-content">
          <li>Gained hands-on experience in ERP system implementation with Oracle Database, including configuration, customization, and troubleshooting.</li>
          <li>Gained in-depth knowledge of the Order-to-Cash (O2C) cycle, enhancing understanding of order management, inventory control, billing, and cash collection.</li>
          <li>Explored network system administration across multiple locations, improving connectivity, security, and performance.</li>
        </ul>

        {/* Application of Knowledge */}
        <h3 className="subheading gradient-text">Application of Knowledge:</h3>
        <ul className="subheading-content">
          <li>Contributed to ERP system optimization, streamlining business processes and improving user experience.</li>
          <li>Applied insights to optimize the O2C cycle, reducing lead times and improving order fulfillment accuracy.</li>
          <li>Enhanced network performance by implementing best practices in administration and security measures.</li>
        </ul>

        {/* Skills Developed */}
        <h3 className="subheading gradient-text">Skills Developed:</h3>
        <ul className="subheading-content">
          <li>Technical skills in Oracle Database, ERP system integration, and network infrastructure.</li>
          <li>Strong analytical and problem-solving abilities through data analysis, process optimization, and troubleshooting.</li>
          <li>Improved communication and collaboration through interaction with cross-functional teams.</li>
        </ul>
      </div>
    </div>
  );
}

export default ProfessionalExperience;
