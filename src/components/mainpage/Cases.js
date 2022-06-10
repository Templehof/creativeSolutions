import React from "react";
import "./cases.css";
import Fade from "react-reveal/Fade";

const Cases = () => {
  return (
    <section className="page-section cases-section">
      <div className="content-container cases-container">
        <div className="cases-content">
          <div className="use-case">
            <Fade bottom>
              <h2 className="content-subtitle">
                Planning a creative enterprise
              </h2>
              <p className="content-text">
                The creative canvas can be used by individual entrepreneurs to
                plan actions aimed at designing and developing their creative
                business. The structured methodology and attention to all
                important areas of creative entrepreneurial activity makes it
                easier to present the business to outside stakeholders and
                enroll help.
              </p>
            </Fade>
          </div>
          <div className="use-case">
            <Fade bottom>
              <h2 className="content-subtitle">
                Assisting creative incubators
              </h2>
              <p className="content-text">
                The creative canvas can be effectively used in the day-to-day
                work of business couches providing support to creative
                entrepreneurs. The full version of this application will allow
                for easy to track planning process and digital access to the
                same documents by multiple parties making it easier to supervise
                your clients from distance without any interruptions in the
                workflow.
              </p>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cases;
