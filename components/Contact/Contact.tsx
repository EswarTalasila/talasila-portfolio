"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from "react-icons/fa";
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
    value: "ectalasi@ncsu.edu",
    href: "mailto:ectalasi@ncsu.edu",
  },
  {
    icon: <FaLinkedin />,
    label: "LinkedIn",
    value: "linkedin.com/in/eswar-talasila",
    href: "https://www.linkedin.com/in/eswar-talasila-832882262/",
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
    label: "Location",
    value: "Raleigh, North Carolina",
    href: null,
  },
];

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;
    setLoading(true);

    emailjs
      .sendForm("service_p7dwmnt", "template_pi418su", form.current, "L1hk3yv0BgrIxGfJ7")
      .then(
        () => {
          alert("Message sent — thanks for reaching out!");
          setFormData({ name: "", email: "", subject: "", message: "" });
          setLoading(false);
        },
        () => {
          alert("Failed to send. Please email me directly at ectalasi@ncsu.edu");
          setLoading(false);
        }
      );
  };

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h2 className={styles.title}>Get in touch</h2>
      </div>

      <div className={styles.layout}>
        <div className={styles.infoCol}>
          <p className={styles.infoText}>
            Whether you have a project in mind, a question, or just want to
            connect - my inbox is always open.
          </p>
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
        </div>

        <form className={styles.form} ref={form} onSubmit={handleSubmit}>
          <div className={styles.formRow}>
            <div className={styles.field}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
              />
            </div>
          </div>

          <div className={styles.field}>
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="What's this about?"
              required
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message..."
              required
            />
          </div>

          <button type="submit" className={styles.submitBtn} disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
}
