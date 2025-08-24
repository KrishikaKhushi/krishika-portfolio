import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import './AppRes.css';

import AboutMe from './pages/AboutMe';
import ProfessionalExperience from './pages/ProfessionalExperience';
import Projects from './pages/Projects';
import Extracurricular from './pages/Extracurricular';
import Blog from './pages/Blog';
import ContactMe from './pages/ContactMe';
import heroImage from './assets/hero-bg.png';
import chibiNormal from './assets/chibi/normal.png';

// Define the page order for keyboard navigation
const PAGE_ORDER = [
  '/',
  '/about',
  '/projects', 
  '/experience',
  '/extracurricular',
  '/blog',
  '/contact'
];

// Enhanced Typewriter component
function Typewriter({ text, speed = 80, delay = 0, className }) {
  const [displayedText, setDisplayedText] = useState('');
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
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

// Animated Name component
function AnimatedName({ text, className }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000); // Delayed to come after image animation
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <h1 className={`${className} ${isVisible ? 'name-visible' : 'name-hidden'}`}>
      {text}
    </h1>
  );
}

// Scroll Animation Hook - Updated for proper section spacing
function useScrollAnimation() {
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Calculate sections with proper spacing
      // Section 0: 0 - 100vh (Hero text)
      // Section 1: 100vh - 200vh (Tiles)  
      // Section 2: 200vh+ (CTA - stays active from 200vh onwards)
      
      if (scrollY < windowHeight) {
        setCurrentSection(0);
      } else if (scrollY < windowHeight * 2) {
        setCurrentSection(1);
      } else {
        setCurrentSection(2); // Section 2 stays active from 200vh onwards
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return currentSection;
}

function HomePage() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [heroTextVisible, setHeroTextVisible] = useState(false);
  const currentSection = useScrollAnimation();

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setImageLoaded(true);
    }, 300);

    const timer2 = setTimeout(() => {
      setHeroTextVisible(true);
    }, 1200);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="hero-section" id="home">
      {/* Background Image and Overlay */}
      <div className={`hero-bg-container ${imageLoaded ? 'image-loaded' : ''}`}>
        <div className="hero-overlay"></div>
        <img 
          src={heroImage} 
          alt="Animated Background" 
          className="hero-bg-image" 
          onLoad={() => setImageLoaded(true)}
        />
      </div>

      {/* Section 0: Hero Text - Centered */}
      <div className={`scroll-section hero-text-section ${currentSection === 0 ? 'active' : ''}`}>
        <div className={`hero-text-wrapper ${heroTextVisible ? 'visible' : ''}`}>
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
              delay={2000}
            />
          </p>
        </div>
      </div>

      {/* Section 1: Personality Tiles */}
      <div className={`scroll-section tiles-section ${currentSection === 1 ? 'active' : ''}`}>
        <div className="personality-tiles">
          <div className="tile tile-1">
            <div className="tile-icon">🚀</div>
            <h3>Frontend Enthusiast</h3>
            <p>Crafting beautiful React interfaces that users love</p>
          </div>
          
          <div className="tile tile-2">
            <div className="tile-icon">⚡</div>
            <h3>Full-Stack Builder</h3>
            <p>From APIs to databases, I build complete solutions</p>
          </div>
          
          <div className="tile tile-3">
            <div className="tile-icon">🎨</div>
            <h3>Design Thinker</h3>
            <p>UI/UX enthusiast creating seamless user experiences</p>
          </div>
          
          <div className="tile tile-4">
            <div className="tile-icon">🔧</div>
            <h3>Problem Solver</h3>
            <p>Turning complex challenges into elegant code solutions</p>
          </div>
        </div>
      </div>

      {/* Section 2: Call to Action */}
      <div className={`scroll-section cta-section-wrapper ${currentSection >= 2 ? 'active' : ''}`}>
        <div className="cta-section">
          <h2 className="cta-headline">Want to build something together?</h2>
          <p className="cta-text">
            If you're hiring, collaborating, or just curious — I'd love to chat.<br />
            I'm always open to thoughtful projects, sharp teams, and good conversation.
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="scroll-dots">
          <div className={`dot ${currentSection === 0 ? 'active' : ''}`}></div>
          <div className={`dot ${currentSection === 1 ? 'active' : ''}`}></div>
          <div className={`dot ${currentSection >= 2 ? 'active' : ''}`}></div>
        </div>
        <p className="scroll-hint">Scroll to explore</p>
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
  const [chibiVisible, setChibiVisible] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // FORCE SCROLL TO TOP ON ANY PAGE LOAD/REFRESH
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // CHIBI ANIMATION - ONLY ON HOME PAGE
  useEffect(() => {
    if (location.pathname === '/') {
      setChibiVisible(false);
      
      const timer = setTimeout(() => {
        setChibiVisible(true);
      }, 4500);
      
      return () => clearTimeout(timer);
    } else {
      setChibiVisible(false);
    }
  }, [location.pathname]);

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

  // Keyboard navigation handler
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (isMenuOpen || 
          event.target.tagName === 'INPUT' || 
          event.target.tagName === 'TEXTAREA' || 
          event.target.contentEditable === 'true') {
        return;
      }

      const currentIndex = PAGE_ORDER.indexOf(location.pathname);
      
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        const nextIndex = (currentIndex + 1) % PAGE_ORDER.length;
        navigate(PAGE_ORDER[nextIndex]);
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault();
        const prevIndex = currentIndex === 0 ? PAGE_ORDER.length - 1 : currentIndex - 1;
        navigate(PAGE_ORDER[prevIndex]);
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [navigate, location.pathname, isMenuOpen]);

  return (
    <div>
      {/* Blur overlay when menu is open */}
      {isMenuOpen && <div className="menu-blur-overlay" onClick={closeMenu}></div>}

      {/* Home Icon - Only visible on non-home pages */}
      {location.pathname !== '/' && (
        <Link to="/" className="home-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      )}

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
           location.pathname === '/extracurricular' ? 'Beyond the Classroom' :
           location.pathname === '/blog' ? 'Blog' :
           location.pathname === '/contact' ? 'Contact Me' :
           'Home Page'}
        </p>
      )}

      {/* Navbar */}
      <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
        <ul className="nav-links">
          <li><Link to="/about" onClick={closeMenu}>About Me</Link></li>
          <li><Link to="/experience" onClick={closeMenu}>Professional Experience</Link></li>
          <li><Link to="/projects" onClick={closeMenu}>Projects</Link></li>
          <li><Link to="/extracurricular" onClick={closeMenu}>Beyond the Classroom</Link></li>
          <li><Link to="/blog" onClick={closeMenu}>Blog</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>Contact Me</Link></li>
        </ul>
      </nav>

      {/* Main content wrapper */}
      <div className={`main-content ${isMenuOpen ? 'blurred' : ''}`}>
        {/* CHIBI STICKER - ONLY ON HOME PAGE WITH SLIDE ANIMATION */}
        {location.pathname === '/' && chibiVisible && (
          <div className={`chibi-sticker-container-home ${chibiVisible ? 'slide-in' : ''}`}>
            <div className="dialogue-bubble">
              <p>Hi there! Arrow keys can also be used to navigate between pages!</p>
              <div className="bubble-arrow"></div>
            </div>
            <div className="chibi-sticker">
              <img src={chibiNormal} alt="Chibi Helper" className="chibi-image" />
            </div>
          </div>
        )}

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