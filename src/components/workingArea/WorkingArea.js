import React, { useState, useEffect } from "react";
import CanvasTool from "./CanvasTool";
import CanvasForm from "./canvasForm";
import "./working-area.css";
import { Link } from "react-router-dom";

const defaultData = {
  partners: { title: "partners", content: "" },
  activities: { title: "activities", content: "" },
  resources: { title: "resources", content: "" },
  communication: { title: "communication", content: "" },
  audience: { title: "audience", content: "" },
  channels: { title: "channels", content: "" },
  identity: { title: "identity", content: "" },
  products: { title: "products", content: "" },
  services: { title: "services", content: "" },
  "bottom-line": { title: "bottomLine", content: "" },
};

const WorkingArea = () => {
  const [canvasData, setCanvasData] = useState(checkStorage());
  const [formName, setFormName] = useState("partners");

  function checkStorage() {
    if (JSON.parse(localStorage.getItem("canvas"))) {
      return JSON.parse(localStorage.getItem("canvas"));
    } else {
      return defaultData;
    }
  }

  const handleChange = (e) => {
    const name = e.target.name;
    return setCanvasData((prevData) => {
      return {
        ...prevData,
        [name]: { ...prevData[name], content: e.target.value },
      };
    });
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
        className="save-button"
        to="/print"
        target={"_blank"}
        rel="noreferrer noopener"
      >
        Preview
      </Link>
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
