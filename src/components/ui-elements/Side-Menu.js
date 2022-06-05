import React from "react";
import "./side-menu.css";

import Navs from "./Navs";

const SideMenu = () => {
  return (
    <aside className="side-menu-container">
      <div className="side-meny-text-logo-container">
        <h1 className="side-menu-text-logo">
          Creative<span>|</span>Solutions
        </h1>
      </div>
      <Navs />
      <div className="side-menu-footer-container">
        <p className="side-menu-footer">Ivan Riumkin</p>
        <p className="side-menu-footer">2022</p>
      </div>
    </aside>
  );
};

export default SideMenu;
