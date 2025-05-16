import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import './App.css';

import AboutMe from './pages/AboutMe';
import ProfessionalExperience from './pages/ProfessionalExperience';
import Projects from './pages/Projects';
import Extracurricular from './pages/Extracurricular';
import Blog from './pages/Blog';
import ContactMe from './pages/ContactMe';

function HomePage() {
  return (
    <div className="hero-section home-background" id="home">
      <h1 className="hero-title">Krishika Khushi</h1>
      <p className="hero-subtitle">
        Final-Year B.Tech CSE Student at VIT {"\n"}  
        Aspiring Software Engineer{"\n"}
        Python & Java Enthusiast
      </p>
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
