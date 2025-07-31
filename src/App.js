import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import './App.css';

import AboutMe from './pages/AboutMe';
import ProfessionalExperience from './pages/ProfessionalExperience';
import Projects from './pages/Projects';
import Extracurricular from './pages/Extracurricular';
import Blog from './pages/Blog';
import ContactMe from './pages/ContactMe';
import heroImage from './assets/hero-bg.png';

// Enhanced Typewriter component
function Typewriter({ text, speed = 80, delay = 0, className }) {
  const [displayedText, setDisplayedText] = useState('');
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    // Reset when text changes
    setDisplayedText('');
    setIsStarted(false);
    
    const startDelay = setTimeout(() => {
      setIsStarted(true);
      let index = 0;
      
      const interval = setInterval(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        index++;
        if (index >= text.length) {
          clearInterval(interval);
        }
      }, speed);
      
      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(startDelay);
  }, [text, speed, delay]);

  return (
    <span className={`${className} typewriter`}>
      {displayedText}
      {isStarted && <span className="cursor">|</span>}
    </span>
  );
}

// Animated Name component for instant appearance with style
function AnimatedName({ text, className }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Small delay for dramatic effect
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <h1 className={`${className} ${isVisible ? 'name-visible' : 'name-hidden'}`}>
      {text}
    </h1>
  );
}

function HomePage() {
  return (
    <div className="hero-section" id="home">
      {/* Background Image and Overlay */}
      <div className="hero-bg-container">
        <div className="hero-overlay"></div>
        <img src={heroImage} alt="Animated Background" className="hero-bg-image" />
      </div>

      {/* Hero Text */}
      <div className="hero-text-wrapper">
        <AnimatedName 
          text="Krishika Khushi" 
          className="hero-title"
        />
        <p className="hero-subtitle">
          <Typewriter 
            text=" B.Tech CSE Graduate
Frontend-Focused Full-Stack Developer
Forever curious, occasionally obsessed, always building." 
            speed={20}
            delay={1200}
          />
        </p>
      </div>

      {/* Personality Tiles - Added below hero text */}
      <div className="personality-tiles">
        <div className="tile">
          <div className="tile-icon">🚀</div>
          <h3>Frontend Enthusiast</h3>
          <p>Crafting beautiful React interfaces that users love</p>
        </div>
        
        <div className="tile">
          <div className="tile-icon">⚡</div>
          <h3>Full-Stack Builder</h3>
          <p>From APIs to databases, I build complete solutions</p>
        </div>
        
        <div className="tile">
          <div className="tile-icon">🎨</div>
          <h3>Design Thinker</h3>
          <p>UI/UX enthusiast creating seamless user experiences</p>
        </div>
        
        <div className="tile">
          <div className="tile-icon">🔧</div>
          <h3>Problem Solver</h3>
          <p>Turning complex challenges into elegant code solutions</p>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="cta-section">
        <h2 className="cta-headline">Want to build something together?</h2>
        <p className="cta-text">
          If you're hiring, collaborating, or just curious — I'd love to chat.<br />
          I'm always open to thoughtful projects, sharp teams, and good conversation.
        </p>
      </div>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.navbar') && !event.target.closest('.hamburger-menu')) {
        closeMenu();
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  return (
    <div>
      {/* Blur overlay when menu is open */}
      {isMenuOpen && <div className="menu-blur-overlay" onClick={closeMenu}></div>}

      {/* Hamburger Menu */}
      <div className={`hamburger-menu ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      {/* Section Name - Only show when menu is open */}
      {isMenuOpen && (
        <p className="section-name">
          {location.pathname === '/about' ? 'About Me' :
           location.pathname === '/experience' ? 'Professional Experience' :
           location.pathname === '/projects' ? 'Projects' :
           location.pathname === '/extracurricular' ? 'Extracurricular' :
           location.pathname === '/blog' ? 'Blog' :
           location.pathname === '/contact' ? 'Contact Me' :
           'Home Page'}
        </p>
      )}

      {/* Navbar */}
      <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
        <ul className="nav-links">
          <li><Link to="/" onClick={closeMenu}>Home Page</Link></li>
          <li><Link to="/about" onClick={closeMenu}>About Me</Link></li>
          <li><Link to="/experience" onClick={closeMenu}>Professional Experience</Link></li>
          <li><Link to="/projects" onClick={closeMenu}>Projects</Link></li>
          <li><Link to="/extracurricular" onClick={closeMenu}>Extracurricular</Link></li>
          <li><Link to="/blog" onClick={closeMenu}>Blog</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>Contact Me</Link></li>
        </ul>
      </nav>

      {/* Main content wrapper */}
      <div className={`main-content ${isMenuOpen ? 'blurred' : ''}`}>
        {/* Routing Setup */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/experience" element={<ProfessionalExperience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/extracurricular" element={<Extracurricular />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<ContactMe />} />
        </Routes>
      </div>
    </div>
  );
}

export default AppWrapper;