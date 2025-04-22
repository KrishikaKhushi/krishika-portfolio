import React from 'react';
import './Extracurricular.css';

function Extracurricular() {
  return (
    <div className="extras-section">
      <h1 className="section-heading gradient-text">Extracurricular</h1>

      {/* Club Activities Card */}
      <div className="card-wrapper">
        <h2 className="subheading gradient-text">Club Activities</h2>

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
            <li>Supported public relations initiatives, enhancing the club’s outreach and engagement while building leadership, coordination, and communication skills.</li>
          </ul>
        </div>

        <h3 className="gradient-text">Others</h3>
        <ul className="content-list">
          <li>Was a part of VIT Community Radio (Music and English Sections)</li>
          <li>Was a part of Creativity Club</li>
        </ul>
      </div>

      {/* Hobbies Card */}
      <div className="card-wrapper">
        <h2 className="subheading">Hobbies</h2>
        <p className="hobbies-text">
          Anchoring, Music Enthusiast, Reading, Sketching, Poetry
        </p>
      </div>
    </div>
  );
}

export default Extracurricular;
