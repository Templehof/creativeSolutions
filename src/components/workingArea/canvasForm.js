import React from "react";
import "./canvasForm.css";
import { Fade } from "react-reveal";

const CanvasForm = (props) => {
  return (
    <form className="canvas-form">
      <Fade right>
        <label className="content-title" htmlFor={props.name}>
          {" "}
          {props.name}{" "}
        </label>
        <textarea
          name={props.name}
          id={props.name}
          rows="12"
          onChange={(e) => {
            props.handleChange(e);
          }}
          value={props.currentValue}
        ></textarea>
      </Fade>
    </form>
  );
};
export default CanvasForm;
