import React, { useState, useRef } from "react";
import "./Contact.css";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
} from "react-icons/fa";

import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_p7dwmnt",
        "template_pi418su",
        form.current,
        "L1hk3yv0BgrIxGfJ7"
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          alert("Message sent! Thank you for reaching out.");

          // Reset form
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
          setLoading(false);
        },
        (error) => {
          console.error("Failed to send email:", error.text);
          alert(
            "Failed to send message. Please try again or email me directly."
          );
          setLoading(false);
        }
      );
  };

  return (
    <div id="contact" className="contact-section">
      <div className="contact-container">
        <h1 className="section-title">Get In Touch</h1>

        <div className="contact-content">
          <div className="contact-info">
            <h2>Contact Information</h2>
            <p className="contact-description">
              Feel free to reach out if you're looking for a developer, have a
              question, or just want to connect.
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <div className="contact-text">
                  <h3>Email</h3>
                  <a href="mailto:ectalasi@ncsu.edu">ectalasi@ncsu.edu</a>
                </div>
              </div>

              <div className="contact-item">
                <FaLinkedin className="contact-icon" />
                <div className="contact-text">
                  <h3>LinkedIn</h3>
                  <a
                    href="https://www.linkedin.com/in/eswar-talasila-832882262/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    linkedin.com/in/eswar-talasila
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <FaGithub className="contact-icon" />
                <div className="contact-text">
                  <h3>GitHub</h3>
                  <a
                    href="https://github.com/EswarTalasila"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github.com/EswarTalasila
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <div className="contact-text">
                  <h3>Location</h3>
                  <p>Raleigh, North Carolina</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <h2>Send Me a Message</h2>
            <form className="contact-form" ref={form} onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="submit-button"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
