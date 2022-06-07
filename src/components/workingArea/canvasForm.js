import React from "react";
import "./canvasForm.css"

const CanvasForm = (props) => {

    return (
        <form className="canvas-form">
            <label className="content-title" htmlFor={props.name}> {props.name} </label>
            <textarea name={props.name} id={props.name} rows="12" onChange={(e)=>{props.handleChange(e)}} value={props.currentValue}></textarea>
        </form>
    )
}
export default CanvasForm;