import React from "react";
import "./intro.css";

const Intro = () => {
  return (
    <section className="page-section intro-section">
      <div className="intro-container content-container">
        <div className="intro-content">
          <h1 className="content-title">Culture and Creative industries</h1>
          <h2 className="content-subtitle">
            Planning and Business Modelling Software
          </h2>
          <p className="content-text">
            This web application is created to support culture and creative
            industries incubators and individual entrepreneurs in their journey
            to build a successful creative enterprise. It combines a general{" "}
            <span>
              activity planning tool (not yet available in this version){" "}
            </span>{" "}
            and the <span>creative canvas</span> model. To learn more about each
            of the tools, please navigate to <span>Learning Area</span>. To
            start working with the software, navigate to{" "}
            <span>Working Area</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Intro;
