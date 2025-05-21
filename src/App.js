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


// Typewriter component
function Typewriter({ text, speed = 100, className }) {
  const [displayedText, setDisplayedText] = useState('');
  useEffect(() => {
    let index = 0;
    setDisplayedText('');
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(index));
      index++;
      if (index >= text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <span className={`${className} typewriter`}>
      {displayedText}
      <span className="cursor">|</span>
    </span>
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
        <h1 className="hero-title">
          <Typewriter text="Krishika Khushi" speed={120} />
        </h1>
        <p className="hero-subtitle">
          <Typewriter 
            text={`Final-Year B.Tech CSE Student at VIT\nAspiring Software Engineer\nPython & Java Enthusiast`} 
            speed={50} 
          />
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

  return (
    <div>
      {/* Hamburger Menu */}
      <div className={`hamburger-menu ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      {/* Section Name */}
      <p className="section-name">
        {location.pathname === '/about' ? 'About Me' :
         location.pathname === '/experience' ? 'Professional Experience' :
         location.pathname === '/projects' ? 'Projects' :
         location.pathname === '/extracurricular' ? 'Extracurricular' :
         location.pathname === '/blog' ? 'Blog' :
         location.pathname === '/contact' ? 'Contact Me' :
         'Home Page'}
      </p>

      {/* Navbar */}
      <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
        <ul className="nav-links">
          <li><Link to="/" onClick={toggleMenu}>Home Page</Link></li>
          <li><Link to="/about" onClick={toggleMenu}>About Me</Link></li>
          <li><Link to="/experience" onClick={toggleMenu}>Professional Experience</Link></li>
          <li><Link to="/projects" onClick={toggleMenu}>Projects</Link></li>
          <li><Link to="/extracurricular" onClick={toggleMenu}>Extracurricular</Link></li>
          <li><Link to="/blog" onClick={toggleMenu}>Blog</Link></li>
          <li><Link to="/contact" onClick={toggleMenu}>Contact Me</Link></li>
        </ul>
      </nav>

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
  );
}

export default AppWrapper;
