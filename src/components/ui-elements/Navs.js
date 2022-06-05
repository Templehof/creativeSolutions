import React from "react";
import { Link } from "react-router-dom";

import "./navs.css";

const Navs = () => {
  return (
    <ul className="nav-links-container">
      <li className="nav-item">
        <Link className="nav-link" to="/">
          Main
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/working">
          Working Area
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/learning">
          Learning Area
        </Link>
      </li>
    </ul>
  );
};

export default Navs;
