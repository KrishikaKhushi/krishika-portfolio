import React from 'react';
import './AboutMe.css'; // Make sure this points to your correct CSS file

function AboutMe() {
  return (
    <div className="about-section">
      <h1 className="section-title">About Me</h1>
      <p className="about-content">
        I’m a passionate and driven backend developer with a strong foundation in Python, Java, Flask, Node.js, and Cloud Computing. 
        I specialize in building scalable, efficient web applications and managing robust backend systems with a focus on performance and clean architecture.
        <br /><br />
        My journey includes collaborative projects in full-stack development, system optimization, and database management, where I’ve worked to create seamless, user-centric digital experiences.
        <br /><br />
        With a deep interest in software development, problem-solving, and data analysis, I’m always eager to explore innovative solutions and contribute to impactful projects. 
        I thrive in collaborative, growth-oriented environments and am constantly learning to stay ahead in tech.
      </p>

      <div className="content-container">
        <div className="skills-section">
          <h2 className="skills-title">Key Technical Skills</h2>
          <ul className="skills-list">
            <li>Programming & Backend Development: <span>Java, Python</span></li>
            <li>Web Frameworks & APIs: <span>Flask, REST APIs</span></li>
            <li>Database Management: <span>MySQL, MongoDB</span></li>
            <li>DevOps & Cloud: <span>Docker, AWS, GCP</span></li>
            <li>Version Control: <span>Git, GitHub</span></li>
            <li>Data Structures and Algorithms</li>
            <li>Innovative Problem Solving</li>
          </ul>
        </div>

        <div className="education-section">
          <h2 className="skills-title">Educational Qualifications</h2>
          <ul className="education-list">
            <li><span>Bachelor of Computer Science & Engineering</span><br />
              Vellore Institute of Technology, Vellore, Tamil Nadu, India<br />
              CGPA: 7.50
            </li>
            <li><span>10th:</span> St. Joseph's Convent High School, Patna, Bihar, India<br />
              Percentage: 94.2%
            </li>
            <li><span>12th:</span> Notre Dame Academy, Patna, Bihar, India<br />
              Percentage: 75.6%
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
