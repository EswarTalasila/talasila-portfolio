import { FaUniversity, FaBriefcase, FaCode } from "react-icons/fa";
import styles from "./About.module.css";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Java", "Python", "C", "JavaScript", "SQL", "HTML", "CSS", "YAML"],
  },
  {
    title: "Frameworks & Libraries",
    skills: ["React", "Spring Boot", "FastAPI", "Flask", "Streamlit", "LangChain", "Hibernate", "Tailwind CSS", "NodeJS", "Pandas", "NumPy"],
  },
  {
    title: "Tools & Cloud",
    skills: ["Git", "Docker", "AWS", "Snowflake", "MySQL", "Postman", "Jenkins", "VS Code"],
  },
  {
    title: "AI / ML",
    skills: ["Prompt Engineering", "Gemini API", "Large Language Models", "SciKit-Learn", "Matplotlib", "SciPy"],
  },
];

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h2 className={styles.title}>About</h2>
      </div>

      <div className={styles.topGrid}>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <FaUniversity className={styles.cardIcon} />
            <h3>Education</h3>
          </div>
          <p className={styles.school}>North Carolina State University</p>
          <p className={styles.degree}>B.S. Computer Science - AI Concentration</p>
          <p className={styles.meta}>Expected May 2026 · GPA 3.9 / 4.0</p>
          <div className={styles.coursework}>
            <p className={styles.label}>Relevant Coursework</p>
            <ul>
              <li>Software Engineering</li>
              <li>Data Structures &amp; Algorithms</li>
              <li>Operating Systems</li>
              <li>C and Software Tools</li>
              <li>Software Dev Fundamentals</li>
              <li>Discrete Mathematics</li>
            </ul>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <FaBriefcase className={styles.cardIcon} />
            <h3>Experience</h3>
          </div>
          <div className={styles.expHeader}>
            <div>
              <p className={styles.role}>Machine Learning Engineer Intern</p>
              <p className={styles.company}>Bilvantis Technologies Inc</p>
            </div>
            <span className={styles.dates}>May 2025 – Jan 2026</span>
          </div>
          <ul className={styles.bullets}>
            <li>Built FastAPI microservices with 8 REST endpoints at sub-200ms response times</li>
            <li>Developed an AI debugging assistant using Streamlit and Gemini 1.5 Flash</li>
            <li>Engineered LangChain prompt templates to streamline defect diagnosis</li>
            <li>Generated fix reports for 200+ error patterns, cutting resolution time by 40%</li>
            <li>Designed ML pipeline processing 1,000+ files per run with parallel execution</li>
            <li>Leveraged Snowflake for warehousing debugging logs and model performance metrics</li>
          </ul>
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <FaCode className={styles.cardIcon} />
          <h3>Technical Skills</h3>
        </div>
        <div className={styles.skillsGrid}>
          {skillCategories.map(({ title, skills }) => (
            <div key={title} className={styles.skillGroup}>
              <p className={styles.label}>{title}</p>
              <div className={styles.tags}>
                {skills.map((s) => (
                  <span key={s} className={styles.tag}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
