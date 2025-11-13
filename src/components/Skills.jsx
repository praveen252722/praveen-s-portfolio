import React from "react";
import "./Skills.css";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

function Skills() {
  return (
    <div className="card">
      <h3 className="card-title">Skills</h3>

      <div className="skills-list">
        <span>HTML</span>
        <span>CSS</span>
        <span>JavaScript</span>
        <span>React</span>
        <span>Excel</span>
        <span>SQL</span>
        <span>Power BI</span>
        <span>Python</span>
        <span>Machine Learning</span>
      </div>

      {/* Social Icons above CV button */}
      <div className="social-icons">
        <a
          href="https://www.linkedin.com/in/talluri-praveen-30a808304"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/praveen252722"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/prawin_2522?igsh=MWtnenZpZHliMjBqeA=="
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram />
        </a>
      </div>

      {/* ✅ Download CV button (fixed path) */}
      <a href="/TALLURI-PRAVEEN.pdf" download className="cv-btn">
        Download CV
      </a>
    </div>
  );
}

export default Skills;
