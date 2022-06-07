import React from "react";
import "./pdfCanvas.css";

const PdfCanvas = () => {
  return (
    <section className="page-section pdf-page">
      <button className="pdf-to-print" onClick={() => window.print()}>Print</button>
      <h1 className="content-title">Hello there</h1>
    </section>
  );
};

export default PdfCanvas;
