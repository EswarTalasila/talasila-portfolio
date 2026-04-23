import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.hero}>
      <div className={styles.content}>
        <p className={styles.greeting}>Hi, my name is</p>
        <h1 className={styles.name}>Eswar Talasila.</h1>
        <h2 className={styles.tagline}>I build AI-powered applications.</h2>
        <p className={styles.bio}>
          CS senior at NC State (graduating May 2026), concentration in AI.
          Previously a Machine Learning Engineer Intern at Bilvantis Technologies -
          built AI debugging tools, FastAPI microservices, and LangChain pipelines.
        </p>
        <div className={styles.actions}>
          <a
            href={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/Eswar_Talasila_Resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.resumeBtn}
          >
            View Resume ↗
          </a>
          <a href="#contact" className={styles.contactLink}>
            Get in touch →
          </a>
        </div>
        <div className={styles.socials}>
          <a
            href="https://github.com/EswarTalasila"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="GitHub"
          >
            <FaGithub size={21} />
          </a>
          <a
            href="https://www.linkedin.com/in/eswar-talasila-832882262/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="LinkedIn"
          >
            <FaLinkedin size={21} />
          </a>
          <a
            href="mailto:ectalasi@ncsu.edu"
            className={styles.socialLink}
            aria-label="Email"
          >
            <FaEnvelope size={21} />
          </a>
        </div>
      </div>

      <div className={styles.imageWrap}>
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/newIcon.jpg`}
          alt="Eswar Talasila"
          width={300}
          height={300}
          className={styles.photo}
          priority
        />
      </div>
    </div>
  );
}
