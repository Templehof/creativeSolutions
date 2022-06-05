import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <section className="page-section contact-section">
      <div className="contact-container">
        <h2 className="content-subtitle contact-subtitle">Contact Us</h2>
        <p className="content-text contact-text">
          If you have any questions or collaboration offers please, write to{" "}
          <span>ivan.riumkin@protonmail.com</span> or reach me on{" "}
          <a
            href="https://www.linkedin.com/in/ivan-riumkin-575995b9/"
            target="_blank"
            rel="noreferrer noopener"
          >
            LinkedIn
          </a>
          .
        </p>
      </div>
    </section>
  );
};

export default Contact;
