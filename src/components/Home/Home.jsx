import React from "react";
import "./Home.css";
// import icon from "../../Images/profilepic.jpg";
import icon from "../../Images/newIcon.jpg";
import resumePDF from "../../assets/Eswar_Talasila_Resume_FF.pdf";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaBasketballBall,
  FaGamepad,
  FaFilm,
} from "react-icons/fa";

const Home = () => {
  return (
    <div id="home" className="home">
      <h1 className="accent-heading text-center text-4xl p-10">Welcome!</h1>

      <div className="main-card">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-12">
          {/* Left column - image and social icons */}
          <div className="md:w-1/3 flex flex-col items-center">
            <div className="profile-image-container w-64 h-64">
              <img
                src={icon}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Social links */}
            <div className="social-links mt-6">
              <a
                href="https://github.com/EswarTalasila"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FaGithub size={28} />
              </a>
              <a
                href="https://www.linkedin.com/in/eswar-talasila-832882262/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FaLinkedin size={28} />
              </a>
              <a href="mailto:ectalasi@ncsu.edu" className="social-icon">
                <FaEnvelope size={28} />
              </a>
            </div>

            <div className="resume-container mt-4">
              <a
                href={resumePDF}
                target="_blank"
                rel="noopener noreferrer"
                className="resume-button"
              >
                Resume
              </a>
            </div>
          </div>

          {/* Right column - text content */}
          <div className="md:w-3/5">
            <div className="content-section">
              <h2 className="text-3xl font-bold mb-2">Hello!</h2>
              <h3 className="text-2xl text-gray-300 mb-4">
                I'm Eswar Talasila
              </h3>
              <p className="text-xl mb-6">
                I'm a Junior majoring in Computer Science with a concentration
                in AI at North Carolina State University.
              </p>
              <p className="mb-4">
                Currently working as a Software Engineer Intern at Pioneer Quest
                Solutions, where I've engineered full-stack features using React
                and Spring Boot.
              </p>

              {/* Added personal information */}
              <p className="mb-4">
                My passion for technology began when I built my first computer
                in high school, which sparked my interest in understanding how
                software and hardware interact. Throughout my academic journey,
                I've developed a particular fascination with AI and machine
                learning applications.
              </p>

              <div className="personal-interests mb-6">
                <h4 className="text-xl font-semibold mb-3">
                  When I'm not coding, you can find me:
                </h4>
                <ul className="interest-list">
                  <li className="flex items-center gap-3 mb-2">
                    <FaBasketballBall className="text-teal-400" />
                    <span>
                      Playing basketball with friends at the campus courts
                    </span>
                  </li>
                  <li className="flex items-center gap-3 mb-2">
                    <FaGamepad className="text-teal-400" />
                    <span>
                      Enjoying video games - particularly Rocket League and
                      Marvel Rivals
                    </span>
                  </li>
                  <li className="flex items-center gap-3 mb-2">
                    <FaFilm className="text-teal-400" />
                    <span>
                      Watching sci-fi and thriller movies - Christopher Nolan
                      movies are my favorite
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Skills section */}
            <div className="content-section mt-8">
              <h3 className="text-xl font-bold mb-4">My Top Skills</h3>
              <div className="skills-container">
                <span className="skill-tag">Java</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">React</span>
                <span className="skill-tag">Spring Boot</span>
                <span className="skill-tag">SQL</span>
                <span className="skill-tag">PyTorch</span>
                <span className="skill-tag">Git</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
