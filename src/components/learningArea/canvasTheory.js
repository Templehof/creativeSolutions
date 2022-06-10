import React from "react";
import "./canvasTheory.css";
import { Fade } from "react-reveal";

const CanvasTheory = () => {
  return (
    <section className="page-section theory-area-section">
      <div className="content-container theory-area-container">
        <div className="theory-area-content">
          <Fade bottom>
            <h1 className="content-title">Theory of the creative canvas</h1>
            <h2 className="content-subtitle">What it is and how to use it</h2>
            <p className="content-text">
              The creative canvas was developed by Carter&Carter (2020). It
              appeared as a response to the shortcomings of the original
              business model canvas in relation to capturing symbolic value
              which is often a crucial part of creative enterprises. This
              reimagined canvas follows the same structure as the original one.
              In the centre of the canvas we have the value proposition
              expressed in three parts: artists identity, cultural products
              and/or services. On the left side we have the three components
              that explain what kind of resources and partners the creator needs
              to employ and what activities the creator needs to perform in
              order to realise the core value proposition. On the right side we
              have the components related to the target audience, and ways the
              creator communicates or delivers the core value proposition to
              that audience. Finally, the bottommost element is a summary of
              costs related to the left side and revenues extracted from the
              right side.
            </p>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default CanvasTheory;
