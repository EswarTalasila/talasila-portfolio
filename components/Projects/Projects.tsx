import type { ReactNode } from "react";
import { FaGithub, FaPython, FaReact, FaJava } from "react-icons/fa";
import {
  SiPytorch,
  SiPandas,
  SiNumpy,
  SiPlotly,
  SiSpringboot,
  SiMysql,
  SiFastapi,
} from "react-icons/si";
import styles from "./Projects.module.css";

type TechTag = {
  icon: ReactNode;
  label: string;
};

type Project = {
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  tech: TechTag[];
  githubUrl?: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "Wolf Cafe",
    subtitle: "Full-Stack Coffee Ordering Platform",
    description:
      "Architected and deployed a full-stack coffee ordering system with a team of four, featuring real-time order notifications, JWT authentication, and 97% test coverage.",
    highlights: [
      "RESTful APIs built with a Spring Boot layered architecture (controller, service, repository)",
      "Hibernate ORM managing order transactions, user profiles, and menu inventory",
      "JWT-based authentication protecting user data and restricted endpoints",
    ],
    tech: [
      { icon: <FaJava />, label: "Java" },
      { icon: <SiSpringboot />, label: "Spring Boot" },
      { icon: <FaReact />, label: "React" },
      { icon: <SiMysql />, label: "MySQL" },
    ],
    featured: true,
  },
  {
    title: "Hydra",
    subtitle: "Multi-AI Chat Platform",
    description:
      "Full-stack chat interface for multiple AI models (Gemini, Claude) with real-time streaming, dynamic model switching, and persistent message history.",
    highlights: [
      "FastAPI backend serving both synchronous and streaming response endpoints",
      "Asynchronous token streaming with simulated typing effects",
      "CORS middleware and structured error handling for secure cross-origin requests",
    ],
    tech: [
      { icon: <FaReact />, label: "React" },
      { icon: <SiFastapi />, label: "FastAPI" },
      { icon: <FaPython />, label: "Python" },
    ],
  },
  {
    title: "User Activity Analytics Platform",
    subtitle: "Data Structures & Algorithms",
    description:
      "Java activity-tracking system that uses custom data structures to process and analyze large-scale log data with optimized time complexity.",
    highlights: [
      "Custom map-based data structures for efficient log entry processing",
      "Real-time activity analysis and temporal pattern reporting",
      "Thorough unit test suite reaching 100% method and 95% line coverage",
    ],
    tech: [
      { icon: <FaJava />, label: "Java" },
    ],
  },
  {
    title: "ESTVP",
    subtitle: "Earth Surface Temperature Visualization Platform",
    description:
      "PyTorch model that forecasts global surface temperatures from 90 years of climate data, paired with an interactive Plotly.js choropleth for exploration.",
    highlights: [
      "PyTorch LSTM trained on multi-decade global climate datasets",
      "Interactive choropleth maps for country-level temperature exploration",
      "Pandas and NumPy pipelines handling large-scale data preprocessing",
    ],
    tech: [
      { icon: <FaPython />, label: "Python" },
      { icon: <SiPytorch />, label: "PyTorch" },
      { icon: <SiPandas />, label: "Pandas" },
      { icon: <SiNumpy />, label: "NumPy" },
      { icon: <SiPlotly />, label: "Plotly.js" },
    ],
  },
];

export default function Projects() {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h2 className={styles.title}>Projects</h2>
      </div>

      <div className={styles.grid}>
        {projects.map((project) => (
          <div
            key={project.title}
            className={`${styles.card} ${project.featured ? styles.featured : ""}`}
          >
            <div className={styles.cardTop}>
              <div className={styles.cardMeta}>
                <p className={styles.subtitle}>{project.subtitle}</p>
                <div className={styles.icons}>
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.githubLink}
                      aria-label="GitHub"
                    >
                      <FaGithub />
                    </a>
                  ) : (
                    <FaGithub className={styles.githubDisabled} />
                  )}
                </div>
              </div>
              <h3 className={styles.cardTitle}>{project.title}</h3>
              <p className={styles.desc}>{project.description}</p>
            </div>

            <div className={styles.cardBottom}>
              <ul className={styles.highlights}>
                {project.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
              <div className={styles.techStack}>
                {project.tech.map(({ icon, label }) => (
                  <span key={label} className={styles.tech}>
                    {icon}
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
