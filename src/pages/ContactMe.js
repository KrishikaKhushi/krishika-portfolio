import React, { useState, useEffect, useRef } from 'react';
import './ContactMe.css';
import './ContactMeRes.css';
import contactBgImage from '../assets/contactbg.png';
import chibiRight from '../assets/chibi/right.png';

// Intersection Observer Hook for animations - Triggers every time
const useInViewAnimation = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px',
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

function ContactMe() {
  // Single ref to trigger the sequential animation
  const [sectionRef, isSectionVisible] = useInViewAnimation();

  return (
    <div className="contact-section" ref={sectionRef}>
      {/* Grid background elements */}
      <div className="vertical-lights"></div>
      <div className="corner-glow-1"></div>
      <div className="corner-glow-2"></div>
      <div className="particle1"></div>
      <div className="particle2"></div>
      
      {/* Chibi Sticker with Dialogue - Bottom right (4th in sequence) */}
      <div className={`contact-chibi-container ${isSectionVisible ? 'chibi-animate' : ''}`}>
        <div className="contact-dialogue-bubble">
          <p>Its a secret but...<br />She'd love to get in touch!<br />See ya!!</p>
          <div className="contact-bubble-arrow"></div>
        </div>
        <div className="contact-chibi-sticker">
          <img src={chibiRight} alt="Chibi Helper" className="contact-chibi-image" />
        </div>
      </div>
      
      {/* Contact container (1st in sequence) */}
      <div className={`contact-content contact-bg-project ${isSectionVisible ? 'container-animate' : ''}`}>
        <div className="contact-background" style={{
          backgroundImage: `url(${contactBgImage})`
        }}></div>
        <div className="contact-overlay"></div>
        <div className="contact-content-inner">
          {/* Contact heading (2nd in sequence) */}
          <h1 className={`contact-heading ${isSectionVisible ? 'heading-animate' : ''}`}>
            Contact Me!
          </h1>
          
          {/* Contact details (3rd in sequence) */}
          <div className={`contact-details ${isSectionVisible ? 'details-animate' : ''}`}>
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
      </div>
    </div>
  );
}

export default ContactMe;