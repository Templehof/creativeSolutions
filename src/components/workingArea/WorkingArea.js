import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./working-area.css";

import CanvasTool from "./CanvasTool";
import CanvasForm from "./canvasForm";
import checkStorage from "../utils/storageChecker";

const WorkingArea = () => {
  const [canvasData, setCanvasData] = useState(checkStorage());
  const [formName, setFormName] = useState("partners");

  const handleChange = (e) => {
    const name = e.target.name;
    return setCanvasData((prevData) => {
      return {
        ...prevData,
        [name]: { ...prevData[name], content: e.target.value },
      };
    });
  };

  const clearCanvas = () => {
    localStorage.clear();
    return alert("Canvas content set to default");
  };

  const handleHexClick = (e) => {
    const name = e.target.id;
    return name != "" && setFormName(name);
  };

  useEffect(() => {
    localStorage.setItem("canvas", JSON.stringify(canvasData));
  }, [canvasData]);

  return (
    <section className="page-section working-area-section">
      <Link
        className="pdf-area-button"
        to="/print"
        target={"_blank"}
        rel="noreferrer noopener"
      >
        Preview
      </Link>
      <div className="clear-button" onClick={clearCanvas}>
        Clear all fields{" "}
      </div>
      <div className="content-container working-area-container">
        <CanvasTool handleClick={handleHexClick} />
        <CanvasForm
          name={formName}
          currentValue={canvasData[formName].content}
          handleChange={handleChange}
        />
      </div>
    </section>
  );
};
export default WorkingArea;
