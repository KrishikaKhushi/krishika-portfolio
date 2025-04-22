import React from 'react';
import './Blog.css';

const Blog = () => {
  return (
    <section className="blog-section">
      <h2 className="blog-title">Blog</h2>

      <h3 className="blog-subtitle">How I Built My Portfolio Website [Step-by-Step]</h3>

      <div className="blog-content">
        <p>
          Creating my personal portfolio was one of the most exciting and fulfilling projects I've worked on.
          It wasn’t just about showcasing my skills—it was about expressing who I am as a person and developer.
          Here’s a breakdown of how I made it happen:
        </p>

        <hr />

        <h4>🔍 Step 1: Planning the Structure</h4>
        <ul>
          <li>What pages I want (Home, About Me, Projects, Professional Experience, Extracurricular, Blog, Contact etc.)</li>
          <li>What I want each page to feel like—clean, a little animated, and full of personality</li>
          <li>A consistent color theme: black background, gradient text, soft animations</li>
        </ul>

        <hr />

        <h4>💻 Step 2: Choosing the Tech Stack</h4>
        <ul>
          <li>React.js for frontend (because it's flexible and interactive)</li>
          <li>React Router for page navigation</li>
          <li>Tailwind CSS for quick and modern styling</li>
          <li>Floating animations and varying but neat fonts for a unique, soft aesthetic</li>
        </ul>

        <hr />

        <h4>⚙️ Step 3: Building the Pages</h4>
        <ul>
          <li>Home – Short intro, eye-catching animations, buttons</li>
          <li>About Me – Journey, education, with subtle motion</li>
          <li>Projects – Cards with links, tools used, and what I learned</li>
          <li>Professional Experience – Collection of my experience in this field</li>
          <li>Extracurricular – My non-academic activities and interests</li>
          <li>Blog – This section 😉</li>
          <li>Contact Me – Email & LinkedIn, styled nicely</li>
        </ul>

        <hr />

        <h4>✨ Step 4: Adding Animations & Style</h4>
        <ul>
          <li>Used Framer Motion for smooth transitions</li>
          <li>Added gradient headings</li>
          <li>Designed a flowing layout with clean spacing and rounded edges</li>
        </ul>

        <hr />

        <h4>☁️ Step 5: Hosting It</h4>
        <ul>
          <li>Planning to host it on GitHub Pages or Netlify (still testing both)</li>
          <li>Will later try deploying with Docker + AWS/GCP to learn cloud deployments</li>
        </ul>

        <hr />

        <h4>💭 What I Learned</h4>
        <ul>
          <li>Tailwind is a lifesaver for design!</li>
          <li>React Router makes page navigation super smooth</li>
          <li>Animations make everything feel more you</li>
          <li>Planning before coding saves a LOT of time</li>
        </ul>

        <hr />

        <h4>Final Thought</h4>
        <p>
          This portfolio isn’t just a collection of links—it’s my digital identity. And I’m still improving it every day.
          Whether you're a recruiter, friend, or fellow dev, thanks for stopping by ❤️
        </p>
      </div>
    </section>
  );
};

export default Blog;
