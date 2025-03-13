import React from "react";
import "./About.css";
import { FaLaptopCode, FaUniversity, FaCode } from "react-icons/fa";

const About = () => {
  return (
    <div id="about" className="about-section">
      <div className="about-container">
        <h1 className="section-title">About Me</h1>

        <div className="about-content">
          {/* Education Section */}
          <div className="content-box">
            <div className="icon-heading">
              <FaUniversity className="section-icon" />
              <h2>Education</h2>
            </div>
            <div className="education-details">
              <h3>North Carolina State University</h3>
              <p>B.S. in Computer Science | Concentration in AI</p>
              <p>Expected Graduation: May 2026 | GPA: 3.8/4.0</p>
              <div className="coursework">
                <h4>Relevant Coursework:</h4>
                <ul>
                  <li>Software Engineering</li>
                  <li>Data Structures and Algorithms</li>
                  <li>Operating Systems</li>
                  <li>C and Software Tools</li>
                  <li>Software Development Fundamentals</li>
                  <li>Discrete Mathematics</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Professional Experience */}
          <div className="content-box">
            <div className="icon-heading">
              <FaLaptopCode className="section-icon" />
              <h2>Professional Experience</h2>
            </div>
            <div className="experience-item">
              <h3>Software Engineer Intern</h3>
              <p className="company">
                Pioneer Quest Solutions | Jan 2025 - Present
              </p>
              <ul className="achievement-list">
                <li>
                  Engineered and deployed 3 full-stack features using React and
                  Spring Boot, reducing page load times by 35%
                </li>
                <li>
                  Implemented automated testing protocols achieving 92% code
                  coverage
                </li>
                <li>
                  Optimized database queries and API endpoints, cutting average
                  response time from 2.5s to 0.8s
                </li>
              </ul>
            </div>

            <div className="experience-item">
              <h3>Website Maintenance Assistant</h3>
              <p className="company">
                Gatik Junior College | June 2021 - Sep 2021
              </p>
              <ul className="achievement-list">
                <li>
                  Led a team of 7 students to design and implement new website
                  features
                </li>
                <li>
                  Implemented HTML and JavaScript for front-end features,
                  improving user engagement by 20%
                </li>
                <li>
                  Optimized site performance leading to a 27% increase in site
                  responsiveness
                </li>
              </ul>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="content-box">
            <div className="icon-heading">
              <FaCode className="section-icon" />
              <h2>Technical Skills</h2>
            </div>
            <div className="skills-grid">
              <div className="skill-category">
                <h3>Languages</h3>
                <div className="skill-tags">
                  <span className="skill-tag">Java</span>
                  <span className="skill-tag">Python</span>
                  <span className="skill-tag">C</span>
                  <span className="skill-tag">JavaScript</span>
                  <span className="skill-tag">TypeScript</span>
                  <span className="skill-tag">SQL</span>
                  <span className="skill-tag">HTML</span>
                  <span className="skill-tag">CSS</span>
                  <span className="skill-tag">YAML</span>
                </div>
              </div>

              <div className="skill-category">
                <h3>Frameworks & Libraries</h3>
                <div className="skill-tags">
                  <span className="skill-tag">ReactJS</span>
                  <span className="skill-tag">NodeJS</span>
                  <span className="skill-tag">TailwindCSS</span>
                  <span className="skill-tag">Spring Boot</span>
                  <span className="skill-tag">PyTorch</span>
                  <span className="skill-tag">NumPy</span>
                  <span className="skill-tag">Pandas</span>
                </div>
              </div>

              <div className="skill-category">
                <h3>Tools & Software</h3>
                <div className="skill-tags">
                  <span className="skill-tag">Git</span>
                  <span className="skill-tag">Postman</span>
                  <span className="skill-tag">VS Code</span>
                  <span className="skill-tag">Eclipse</span>
                  <span className="skill-tag">Jenkins</span>
                  <span className="skill-tag">Hibernate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
