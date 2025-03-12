import React from "react";
import "../../input.css";
import "./Project.css";
import "../../output.css";
import { FaGithub, FaPython, FaReact, FaJava } from "react-icons/fa";
import {
  SiPytorch,
  SiPandas,
  SiNumpy,
  SiPlotly,
  SiJavascript,
  SiSpringboot,
  SiMysql,
} from "react-icons/si";

const Projects = () => {
  return (
    <div id="projects" className="projects-section">
      <div className="projects-container">
        <h1 className="section-title">My Projects</h1>

        <div className="projects-grid">
          {/* Chimera Project */}
          <div className="project-card featured">
            <div className="project-content">
              <div className="project-header">
                <div className="project-title-area">
                  <h2 className="project-title">Chimera</h2>
                  <div className="project-links">
                    <a
                      href="https://github.com/EswarTalasila/Chimera"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <FaGithub />
                    </a>
                  </div>
                </div>
                <span className="project-date">Current Project</span>
              </div>

              <p className="project-description">
                A local AI runner similar to LM Studio that can work with
                various AI models using API keys. This platform enables users to
                run and interact with different AI models locally, enhancing
                privacy and reducing dependency on cloud services.
              </p>

              <div className="project-tech-stack">
                <span className="tech-tag">
                  <FaPython /> Python
                </span>
                <span className="tech-tag">
                  <SiJavascript /> JavaScript
                </span>
                <span className="tech-tag">
                  <FaReact /> React
                </span>
              </div>
            </div>
          </div>

          {/* ESTVP Project */}
          <div className="project-card">
            <div className="project-content">
              <div className="project-header">
                <div className="project-title-area">
                  <h2 className="project-title">
                    Earth Surface Temperature Visualization Platform
                  </h2>
                  <div className="project-links">
                    <span className="project-link disabled">
                      <FaGithub />
                    </span>
                  </div>
                </div>
                <span className="project-date">Nov 2024</span>
              </div>

              <p className="project-description">
                Developed an advanced machine learning model using PyTorch to
                forecast global surface temperatures based on 90 years of
                historical climate data. Created a web-based visualization
                system with integrated choropleth mapping capabilities.
              </p>

              <ul className="project-highlights">
                <li>
                  Implemented prediction models with PyTorch for temperature
                  forecasting
                </li>
                <li>
                  Built interactive visualizations using Plotly.js for data
                  exploration
                </li>
                <li>
                  Designed efficient data processing pipelines using Pandas and
                  NumPy
                </li>
              </ul>

              <div className="project-tech-stack">
                <span className="tech-tag">
                  <FaPython /> Python
                </span>
                <span className="tech-tag">
                  <SiPytorch /> PyTorch
                </span>
                <span className="tech-tag">
                  <SiPandas /> Pandas
                </span>
                <span className="tech-tag">
                  <SiNumpy /> NumPy
                </span>
                <span className="tech-tag">
                  <SiPlotly /> Plotly.js
                </span>
              </div>
            </div>
          </div>

          {/* User Activity Analytics Platform */}
          <div className="project-card">
            <div className="project-content">
              <div className="project-header">
                <div className="project-title-area">
                  <h2 className="project-title">
                    User Activity Analytics Platform
                  </h2>
                  <div className="project-links">
                    <span className="project-link disabled">
                      <FaGithub />
                    </span>
                  </div>
                </div>
                <span className="project-date">Oct 2024</span>
              </div>

              <p className="project-description">
                Engineered a sophisticated user activity tracking system using
                Java, leveraging custom data structures and algorithms to
                process and analyze large-scale log data with optimized time
                complexity.
              </p>

              <ul className="project-highlights">
                <li>
                  Designed custom map-based data structures for efficient log
                  processing
                </li>
                <li>
                  Developed reporting functionality for user behavior pattern
                  analysis
                </li>
                <li>
                  Implemented comprehensive unit testing with 100% method
                  coverage
                </li>
              </ul>

              <div className="project-tech-stack">
                <span className="tech-tag">
                  <FaJava /> Java
                </span>
                <span className="tech-tag">
                  <SiSpringboot /> Spring Boot
                </span>
                <span className="tech-tag">
                  <SiMysql /> SQL
                </span>
              </div>
            </div>
          </div>

          {/* Weather Data Analyzer */}
          <div className="project-card">
            <div className="project-content">
              <div className="project-header">
                <div className="project-title-area">
                  <h2 className="project-title">Weather Data Analyzer</h2>
                  <div className="project-links">
                    <span className="project-link disabled">
                      <FaGithub />
                    </span>
                  </div>
                </div>
                <span className="project-date">May 2024</span>
              </div>

              <p className="project-description">
                Created a Python script to analyze and visualize historical
                weather data for 3 cities, executing data parsing from CSV files
                and performing statistical analysis on over 1,000 weather
                records.
              </p>

              <ul className="project-highlights">
                <li>Analyzed 5-year trends in temperature and precipitation</li>
                <li>
                  Created visualizations using matplotlib for data presentation
                </li>
                <li>
                  Implemented parsing algorithms for various CSV data formats
                </li>
              </ul>

              <div className="project-tech-stack">
                <span className="tech-tag">
                  <FaPython /> Python
                </span>
                <span className="tech-tag">
                  <SiPandas /> Pandas
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
