import React, { useState, useEffect, useRef, useCallback } from 'react';
import './AboutMe.css';
import './AboutMeRes.css';

// Import all tech stack logos
import awsLogo from '../assets/tech-stack/aws.png';
import balsamiqLogo from '../assets/tech-stack/balsamiq.png';
import canvaLogo from '../assets/tech-stack/canva.png';
import cssLogo from '../assets/tech-stack/css.png';
import dockerLogo from '../assets/tech-stack/docker.png';
import dsaLogo from '../assets/tech-stack/dsa.png';
import expressLogo from '../assets/tech-stack/express.png';
import fastapiLogo from '../assets/tech-stack/fastapi.png';
import figmaLogo from '../assets/tech-stack/figma.png';
import flaskLogo from '../assets/tech-stack/flask.png';
import gcpLogo from '../assets/tech-stack/gcp.png';
import gitLogo from '../assets/tech-stack/git.png';
import githubLogo from '../assets/tech-stack/github.png';
import invisionLogo from '../assets/tech-stack/invision.png';
import javaLogo from '../assets/tech-stack/java.png';
import javascriptLogo from '../assets/tech-stack/javascript.png';
import mazeLogo from '../assets/tech-stack/maze.png';
import mongodbLogo from '../assets/tech-stack/mongodb.png';
import nodeLogo from '../assets/tech-stack/node.png';
import pythonLogo from '../assets/tech-stack/python.png';
import reactLogo from '../assets/tech-stack/react.png';
import restLogo from '../assets/tech-stack/rest.png';
import springLogo from '../assets/tech-stack/spring.png';
import sqlLogo from '../assets/tech-stack/sql.png';
import tailwindLogo from '../assets/tech-stack/tailwind.png';

// Import my image and chibi sticker
import myImage from '../assets/myimage.png';
import chibiUp from '../assets/chibi/up.png';

// Tech stack data with actual logo imports and colors (moved outside component)
const techStack = [
  { name: 'Python', logo: pythonLogo, color: '#3776ab' },
  { name: 'Java', logo: javaLogo, color: '#f89820' },
  { name: 'SQL', logo: sqlLogo, color: '#336791' },
  { name: 'MongoDB', logo: mongodbLogo, color: '#47A248' },
  { name: 'Flask', logo: flaskLogo, color: '#000000' },
  { name: 'FastAPI', logo: fastapiLogo, color: '#009688' },
  { name: 'REST API', logo: restLogo, color: '#0052CC' },
  { name: 'Docker', logo: dockerLogo, color: '#2496ED' },
  { name: 'AWS', logo: awsLogo, color: '#FF9900' },
  { name: 'GCP', logo: gcpLogo, color: '#4285F4' },
  { name: 'Git', logo: gitLogo, color: '#F05032' },
  { name: 'GitHub', logo: githubLogo, color: '#181717' },
  { name: 'React', logo: reactLogo, color: '#61DAFB' },
  { name: 'JavaScript', logo: javascriptLogo, color: '#F7DF1E' },
  { name: 'CSS', logo: cssLogo, color: '#1572B6' },
  { name: 'Node.js', logo: nodeLogo, color: '#339933' },
  { name: 'Express.js', logo: expressLogo, color: '#000000' },
  { name: 'Figma', logo: figmaLogo, color: '#F24E1E' },
  { name: 'Tailwind CSS', logo: tailwindLogo, color: '#06B6D4' },
  { name: 'Spring Boot', logo: springLogo, color: '#6DB33F' },
  { name: 'DSA', logo: dsaLogo, color: '#8B5CF6' },
  { name: 'Balsamiq', logo: balsamiqLogo, color: '#A60000' },
  { name: 'Canva', logo: canvaLogo, color: '#00C4CC' },
  { name: 'InVision', logo: invisionLogo, color: '#FF3366' },
  { name: 'Maze', logo: mazeLogo, color: '#FF6B6B' }
];

// Tech Stack Container Component
const TechStackContainer = ({ onClick }) => {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [logos, setLogos] = useState([]);
  const [isDraggingAny, setIsDraggingAny] = useState(false);
  const animationFrameRef = useRef(null);

  // Initialize logos with orderly grid positions
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const containerRect = container.getBoundingClientRect();
    const logoSize = 80;
    const spacing = 8;
    const logosPerRow = Math.floor((containerRect.width - 40) / (logoSize + spacing));
    
    const initialLogos = techStack.map((tech, index) => {
      const col = index % logosPerRow;
      
      if (index >= 13) {
        const adjustedCol = (index - 13);
        const secondRowStartX = (containerRect.width - (12 * (logoSize + spacing) - spacing)) / 2;
        
        return {
          ...tech,
          id: index,
          orderlyX: secondRowStartX + adjustedCol * (logoSize + spacing),
          orderlyY: 60 + (logoSize + spacing),
          x: secondRowStartX + adjustedCol * (logoSize + spacing),
          y: 60 + (logoSize + spacing),
          vx: 0,
          vy: 0,
          size: logoSize,
          rotation: 0,
          isDragging: false,
          dragOffset: { x: 0, y: 0 }
        };
      } else {
        const firstRowStartX = (containerRect.width - (13 * (logoSize + spacing) - spacing)) / 2;
        
        return {
          ...tech,
          id: index,
          orderlyX: firstRowStartX + col * (logoSize + spacing),
          orderlyY: 60,
          x: firstRowStartX + col * (logoSize + spacing),
          y: 60,
          vx: 0,
          vy: 0,
          size: logoSize,
          rotation: 0,
          isDragging: false,
          dragOffset: { x: 0, y: 0 }
        };
      }
    });

    setLogos(initialLogos);
  }, []); // Only run once on mount

  // Track if any logo is being dragged
  useEffect(() => {
    const anyDragging = logos.some(logo => logo.isDragging);
    setIsDraggingAny(anyDragging);
  }, [logos]);

  // Animation loop - chaos mode when hovered, orderly when not
  useEffect(() => {
    const container = containerRef.current;
    if (!container || logos.length === 0) return;

    const containerRect = container.getBoundingClientRect();
    const containerWidth = containerRect.width;
    const containerHeight = containerRect.height;

    const animationLoop = () => {
      setLogos(prevLogos => {
        if (prevLogos.length === 0) return prevLogos;
        
        return prevLogos.map(logo => {
          let { x, y, vx, vy, rotation, isDragging, orderlyX, orderlyY } = logo;
          const logoSize = logo.size;

          if (isDragging) {
            return logo;
          }

          if (isHovered) {
            vx *= 1.005;
            vy *= 1.005;
            
            vx += (Math.random() - 0.5) * 0.08;
            vy += (Math.random() - 0.5) * 0.08;
            
            rotation += (Math.abs(vx) + Math.abs(vy)) * 2;

            x += vx;
            y += vy;

            if (x <= 0 || x >= containerWidth - logoSize) {
              vx = -vx * 0.9;
              x = Math.max(0, Math.min(containerWidth - logoSize, x));
            }
            if (y <= 40 || y >= containerHeight - logoSize) {
              vy = -vy * 0.9;
              y = Math.max(40, Math.min(containerHeight - logoSize, y));
            }

            const maxVelocity = 1.5;
            vx = Math.max(-maxVelocity, Math.min(maxVelocity, vx));
            vy = Math.max(-maxVelocity, Math.min(maxVelocity, vy));
          } else {
            const diffX = orderlyX - x;
            const diffY = orderlyY - y;
            const distance = Math.sqrt(diffX * diffX + diffY * diffY);
            
            if (distance > 2) {
              x += diffX * 0.1;
              y += diffY * 0.1;
              rotation *= 0.95;
            } else {
              x = orderlyX;
              y = orderlyY;
              rotation = 0;
              vx = 0;
              vy = 0;
            }
          }

          return { ...logo, x, y, vx, vy, rotation };
        });
      });

      if (animationFrameRef.current) {
        animationFrameRef.current = requestAnimationFrame(animationLoop);
      }
    };

    animationFrameRef.current = requestAnimationFrame(animationLoop);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isHovered]); // Only depend on isHovered to prevent infinite loops

  // Enhanced collision detection between logos (only in chaos mode)
  useEffect(() => {
    if (!isHovered) return;

    const intervalId = setInterval(() => {
      setLogos(prevLogos => {
        const newLogos = [...prevLogos];
        
        for (let i = 0; i < newLogos.length; i++) {
          for (let j = i + 1; j < newLogos.length; j++) {
            const logo1 = newLogos[i];
            const logo2 = newLogos[j];
            
            const dx = logo1.x - logo2.x;
            const dy = logo1.y - logo2.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const minDistance = (logo1.size + logo2.size) / 2.5;
            
            if (distance < minDistance && distance > 0) {
              const angle = Math.atan2(dy, dx);
              const sin = Math.sin(angle);
              const cos = Math.cos(angle);
              
              let vx1 = logo1.vx;
              let vy1 = logo1.vy;
              let vx2 = logo2.vx;
              let vy2 = logo2.vy;
              
              if (logo1.isDragging) {
                const dragVelocity = 2.0;
                vx1 = dragVelocity * cos;
                vy1 = dragVelocity * sin;
              }
              
              if (logo2.isDragging) {
                const dragVelocity = 2.0;
                vx2 = -dragVelocity * cos;
                vy2 = -dragVelocity * sin;
              }
              
              const rotVx1 = vx1 * cos + vy1 * sin;
              const rotVy1 = vy1 * cos - vx1 * sin;
              const rotVx2 = vx2 * cos + vy2 * sin;
              const rotVy2 = vy2 * cos - vx2 * sin;
              
              const finalVx1 = rotVx2 * 1.2 + (Math.random() - 0.5) * 0.4;
              const finalVx2 = rotVx1 * 1.2 + (Math.random() - 0.5) * 0.4;
              
              if (!logo1.isDragging) {
                newLogos[i].vx = finalVx1 * cos - rotVy1 * sin;
                newLogos[i].vy = rotVy1 * cos + finalVx1 * sin;
                
                newLogos[i].vx += (Math.random() - 0.5) * 0.3;
                newLogos[i].vy += (Math.random() - 0.5) * 0.3;
              }
              
              if (!logo2.isDragging) {
                newLogos[j].vx = finalVx2 * cos - rotVy2 * sin;
                newLogos[j].vy = rotVy2 * cos + finalVx2 * sin;
                
                newLogos[j].vx += (Math.random() - 0.5) * 0.3;
                newLogos[j].vy += (Math.random() - 0.5) * 0.3;
              }
              
              const overlap = minDistance - distance + 3;
              const separateX = cos * overlap * 0.8;
              const separateY = sin * overlap * 0.8;
              
              if (!logo1.isDragging) {
                newLogos[i].x += separateX;
                newLogos[i].y += separateY;
              } else {
                newLogos[j].x -= separateX * 1.5;
                newLogos[j].y -= separateY * 1.5;
              }
              
              if (!logo2.isDragging) {
                newLogos[j].x -= separateX;
                newLogos[j].y -= separateY;
              } else {
                newLogos[i].x += separateX * 1.5;
                newLogos[i].y += separateY * 1.5;
              }
              
              const containerWidth = containerRef.current?.getBoundingClientRect().width || 0;
              const containerHeight = containerRef.current?.getBoundingClientRect().height || 0;
              
              newLogos[i].x = Math.max(0, Math.min(containerWidth - logo1.size, newLogos[i].x));
              newLogos[i].y = Math.max(40, Math.min(containerHeight - logo1.size, newLogos[i].y));
              newLogos[j].x = Math.max(0, Math.min(containerWidth - logo2.size, newLogos[j].x));
              newLogos[j].y = Math.max(40, Math.min(containerHeight - logo2.size, newLogos[j].y));
            }
          }
        }
        
        return newLogos;
      });
    }, 16);

    return () => clearInterval(intervalId);
  }, [isHovered]);

  // Mouse event handlers for dragging
  const handleMouseDown = useCallback((e, logoId) => {
    if (!isHovered) return;
    
    e.preventDefault();
    const rect = containerRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    setLogos(prevLogos => 
      prevLogos.map(logo => 
        logo.id === logoId 
          ? {
              ...logo,
              isDragging: true,
              dragOffset: {
                x: mouseX - logo.x,
                y: mouseY - logo.y
              },
              vx: 0,
              vy: 0
            }
          : logo
      )
    );
  }, [isHovered]);

  const handleMouseMove = useCallback((e) => {
    if (!isHovered) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    setLogos(prevLogos => 
      prevLogos.map(logo => 
        logo.isDragging 
          ? {
              ...logo,
              x: Math.max(0, Math.min(rect.width - logo.size, mouseX - logo.dragOffset.x)),
              y: Math.max(40, Math.min(rect.height - logo.size, mouseY - logo.dragOffset.y))
            }
          : logo
      )
    );
  }, [isHovered]);

  const handleMouseUp = useCallback(() => {
    setLogos(prevLogos => 
      prevLogos.map(logo => ({ 
        ...logo, 
        isDragging: false,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8
      }))
    );
  }, []);

  // Add global mouse event listeners
  useEffect(() => {
    if (isHovered) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isHovered, handleMouseMove, handleMouseUp]);

  // Handle container click - only if not dragging
  const handleContainerClick = useCallback((e) => {
    if (isDraggingAny) return;
    
    if (e.target === containerRef.current || e.target.closest('.tech-stack-title') || e.target.closest('.tech-stack-instruction')) {
      onClick();
    }
  }, [onClick, isDraggingAny]);

  return (
    <div 
      className="tech-stack-container"
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleContainerClick}
    >
      <div className="tech-stack-title">
        Tech Stack
      </div>

      {logos.map((logo) => (
        <div
          key={logo.id}
          className="tech-logo-container"
          style={{
            left: `${logo.x}px`,
            top: `${logo.y}px`,
            width: `${logo.size}px`,
            height: `${logo.size}px`,
            transform: `rotate(${logo.rotation}deg) scale(${isHovered ? 1.05 : 1})`,
            cursor: isHovered ? (logo.isDragging ? 'grabbing' : 'grab') : 'default',
            zIndex: logo.isDragging ? 10 : 5,
            pointerEvents: isHovered ? 'auto' : 'none'
          }}
          title={logo.name}
          onMouseDown={(e) => handleMouseDown(e, logo.id)}
        >
          <img
            src={logo.logo}
            alt={logo.name}
            className="tech-logo-image"
            style={{
              filter: logo.name === 'Flask' || logo.name === 'GitHub' || logo.name === 'Express.js'
                ? `drop-shadow(0 0 15px rgba(255,255,255,0.8)) drop-shadow(0 0 30px rgba(255,255,255,0.4)) drop-shadow(0 2px 4px rgba(0,0,0,0.3))`
                : `drop-shadow(0 0 15px ${logo.color}80) drop-shadow(0 0 30px ${logo.color}40) drop-shadow(0 2px 4px rgba(0,0,0,0.3))`
            }}
            draggable={false}
          />
        </div>
      ))}

      <div className="tech-particle tech-particle-1" />
      <div className="tech-particle tech-particle-2" />
    </div>
  );
};

// Skills Popup Component
const SkillsPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <button className="popup-close" onClick={onClose}>×</button>
        <div className="popup-skills-section">
          <h2 className="popup-skills-title">Key Technical Skills</h2>
          <ul className="popup-skills-list">
            <li><strong>Languages:</strong> <span>Python, Java, Javascript</span></li>
            <li><strong>Data Handling:</strong> <span>SQL, MongoDB, Pandas, NumPy</span></li>
            <li><strong>APIs & Frameworks:</strong> <span>Flask, FastAPI, REST APIs, Node.js, Express.js, Vite</span></li>
            <li><strong>Cloud & DevOps:</strong> <span>Docker, AWS, GCP, Render, Vercel, Netlify</span></li>
            <li><strong>Version Control:</strong> <span>Git, GitHub</span></li>
            <li><strong>DSA & Problem Solving</strong></li>
            <li><strong>Frontend:</strong> <span>React.js, CSS, Tailwind CSS, React Query</span></li>
            <li><strong>Design & Prototyping Tools:</strong> <span>Figma, InVision, Balsamiq, Maze, Canva</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

// Main AboutMe Component
function AboutMe() {
  const [isSkillsPopupOpen, setIsSkillsPopupOpen] = useState(false);

  const handleTechStackClick = () => {
    setIsSkillsPopupOpen(true);
  };

  const closeSkillsPopup = () => {
    setIsSkillsPopupOpen(false);
  };

  // Scroll animation effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          } else {
            entry.target.classList.remove('animate');
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Elements to animate
    const elementsToAnimate = [
      '.section-title',
      '.about-content', 
      '.tech-stack-container',
      '.education-main-title',
      '.education-item',
      '.my-image-container',
      '.image-text-content'
    ];

    // Small delay to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      elementsToAnimate.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
          element.classList.add('scroll-animate');
          observer.observe(element);
        });
      });
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="about-section">
      {/* Grid background elements */}
      <div className="vertical-lights"></div>
      <div className="corner-glow-1"></div>
      <div className="corner-glow-2"></div>
      <div className="particle1"></div>
      <div className="particle2"></div>
      
      <h1 className="section-title">About Me</h1>
      <p className="about-content">
        I'm a frontend-leaning full-stack developer who loves building clean, intuitive, and user-centered web apps. With a strong foundation in React, Tailwind, and UI/UX tools like Figma, I enjoy designing interfaces that don't just look good — they feel good to use. At the same time, I've worked across the backend using Python, FastAPI, Spring Boot, and Node.js, and deployed projects using Docker, AWS, and GCP.
        <br /><br />
        I've built a range of projects that combine design thinking with solid engineering — like a 3D globe-based travel journal app, an AI-powered resume screener, and a secure clinic database system. Whether I'm working on frontend animations or optimizing backend APIs, I love turning early ideas into smooth, functional products.
        <br /><br />
        I'm someone who learns best by building. I enjoy solving problems, picking up new tools, and collaborating with people who care about good code and good user experiences. My goal is to keep growing as a developer, contribute meaningfully to real-world projects, and always stay curious along the way.
      </p>

      {/* Chibi Sticker with Dialogue - Between about content and tech stack */}
      <div className="about-chibi-container">
        <div className="about-dialogue-bubble">
          <p>Hello Again! <br />You can click to view skills. <br />Hold and drag an icon for chaos! </p>
          <div className="about-bubble-arrow"></div>
        </div>
        <div className="about-chibi-sticker">
          <img src={chibiUp} alt="Chibi Helper" className="about-chibi-image" />
        </div>
      </div>

      {/* Tech Stack Container with click handler */}
      <TechStackContainer onClick={handleTechStackClick} />

      {/* Skills Popup */}
      <SkillsPopup isOpen={isSkillsPopupOpen} onClose={closeSkillsPopup} />

      <div className="content-container">
        <h2 className="education-main-title">Educational Qualifications</h2>
        <div className="education-grid">
          <div className="education-item vit-education">
            <h3 className="education-degree">Bachelor of Computer Science & Engineering</h3>
            <p className="education-details">
              Vellore Institute of Technology<br />
              Vellore, Tamil Nadu, India
            </p>
          </div>
        </div>

        {/* My Image Section */}
        <div className="my-image-section">
          <div className="my-image-container">
            <img 
              src={myImage} 
              alt="Krishika" 
              className="my-image"
            />
            <div className="image-overlay"></div>
          </div>
          
          <div className="image-text-content">
            <h3 className="image-text-greeting">Hello there! I'm Krishika.</h3>
            <p className="image-text-description">
              This portfolio is a piece of my journey from failing to understand loops in school to falling in love with building things that are real, meaningful, and fun! It's been a long road filled with bugs and debugs... doubts and detours... patience and quiet wins.
              <br /><br />
              The journey's far from over and honestly? that's the best part.
              <br /><br />
              If you're here, thank you for taking a moment to see what I've created. I hope you see the effort and care put into every line.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;