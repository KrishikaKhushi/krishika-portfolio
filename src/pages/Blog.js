import React, { useState, useEffect, useRef } from 'react';
import './Blog.css';
import './BlogRes.css';

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

const Blog = () => {
  // Animation refs for each section
  const [titleRef, isTitleVisible] = useInViewAnimation();
  const [subtitleRef, isSubtitleVisible] = useInViewAnimation();
  const [contentRef, isContentVisible] = useInViewAnimation();

  return (
    <section className="blog-section">
      {/* Grid background elements */}
      <div className="vertical-lights"></div>
      <div className="corner-glow-1"></div>
      <div className="corner-glow-2"></div>
      <div className="particle1"></div>
      <div className="particle2"></div>
      
      <h2 
        ref={titleRef}
        className={`blog-title ${isTitleVisible ? 'fade-in-down' : ''}`}
      >
        Blog
      </h2>

      <h3 
        ref={subtitleRef}
        className={`blog-subtitle ${isSubtitleVisible ? 'slide-in-up' : ''}`}
      >
        My Coding Journey: From Confusion to Passion
      </h3>

      <div 
        ref={contentRef}
        className={`blog-content ${isContentVisible ? 'fade-in-up' : ''}`}
      >
        <p>
          My relationship with coding began in 6th grade through the ICSE curriculum, but honestly? It was rocky at first. 
          By 9th standard, I was struggling with basic concepts like loops and conditionals—getting low marks in what was 
          supposed to be a "scoring subject." The classroom environment made it hard to focus, and without understanding 
          the fundamentals, I couldn't find any interest in the subject.
        </p>

        <p>
          Everything changed when I joined Mrs. Sunita's coaching classes with a friend who was facing similar challenges. 
          Those first few months were tough since I had virtually no grasp of the basics, but she was incredibly patient 
          with our small group. In that focused environment, things finally started clicking. I began to see the logic, 
          the meaning behind every line of code, the elegant solutions to number problems and pattern challenges.
        </p>

        <p>
          What really hooked me was when she'd throw us coding challenges to solve independently over a day or two. 
          I became obsessed with cracking them on my own before the next class. That feeling when she'd say 
          "Yes, this is correct—very good!" and suggest alternative approaches? Pure rush. I was officially addicted 
          to problem-solving.
        </p>

        <p>
          All that practice and passion paid off—I scored 99/100 in my 10th board exams. By then, my path was crystal clear. 
          I wanted to dive deeper into the world of coding. In 11th-12th, I switched to CBSE and transitioned from Java 
          to Python, got introduced to SQL and databases—every new concept felt like unlocking another level.
        </p>

        <p>
          When college decision time came, computer science engineering was the obvious choice. At VIT Vellore, I initially 
          focused on backend development with some AI and ML exploration on the side. But everything shifted during my final 
          year when I had to develop my portfolio website—my first real dive into frontend.
        </p>

        <p>
          That's when I discovered something unexpected: I absolutely love designing. There's a completely different kind 
          of rush when you can visually see all the designs you had in mind coming to life, working seamlessly, and 
          imagining how users will feel when they interact with what you've built. Watching my ideas transform from 
          concepts to living, breathing applications was nothing short of magical.
        </p>

        <p>
          That revelation turned me into a full-stack developer—I fell in love with the entire process. There's something 
          incredibly satisfying about seeing all your efforts and ideas come to life and into action. From that struggling 
          9th grader who couldn't understand loops to someone who now builds complete user experiences, the journey has 
          been extraordinary.
        </p>

        <p>
          Looking back, I'm grateful for those early struggles. They taught me persistence, the value of good mentorship, 
          and that sometimes the subjects we find most challenging can become our greatest passions. Every line of code 
          I write now carries the memory of that first "Eureka!" moment when everything finally clicked.
        </p>
      </div>
    </section>
  );
};

export default Blog;