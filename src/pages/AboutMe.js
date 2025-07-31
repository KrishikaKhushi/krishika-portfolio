import React from 'react';
import './AboutMe.css'; // Make sure this points to your correct CSS file

function AboutMe() {
  const scrollToOriginStory = () => {
    const originStoryElement = document.getElementById('origin-story');
    if (originStoryElement) {
      originStoryElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  return (
    <div className="about-section">
      {/* Floating Bubble */}
      <div className="floating-bubble" onClick={scrollToOriginStory}>
        <span className="bubble-text">📖 Read my origin story</span>
      </div>

      <h1 className="section-title">About Me</h1>
      <p className="about-content">
        I'm a frontend-leaning full-stack developer who loves building clean, intuitive, and user-centered web apps. With a strong foundation in React, Tailwind, and UI/UX tools like Figma, I enjoy designing interfaces that don't just look good — they feel good to use. At the same time, I've worked across the backend using Python, FastAPI, Spring Boot, and Node.js, and deployed projects using Docker, AWS, and GCP.
        <br /><br />
        I've built a range of projects that combine design thinking with solid engineering — like a 3D globe-based travel journal app, an AI-powered resume screener, and a secure clinic database system. Whether I'm working on frontend animations or optimizing backend APIs, I love turning early ideas into smooth, functional products.
        <br /><br />
        I'm someone who learns best by building. I enjoy solving problems, picking up new tools, and collaborating with people who care about good code and good user experiences. My goal is to keep growing as a developer, contribute meaningfully to real-world projects, and always stay curious along the way.
      </p>

      <div className="content-container">
        <div className="skills-section">
          <h2 className="skills-title">Key Technical Skills</h2>
          <ul className="skills-list">
            <li><strong>Languages:</strong> <span>Python, Java</span></li>
            <li><strong>Data Handling:</strong> <span>SQL, MongoDB (NoSQL)</span></li>
            <li><strong>APIs & Frameworks:</strong> <span>Flask, FastAPI, REST APIs</span></li>
            <li><strong>Cloud & DevOps:</strong> <span>Docker, AWS, GCP</span></li>
            <li><strong>Version Control:</strong> <span>Git, GitHub</span></li>
            <li><strong>DSA & Problem Solving</strong></li>
            <li><strong>Frontend:</strong> <span>React.js, Javascript, CSS</span></li>
            <li><strong>Design & Prototyping Tools:</strong> <span>Figma, InVision, Balsamiq, Maze, Canva</span></li>
          </ul>
        </div>

        <div className="education-section">
          <h2 className="skills-title">Educational Qualifications</h2>
          <ul className="education-list">
            <li><span>Bachelor of Computer Science & Engineering</span><br />
              Vellore Institute of Technology, Vellore, Tamil Nadu, India<br />
              CGPA: 7.58
            </li>
            <li><span>10th:</span> St. Joseph's Convent High School, Patna, Bihar, India<br />
              Percentage: 94.2%
            </li>
            <li><span>12th:</span> Notre Dame Academy, Patna, Bihar, India<br />
              Percentage: 75.6%
            </li>
          </ul>
        </div>
      </div>

      {/* Origin Story Section */}
      <div className="origin-story-section" id="origin-story">
        <h2 className="origin-story-title">My Coding Journey: From Confusion to Passion</h2>
        <div className="origin-story-content">
          <p>
            My relationship with coding began in 6th grade through the ICSE curriculum, but honestly? It was rocky at first. By 9th standard, I was struggling with basic concepts like loops and conditionals—getting low marks in what was supposed to be a "scoring subject." The classroom environment made it hard to focus, and without understanding the fundamentals, I couldn't find any interest in the subject.
          </p>
          <p>
            Everything changed when I joined Mrs. Sunita's coaching classes with a friend who was facing similar challenges. Those first few months were tough since I had virtually no grasp of the basics, but she was incredibly patient with our small group. In that focused environment, things finally started clicking. I began to see the logic, the meaning behind every line of code, the elegant solutions to number problems and pattern challenges.
          </p>
          <p>
            What really hooked me was when she'd throw us coding challenges to solve independently over a day or two. I became obsessed with cracking them on my own before the next class. That feeling when she'd say "Yes, this is correct—very good!" and suggest alternative approaches? Pure rush. I was officially addicted to problem-solving.
          </p>
          <p>
            All that practice and passion paid off—I scored 99/100 in my 10th board exams. By then, my path was crystal clear: I wanted to dive deeper into the world of coding. In 11th-12th, I switched to CBSE and transitioned from Java to Python, got introduced to SQL and databases—every new concept felt like unlocking another level.
          </p>
          <p>
            When college decision time came, computer science engineering was the obvious choice. At VIT Vellore, I initially focused on backend development with some AI and ML exploration on the side. But everything shifted during my final year when I had to develop my portfolio website—my first real dive into frontend.
          </p>
          <p>
            That's when I discovered something unexpected: I absolutely love designing. There's a completely different kind of rush when you can visually see all the designs you had in mind coming to life, working seamlessly, and imagining how users will feel when they interact with what you've built. Watching my ideas transform from concepts to living, breathing applications was nothing short of magical.
          </p>
          <p>
            That revelation turned me into a full-stack developer—I fell in love with the entire process. There's something incredibly satisfying about seeing all your efforts and ideas come to life and into action. From that struggling 9th grader who couldn't understand loops to someone who now builds complete user experiences, the journey has been extraordinary.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;