import React, { useState } from "react";
import "./pdfCanvas.css";

import Card from "./areaCard";
import checkStorage from "../../utils/storageChecker";

const PdfCanvas = () => {
  const [canvasData, setCanvasData] = useState(checkStorage());

  const generateCards = () => {
    return Object.entries(canvasData).map((item) => {
      return (
        <Card title={item[1].title} text={item[1].content} key={item[0]} />
      );
    });
  };

  return (
    <section className="page-section pdf-page">
      <button className="pdf-to-print" onClick={() => window.print()}>
        Print
      </button>
      <div className="pdf-content">{generateCards()}</div>
    </section>
  );
};

export default PdfCanvas;
