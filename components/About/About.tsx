import Reveal from "@/components/Reveal/Reveal";
import styles from "./About.module.css";

type Experience = {
  role: string;
  company: string;
  location: string;
  dates: string;
  bullets: string[];
};

const experiences: Experience[] = [
  {
    role: "Machine Learning Engineer Intern",
    company: "Bilvantis Technologies",
    location: "Remote",
    dates: "May 2025 — Jan 2026",
    bullets: [
      "Led development of an enterprise retrieval-augmented generation platform with a Next.js frontend and FastAPI backend, letting clients upload and query proprietary knowledge bases.",
      "Engineered vector embedding pipelines and semantic search, producing context-aware excerpts that materially reduced manual document review time.",
      "Shipped an AI debugging assistant on Streamlit + Gemini that classified 200+ error patterns and cut mean time to resolution by 40%.",
      "Designed Snowflake warehousing for debug logs and model metrics, and tuned query plans to improve retrieval throughput by ~35%.",
      "Built and deployed eight FastAPI microservices powering ingestion of 1,000+ files per run.",
    ],
  },
];

const skillCategories = [
  {
    title: "Languages",
    skills: ["Java", "Python", "C", "JavaScript", "TypeScript", "SQL", "HTML", "CSS"],
  },
  {
    title: "Frameworks",
    skills: [
      "React",
      "Next.js",
      "Spring Boot",
      "Django",
      "FastAPI",
      "Flask",
      "Streamlit",
      "LangChain",
      "Hibernate",
      "Tailwind CSS",
    ],
  },
  {
    title: "Data & Cloud",
    skills: ["Snowflake", "PostgreSQL", "MySQL", "AWS", "Docker", "Jenkins", "Git"],
  },
  {
    title: "AI / ML",
    skills: [
      "LLMs",
      "RAG",
      "Prompt Engineering",
      "Gemini API",
      "PyTorch",
      "scikit-learn",
      "Pandas",
      "NumPy",
    ],
  },
];

export default function About() {
  return (
    <div className={styles.container}>
      <Reveal as="header" className={styles.heading}>
        <span className={styles.kicker}>01 — About</span>
        <h2 className={styles.title}>
          A short <em>introduction</em>.
        </h2>
      </Reveal>

      <Reveal as="p" className={styles.lede} delay={80}>
        I&apos;m an engineer drawn to the seam between thoughtful product design
        and applied machine learning. I like working on systems where the
        details matter — quiet APIs, well-tuned retrieval, interfaces that feel
        considered. Outside of work I spend time on small game projects and
        long walks around Raleigh.
      </Reveal>

      <div className={styles.grid}>
        <Reveal className={styles.card} delay={100}>
          <p className={styles.cardLabel}>Education</p>
          <p className={styles.cardPrimary}>North Carolina State University</p>
          <p className={styles.cardSecondary}>
            B.S. Computer Science · AI Concentration
          </p>
          <p className={styles.cardMeta}>Graduated May 2026 · GPA 3.83 / 4.0</p>
          <div className={styles.courseList}>
            <p className={styles.subLabel}>Coursework</p>
            <ul>
              <li>Software Engineering</li>
              <li>Data Structures &amp; Algorithms</li>
              <li>Operating Systems</li>
              <li>C and Software Tools</li>
              <li>Discrete Mathematics</li>
              <li>AI Fundamentals</li>
            </ul>
          </div>
        </Reveal>

        <Reveal className={styles.card} delay={180}>
          <p className={styles.cardLabel}>Experience</p>
          {experiences.map((exp) => (
            <div key={exp.role} className={styles.exp}>
              <div className={styles.expHead}>
                <div>
                  <p className={styles.cardPrimary}>{exp.role}</p>
                  <p className={styles.cardSecondary}>
                    {exp.company} · {exp.location}
                  </p>
                </div>
                <span className={styles.expDates}>{exp.dates}</span>
              </div>
              <ul className={styles.bullets}>
                {exp.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </Reveal>
      </div>

      <Reveal className={styles.skillsCard} delay={120}>
        <p className={styles.cardLabel}>Toolkit</p>
        <div className={styles.skillsGrid}>
          {skillCategories.map(({ title, skills }) => (
            <div key={title} className={styles.skillGroup}>
              <p className={styles.subLabel}>{title}</p>
              <div className={styles.tags}>
                {skills.map((s) => (
                  <span key={s} className={styles.tag}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
