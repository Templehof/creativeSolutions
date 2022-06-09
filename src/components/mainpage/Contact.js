import React from "react";
import "./contact.css";
import Fade from "react-reveal/Fade";

const Contact = () => {
  return (
    <section className="page-section contact-section">
      <div className="contact-container">
        <Fade bottom>
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
        </Fade>
      </div>
    </section>
  );
};

export default Contact;
