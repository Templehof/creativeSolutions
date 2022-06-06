import React, { useState, useEffect } from "react";
import CanvasTool from "./CanvasTool";
import HexCanvas from "../../images/HexCanvas";
import CanvasForm from "./canvasForm";
import "./working-area.css";

const DummyData = {
  title: "Sample Canvas",
  partners: "Incubator",
  activities: "",
  resources: "",
  communication: "",
  audience: "",
  channels: "",
  identity: "",
  products: "",
  services: "",
  bottomLine: "",
};

const WorkingArea = () => {
  const [canvasData, setCanvasData] = useState({});
  const [currentTextArea, setCurrentTextArea] = useState(canvasData.partners)

  const openTextArea = (e) => {
    return <CanvasForm  />
  }

  
  useEffect(()=>{
    setCanvasData({...DummyData})
  }, [])

  return (
    <section className="page-section working-area-section">
      <div className="content-container working-area-container">
        <HexCanvas />
        <CanvasForm name={"Partners"} currentValue={currentTextArea} />
      </div>
    </section>
  );
};
export default WorkingArea;
