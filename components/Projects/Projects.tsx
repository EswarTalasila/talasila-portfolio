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
      "Collaborated with a team of 4 to architect and deploy a full-stack coffee ordering system with real-time order notifications, JWT authentication, and 97% test coverage.",
    highlights: [
      "RESTful APIs with Spring Boot layered architecture (controller / service / repository)",
      "Hibernate ORM for order transactions, user profiles, and menu inventory",
      "JWT-based auth protecting user data and authenticated endpoints",
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
      "Full-stack chat interface supporting multiple AI models (Gemini, Claude) with real-time streaming responses, dynamic model switching, and message history.",
    highlights: [
      "FastAPI backend with endpoints for both sync and streaming responses",
      "Asynchronous streaming with simulated typing effects",
      "CORS middleware and error handling for secure cross-origin communication",
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
      "Java-based activity tracking system leveraging custom data structures to process and analyze large-scale log data with optimized time complexity and 100% method coverage.",
    highlights: [
      "Custom map-based data structures for efficient log entry processing",
      "Real-time activity analysis and temporal pattern reporting",
      "Comprehensive unit tests with 100% method and 95% line coverage",
    ],
    tech: [
      { icon: <FaJava />, label: "Java" },
    ],
  },
  {
    title: "ESTVP",
    subtitle: "Earth Surface Temperature Visualization Platform",
    description:
      "ML model built with PyTorch to forecast global surface temperatures from 90 years of historical data, paired with an interactive choropleth visualization built on Plotly.js.",
    highlights: [
      "PyTorch LSTM model trained on multi-decade climate datasets",
      "Interactive choropleth maps for global temperature exploration",
      "Pandas and NumPy pipelines for large-scale data preprocessing",
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
