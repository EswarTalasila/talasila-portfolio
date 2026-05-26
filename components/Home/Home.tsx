import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Reveal from "@/components/Reveal/Reveal";
import styles from "./Home.module.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function Home() {
  return (
    <div className={styles.hero}>
      <div className={styles.content}>
        <Reveal className={styles.eyebrowWrap} delay={0}>
          <span className={styles.eyebrowDot} aria-hidden="true" />
          <span className={styles.eyebrow}>Available for new roles</span>
        </Reveal>

        <Reveal as="h1" className={styles.name} delay={80}>
          Eswar <em className={styles.nameAccent}>Talasila</em>
        </Reveal>

        <Reveal as="p" className={styles.tagline} delay={160}>
          Software &amp; machine learning engineer building thoughtful,
          production-grade AI systems.
        </Reveal>

        <Reveal as="p" className={styles.bio} delay={240}>
          Recently graduated from NC State with a B.S. in Computer Science,
          concentration in AI. Most recently a Machine Learning Engineer at
          Bilvantis Technologies, where I shipped a retrieval-augmented
          knowledge platform, a Gemini-powered debugging assistant, and the
          FastAPI services behind them.
        </Reveal>

        <Reveal className={styles.actions} delay={320}>
          <a
            href={`${basePath}/Eswar_Talasila_Resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.primaryBtn}
          >
            <span>View Resume</span>
            <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
              <path
                d="M3.5 10.5L10.5 3.5M10.5 3.5H5M10.5 3.5V9"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a href="#contact" className={styles.ghostBtn}>
            Get in touch
          </a>
        </Reveal>

        <Reveal className={styles.socials} delay={400}>
          <a
            href="https://github.com/EswarTalasila"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="GitHub"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/eswartalasila/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="LinkedIn"
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href="mailto:eswarchandrat@gmail.com"
            className={styles.socialLink}
            aria-label="Email"
          >
            <FaEnvelope size={18} />
          </a>
        </Reveal>
      </div>

      <Reveal className={styles.portrait} delay={120}>
        <div className={styles.portraitFrame}>
          <Image
            src={`${basePath}/portrait.jpg`}
            alt="Portrait of Eswar Talasila"
            width={560}
            height={552}
            className={styles.photo}
            sizes="(max-width: 900px) 220px, 300px"
            priority
          />
          <div className={styles.portraitGlow} aria-hidden="true" />
        </div>
      </Reveal>
    </div>
  );
}
