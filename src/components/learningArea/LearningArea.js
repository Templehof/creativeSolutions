import React from "react";
import "./learningArea.css";
import Fade from "react-reveal/Fade";

import CanvasTheory from "./canvasTheory";

const LearningArea = () => {
  return (
    <React.Fragment>
      <section className="page-section learning-area-section">
        <div className="content-container learning-area-container">
          <div className="learning-area-content">
            <Fade bottom>
              <h1 className="content-title">
                Welcome to the creative tools learning area
              </h1>
              <h2 className="content-subtitle">
                Below you can find a theoretical guidance on how to use the
                creative canvas
              </h2>
              <p className="content-text">
                This version of this web-site contains only the creative canvas.
                It is a slightly adapted version developed by Michelle Carter,
                and Chris Carter in their 2020{" "}
                <a
                  href="https://www.emerald.com/insight/content/doi/10.1108/SEJ-03-2019-0018/full/html"
                  target={"_blank"}
                  rel="noreferrer noopener"
                >
                  article
                </a>
                . It draws on the original Business Model Canvas by Alexander
                Osterwalder but takes into account the peculiarities of culture
                and creative industries. In the next update We are going to add
                another tool for creative industries focused on planning.
              </p>
            </Fade>
          </div>
        </div>
      </section>
      <CanvasTheory />
    </React.Fragment>
  );
};
export default LearningArea;
