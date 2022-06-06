import React from "react";
import "./learningArea.css";

const LearningArea = () => {
  return (
    <section className="page-section learning-area-section">
      <div className="content-container learning-area-container">
        <div className="learning-area-content">
          <h1 className="content-title">
            Welcome to the creative tools learning area
          </h1>
          <h2 className="content-subtitle">
            Below you can find a theoretical guidance on how to use our tool bundle
          </h2>
          <p className="content-text">
            Our tool bundle cosists of two pieces. The first one is the planning
            for value creation model. It was created by Ivan Riumkin, Maria
            Bengtsson and Herman Stål at Umeå University. Its goal is to help
            you plan and reflect on activities you perform and what values they
            create for you. Apart from economic value it takes into account
            other types of values that are especially important for creative
            professionals. These values are Social, Cultural, And Symbolic. The
            second piece is the Creative bBusiness Model Canvas. It is a
            slightly adapted version developed by Michelle Carter, and Chris
            Carter in their 2020 article. It draws on the original Business
            Model Canvas by Alexander Osterwalder but takes into account the
            peculiarities of culture and creative industries.
          </p>
        </div>
      </div>
    </section>
  );
};
export default LearningArea;
