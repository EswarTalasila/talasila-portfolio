"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Header.module.css";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Work" },
  { id: "contact", label: "Contact" },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const navListRef = useRef<HTMLOListElement>(null);
  const [indicator, setIndicator] = useState({ left: 0, width: 0, opacity: 0 });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    const observers: IntersectionObserver[] = [];
    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.35, rootMargin: "-72px 0px -45% 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observers.forEach((o) => o.disconnect());
    };
  }, []);

  useEffect(() => {
    const list = navListRef.current;
    if (!list) return;
    const active = list.querySelector<HTMLAnchorElement>(`a[data-id="${activeSection}"]`);
    if (!active) {
      setIndicator((prev) => ({ ...prev, opacity: 0 }));
      return;
    }
    const listRect = list.getBoundingClientRect();
    const rect = active.getBoundingClientRect();
    setIndicator({
      left: rect.left - listRect.left,
      width: rect.width,
      opacity: 1,
    });
  }, [activeSection]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.inner}>
        <a href="#home" className={styles.logo} aria-label="Home">
          <span className={styles.logoMark}>ET</span>
          <span className={styles.logoDot} aria-hidden="true" />
        </a>
        <nav aria-label="Primary">
          <ol ref={navListRef} className={styles.navList}>
            <span
              className={styles.indicator}
              style={{
                transform: `translateX(${indicator.left}px)`,
                width: indicator.width,
                opacity: indicator.opacity,
              }}
              aria-hidden="true"
            />
            {navItems.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  data-id={id}
                  className={`${styles.navLink} ${activeSection === id ? styles.active : ""}`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </header>
  );
}
