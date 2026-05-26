"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from "react-icons/fa";
import Reveal from "@/components/Reveal/Reveal";
import styles from "./Contact.module.css";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const contactLinks = [
  {
    icon: <FaEnvelope />,
    label: "Email",
    value: "eswarchandrat@gmail.com",
    href: "mailto:eswarchandrat@gmail.com",
  },
  {
    icon: <FaLinkedin />,
    label: "LinkedIn",
    value: "linkedin.com/in/eswartalasila",
    href: "https://www.linkedin.com/in/eswartalasila/",
    external: true,
  },
  {
    icon: <FaGithub />,
    label: "GitHub",
    value: "github.com/EswarTalasila",
    href: "https://github.com/EswarTalasila",
    external: true,
  },
  {
    icon: <FaMapMarkerAlt />,
    label: "Based in",
    value: "Raleigh, North Carolina",
    href: null,
  },
];

const emptyForm: FormData = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);
  const [formData, setFormData] = useState<FormData>(emptyForm);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const showToast = (message: string, type: "success" | "error", duration: number) => {
    setToast({ message, type });
    setTimeout(() => setToast(null), duration);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;
    setLoading(true);

    emailjs
      .sendForm("service_ndve5ip", "template_oizgtu3", form.current, {
        publicKey: "1X_Hf94l2AxX9hsBc",
      })
      .then(
        () => {
          showToast("Message sent. Thanks for reaching out.", "success", 5000);
          setFormData(emptyForm);
          setLoading(false);
        },
        () => {
          showToast(
            "Send failed. Reach me directly at eswarchandrat@gmail.com.",
            "error",
            6000
          );
          setLoading(false);
        }
      );
  };

  return (
    <div className={styles.container}>
      {toast && (
        <div className={`${styles.toast} ${styles[toast.type]}`} role="status">
          {toast.message}
        </div>
      )}

      <Reveal as="header" className={styles.heading}>
        <h2 className={styles.title}>
          Let&apos;s <em>talk</em>.
        </h2>
        <p className={styles.lede}>
          Whether you have a role in mind, want to collaborate, or just want to
          say hi, I&apos;d love to hear from you. The fastest way is the form
          below or a direct email.
        </p>
      </Reveal>

      <div className={styles.layout}>
        <Reveal className={styles.infoCol} delay={80}>
          <div className={styles.links}>
            {contactLinks.map(({ icon, label, value, href, external }) => (
              <div key={label} className={styles.linkItem}>
                <span className={styles.linkIcon}>{icon}</span>
                <div className={styles.linkText}>
                  <p className={styles.linkLabel}>{label}</p>
                  {href ? (
                    <a
                      href={href}
                      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className={styles.linkValue}
                    >
                      {value}
                    </a>
                  ) : (
                    <p className={styles.linkValuePlain}>{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className={styles.formWrap} delay={140}>
          <form className={styles.form} ref={form} onSubmit={handleSubmit}>
            <div className={styles.formRow}>
              <label className={styles.field}>
                <span>Name</span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </label>
              <label className={styles.field}>
                <span>Email</span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                />
              </label>
            </div>

            <label className={styles.field}>
              <span>Subject</span>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What&apos;s this about?"
                required
              />
            </label>

            <label className={styles.field}>
              <span>Message</span>
              <textarea
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                placeholder="A short note is fine — I&apos;ll get back to you."
                required
              />
            </label>

            <div className={styles.formFooter}>
              <button type="submit" className={styles.submitBtn} disabled={loading}>
                {loading ? "Sending…" : "Send message"}
                {!loading && (
                  <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
                    <path
                      d="M3.5 10.5L10.5 3.5M10.5 3.5H5M10.5 3.5V9"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
              <p className={styles.formHint}>
                Or just email me — <a href="mailto:eswarchandrat@gmail.com">eswarchandrat@gmail.com</a>.
              </p>
            </div>
          </form>
        </Reveal>
      </div>

      <Reveal as="footer" className={styles.footer} delay={160}>
        <p>© {new Date().getFullYear()} Eswar Talasila.</p>
        <p className={styles.builtWith}>Built with Next.js and a lot of revisions.</p>
      </Reveal>
    </div>
  );
}
