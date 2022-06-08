import React from "react";
import "./areaCard.css";

const Card = (props) => {
  return (
    <div className="card-body">
      <h1 className="card-title"> {props.title} </h1>
      <p className="card-text"> {props.text} </p>
    </div>
  );
};

export default Card;
