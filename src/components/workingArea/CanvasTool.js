import React from "react";
import "./canvasTool.css"

import HexCanvas from "../../images/HexCanvas";

const CanvasTool = (props) => {
  return (
    <div className="canvas-container" onClick={props.handleClick} >
      <HexCanvas />
    </div>
  );
};

export default CanvasTool;
