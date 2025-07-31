import React from 'react';
import './ContactMe.css';

function ContactMe() {
  return (
    <div className="contact-section">
      <h1 className="contact-heading">Contact Me!</h1>
      <div className="contact-content">
        <p>Email ID: <a className="contact-link" href="https://mail.google.com/mail/?view=cm&fs=1&to=krishikakhushi.03@gmail.com" target="_blank" rel="noopener noreferrer">krishikakhushi.03@gmail.com</a></p>
        <p>LinkedIn Profile: <a className="contact-link" href="https://www.linkedin.com/in/krishikakhushi" target="_blank" rel="noopener noreferrer">www.linkedin.com/in/krishikakhushi</a></p>
        
        {/* Resume Button */}
        <div className="resume-button-container">
          <a 
            href="https://drive.google.com/file/d/1yY9hyugQG-J1upfkxJEAWqBSojoPFu1B/view?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer"
            className="resume-button"
          >
            View my Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;