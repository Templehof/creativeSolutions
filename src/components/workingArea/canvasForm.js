import React from "react";
import "./canvasForm.css"

const CanvasForm = (props) => {

    return (
        <form className="canvas-form">
            <label className="content-title" htmlFor={props.name}> {props.name} </label>
            <textarea name={props.name} id={props.name} rows="12">{props.currentValue}</textarea>
            <button type="submit">Save</button>
        </form>
    )
}
export default CanvasForm;