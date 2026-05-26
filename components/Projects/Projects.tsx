"use client";

import type { ReactNode, MouseEvent } from "react";
import { FaGithub, FaPython, FaReact, FaJava, FaRobot, FaDocker } from "react-icons/fa";
import {
  SiPytorch,
  SiPandas,
  SiNumpy,
  SiPlotly,
  SiSpringboot,
  SiMysql,
  SiFastapi,
  SiDjango,
  SiTypescript,
  SiGodotengine,
  SiNextdotjs,
  SiPostgresql,
} from "react-icons/si";
import Reveal from "@/components/Reveal/Reveal";
import styles from "./Projects.module.css";

type TechTag = {
  icon: ReactNode;
  label: string;
};

type Project = {
  title: string;
  subtitle: string;
  summary: string;
  highlights: string[];
  tech: TechTag[];
  githubUrl?: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "EE Lab RSR Assessment Platform",
    subtitle: "Full-stack platform migration · NC State",
    summary:
      "Led a five-engineer rewrite of a production assessment platform from Java/Angular to Python/Django and Next.js, deployed on a hardened Linux stack.",
    highlights: [
      "Designed a four-tier role-based access system with custom sudo delegation in Django REST Framework.",
      "Implemented JWT auth on HttpOnly cookies, HMAC-SHA256 invite hashing, and identifier-based rate limiting.",
      "Authored 3,300+ tests reaching 82% branch coverage across Django and Vitest.",
      "Shipped Docker Compose, Nginx, and Certbot infrastructure with CI/CD enforcing quality gates.",
    ],
    tech: [
      { icon: <FaPython />, label: "Python" },
      { icon: <SiDjango />, label: "Django" },
      { icon: <SiNextdotjs />, label: "Next.js" },
      { icon: <SiTypescript />, label: "TypeScript" },
      { icon: <SiPostgresql />, label: "PostgreSQL" },
      { icon: <FaDocker />, label: "Docker" },
    ],
    featured: true,
  },
  {
    title: "Wolf Cafe",
    subtitle: "Full-stack ordering platform",
    summary:
      "Six-person agile build of an end-to-end coffee ordering system with real-time order tracking and tight backend testing discipline.",
    highlights: [
      "Designed RESTful APIs on Spring Boot with a layered controller-service-repository architecture.",
      "Pushed live order updates to the React client via Server-Sent Events.",
      "Reached 97% coverage with unit and integration tests on a Hibernate + MySQL data layer.",
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
    subtitle: "Multi-model AI chat",
    summary:
      "A streaming chat interface that lets you switch between Gemini and Claude mid-conversation, with persistent history and a typed message contract.",
    highlights: [
      "Async token streaming with simulated typing rhythm on the React client.",
      "FastAPI backend exposing both batched and streaming endpoints.",
      "CORS middleware and structured error envelopes for safe cross-origin use.",
    ],
    tech: [
      { icon: <FaReact />, label: "React" },
      { icon: <SiFastapi />, label: "FastAPI" },
      { icon: <FaPython />, label: "Python" },
    ],
    githubUrl: "https://github.com/EswarTalasila/Hydra",
  },
  {
    title: "ESTVP",
    subtitle: "Earth surface temperature visualization",
    summary:
      "PyTorch model forecasting global surface temperatures from 90 years of climate data, paired with an interactive choropleth for exploration.",
    highlights: [
      "LSTM trained on multi-decade global climate datasets with time-series cross-validation.",
      "Country-level choropleth maps in Plotly.js for interactive exploration.",
      "Pandas and NumPy preprocessing pipelines tuned for large climate datasets.",
    ],
    tech: [
      { icon: <FaPython />, label: "Python" },
      { icon: <SiPytorch />, label: "PyTorch" },
      { icon: <SiPandas />, label: "Pandas" },
      { icon: <SiNumpy />, label: "NumPy" },
      { icon: <SiPlotly />, label: "Plotly.js" },
    ],
    githubUrl: "https://github.com/EswarTalasila/ESTVP",
  },
  {
    title: "Colored Box Sorter",
    subtitle: "Autonomous robotics system",
    summary:
      "ROS 2 vehicle that detects colored objects via camera, navigates to them, and deposits them in target regions using pose estimation.",
    highlights: [
      "Camera-driven color detection feeding an autonomous pick-and-place loop.",
      "ROS 2 nodes split across driving, controller input, pose filtering, and mission state.",
      "Browser-based monitoring UI connected over a WebSocket bridge.",
    ],
    tech: [
      { icon: <FaPython />, label: "Python" },
      { icon: <FaRobot />, label: "ROS 2" },
    ],
    githubUrl: "https://github.com/EswarTalasila/SelfDrivingCar",
  },
  {
    title: "Service Suspended",
    subtitle: "Four-part interactive narrative",
    summary:
      "A collaborative four-game series that unravels a time-loop mystery through branching dialogue and choice-driven storytelling.",
    highlights: [
      "Multi-chapter branching narrative spanning four games with a shared story arc.",
      "Built in Godot (GDScript) and Twine with custom shaders and scripted scenes.",
      "Four-person team handling writing, design, and engineering together.",
    ],
    tech: [
      { icon: <SiGodotengine />, label: "Godot" },
    ],
    githubUrl: "https://github.com/EswarTalasila/GameDesign",
  },
];

const featured = projects.filter((p) => p.featured);
const others = projects.filter((p) => !p.featured);

function handlePointer(e: MouseEvent<HTMLElement>) {
  const target = e.currentTarget;
  const rect = target.getBoundingClientRect();
  target.style.setProperty("--mx", `${e.clientX - rect.left}px`);
  target.style.setProperty("--my", `${e.clientY - rect.top}px`);
}

export default function Projects() {
  return (
    <div className={styles.container}>
      <Reveal as="header" className={styles.heading}>
        <span className={styles.kicker}>02 — Selected Work</span>
        <h2 className={styles.title}>
          Things I&apos;ve <em>built</em>.
        </h2>
        <p className={styles.lede}>
          A handful of projects spanning AI tooling, full-stack platforms, and
          experiments. Each one taught me something I now carry into the next.
        </p>
      </Reveal>

      <div className={styles.featuredList}>
        {featured.map((project, idx) => (
          <Reveal
            key={project.title}
            className={styles.featuredCard}
            delay={idx * 60}
          >
            <article onMouseMove={handlePointer}>
              <div className={styles.featuredGlow} aria-hidden="true" />
              <div className={styles.featuredInner}>
                <header className={styles.featuredHeader}>
                  <div>
                    <p className={styles.cardKicker}>{project.subtitle}</p>
                    <h3 className={styles.cardTitle}>{project.title}</h3>
                  </div>
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.cardLink}
                      aria-label={`${project.title} on GitHub`}
                    >
                      <FaGithub />
                    </a>
                  ) : null}
                </header>

                <p className={styles.cardSummary}>{project.summary}</p>

                <ul className={styles.highlights}>
                  {project.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>

                <div className={styles.techStack}>
                  {project.tech.map(({ icon, label }) => (
                    <span key={label} className={styles.tech}>
                      <span className={styles.techIcon}>{icon}</span>
                      {label}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal as="header" className={styles.otherHeading} delay={60}>
        <span className={styles.subKicker}>More</span>
        <h3 className={styles.otherTitle}>Other projects</h3>
      </Reveal>

      <div className={styles.otherGrid}>
        {others.map((project, idx) => (
          <Reveal
            key={project.title}
            className={styles.otherCard}
            delay={idx * 50}
          >
            <article onMouseMove={handlePointer}>
              <div className={styles.otherGlow} aria-hidden="true" />
              <header className={styles.otherCardHeader}>
                <p className={styles.cardKicker}>{project.subtitle}</p>
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.cardLink}
                    aria-label={`${project.title} on GitHub`}
                  >
                    <FaGithub />
                  </a>
                ) : null}
              </header>
              <h4 className={styles.otherTitleName}>{project.title}</h4>
              <p className={styles.otherSummary}>{project.summary}</p>
              <div className={styles.techStack}>
                {project.tech.map(({ icon, label }) => (
                  <span key={label} className={styles.techMini}>
                    <span className={styles.techIcon}>{icon}</span>
                    {label}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
