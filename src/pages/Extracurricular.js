import React, { useState, useEffect, useRef } from 'react';
import './Extracurricular.css';
import './ExtracurricularRes.css';
import musicClubImage from '../assets/musiclub.png';
import mc1Image from '../assets/mc1.png';
import mc2Image from '../assets/mc2.png';
import mc3Image from '../assets/mc3.png';

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

function Extracurricular() {
  // Animation refs for each section
  const [titleRef, isTitleVisible] = useInViewAnimation();
  const [clubActivitiesRef, isClubActivitiesVisible] = useInViewAnimation();
  const [musicClubContentRef, isMusicClubContentVisible] = useInViewAnimation();
  const [musicClubImageRef, isMusicClubImageVisible] = useInViewAnimation();
  const [galleryRef, isGalleryVisible] = useInViewAnimation();
  const [othersRef, isOthersVisible] = useInViewAnimation();
  const [hobbiesRef, isHobbiesVisible] = useInViewAnimation();

  return (
    <div className="extras-section">
      {/* Grid background elements */}
      <div className="vertical-lights"></div>
      <div className="corner-glow-1"></div>
      <div className="corner-glow-2"></div>
      <div className="particle1"></div>
      <div className="particle2"></div>
      
      <h1 
        ref={titleRef}
        className={`section-heading gradient-text ${isTitleVisible ? 'fade-in-down' : ''}`}
      >
        Extracurricular
      </h1>

      {/* Club Activities Card */}
      <div 
        ref={clubActivitiesRef}
        className={`card-wrapper ${isClubActivitiesVisible ? 'slide-in-up' : ''}`}
      >
        <h2 className="subheading gradient-text">Club Activities</h2>

        <div className="music-club-container">
          <div 
            ref={musicClubContentRef}
            className={`music-club-content ${isMusicClubContentVisible ? 'slide-in-left' : ''}`}
          >
            <h3 className="gradient-text">VIT Music Club</h3>
            <ul className="content-list">
              <li>Indian and Western Singer</li>
              <li>Performed on stage on various occasions and events</li>
              <li>Hosted Club Events</li>
              <li>Co-Organised an Annual Fest Event "Raage Raaga"</li>
            </ul>

            <div className="pr-section">
              <h4 className="white-bold">PR Team Member</h4>
              <ul className="content-list">
                <li>Served as a PR Team Member and Eastern & Western Vocalist, contributing to both club management and musical performances.</li>
                <li>Managed internal affairs, handled documentation, and co-led onboarding of two subgroups of new members.</li>
                <li>Supported public relations initiatives, enhancing the club's outreach and engagement while building leadership, coordination, and communication skills.</li>
              </ul>
            </div>
          </div>

          <div 
            ref={musicClubImageRef}
            className={`music-club-image-container ${isMusicClubImageVisible ? 'slide-in-right' : ''}`}
          >
            <img 
              src={musicClubImage} 
              alt="VIT Music Club" 
              className="music-club-image"
            />
          </div>
        </div>

        {/* Music Club Gallery */}
        <div 
          ref={galleryRef}
          className={`music-club-gallery ${isGalleryVisible ? 'gallery-visible' : ''}`}
        >
          <div className="gallery-image-container">
            <img 
              src={mc3Image} 
              alt="Music Club Event 1" 
              className="gallery-image"
            />
            <div className="image-overlay"></div>
          </div>
          <div className="gallery-image-container">
            <img 
              src={mc1Image} 
              alt="Music Club Event 2" 
              className="gallery-image"
            />
            <div className="image-overlay"></div>
          </div>
          <div className="gallery-image-container">
            <img 
              src={mc2Image} 
              alt="Music Club Event 3" 
              className="gallery-image"
            />
            <div className="image-overlay"></div>
          </div>
        </div>

        <div 
          ref={othersRef}
          className={`others-section ${isOthersVisible ? 'slide-in-up' : ''}`}
        >
          <h3 className="gradient-text">Others</h3>
          <ul className="content-list">
            <li>Was a part of VIT Community Radio (Music and English Sections)</li>
            <li>Was a part of Creativity Club</li>
          </ul>
        </div>
      </div>

      {/* Hobbies Card */}
      <div 
        ref={hobbiesRef}
        className={`card-wrapper ${isHobbiesVisible ? 'slide-in-up' : ''}`}
      >
        <h2 className="subheading">Hobbies</h2>
        <p className="hobbies-text">
          Anchoring, Music Enthusiast, Reading, Sketching, Poetry
        </p>
      </div>
    </div>
  );
}

export default Extracurricular;