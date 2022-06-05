import React from "react";
import "./HexCanvas.css"

function HexCanvas() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-0.5 99.5 501 383.2"
      className="hex-canvas"
    >
      <path
        fill="#d8d8d8"
        stroke="#000"
        d="M49.999 100l49.999 25v50l-49.999 25L0 175v-50z"
      ></path>
      <path
        fill="#d8d8d8"
        stroke="#000"
        d="M150 100l49.999 25v50L150 200l-49.999-25v-50z"
      ></path>
      <path
        fill="#d8d8d8"
        stroke="#000"
        d="M100.63 183.93l49.999 25v50l-49.999 25-49.999-25v-50z"
      ></path>
      <path
        fill="#d8d8d8"
        stroke="#000"
        d="M450 100l49.999 25v50L450 200l-49.999-25v-50z"
      ></path>
      <path
        fill="#d8d8d8"
        stroke="#000"
        d="M350 100l49.999 25v50L350 200l-49.999-25v-50z"
      ></path>
      <path
        fill="#d8d8d8"
        stroke="#000"
        d="M399.94 186.8l49.999 25v50l-49.999 25-49.999-25v-50z"
      ></path>
      <path
        fill="#d8d8d8"
        stroke="#000"
        d="M250 218.94l49.999 25v50l-49.999 25-49.999-25v-50z"
      ></path>
      <path
        fill="#d8d8d8"
        stroke="#000"
        d="M199.37 300l49.999 25v50l-49.999 25-49.999-25v-50z"
      ></path>
      <path
        fill="#d8d8d8"
        stroke="#000"
        d="M300.63 300l49.999 25v50l-49.999 25-49.999-25v-50z"
      ></path>
      <path
        fill="#d8d8d8"
        stroke="#000"
        d="M250 382.2l49.999 25v50L250 482.2l-49.999-25v-50z"
      ></path>
    </svg>
  );
}

export default HexCanvas;