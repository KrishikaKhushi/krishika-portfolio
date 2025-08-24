import React, { useState, useEffect, useRef } from 'react';
import './ContactMe.css';
import './ContactMeRes.css';
import contactBgImage from '../assets/contactbg.png';
import chibiRight from '../assets/chibi/right.png';
// Import your resume PDF
import resumePDF from '../assets/Resume.pdf';

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
  // State for PDF modal
  const [showPDFModal, setShowPDFModal] = useState(false);

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setShowPDFModal(false);
      }
    };

    if (showPDFModal) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [showPDFModal]);

  const openPDFModal = (e) => {
    e.preventDefault();
    setShowPDFModal(true);
  };

  const closePDFModal = () => {
    setShowPDFModal(false);
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'Krishika_Khushi_Resume.pdf';
    link.click();
  };

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
              <button 
                onClick={openPDFModal}
                className="resume-button"
              >
                View my Resume
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* PDF Modal */}
      {showPDFModal && (
        <div className="pdf-modal-overlay" onClick={closePDFModal}>
          <div className="pdf-modal-container" onClick={(e) => e.stopPropagation()}>
            <div className="pdf-modal-header">
              <h3>My Resume</h3>
              <div className="pdf-modal-controls">
                <button 
                  className="pdf-download-btn"
                  onClick={downloadResume}
                  title="Download Resume"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7,10 12,15 17,10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                </button>
                <button 
                  className="pdf-close-btn"
                  onClick={closePDFModal}
                  title="Close"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="6" x2="6" y2="18"/>
                    <line x1="6" y1="6" x2="18" y2="18"/>
                  </svg>
                </button>
              </div>
            </div>
            <div className="pdf-viewer-container">
              <iframe
                src={`${resumePDF}#toolbar=1&navpanes=0&scrollbar=1`}
                title="Resume PDF Viewer"
                className="pdf-viewer"
                frameBorder="0"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ContactMe;