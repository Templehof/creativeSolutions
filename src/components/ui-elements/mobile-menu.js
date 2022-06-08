import React from "react";
import { useLocation } from "react-router-dom";
import "./mobile-menu.css";
import Navs from "./Navs";

const MobileMenu = (props) => {
  let location = useLocation().pathname;
  return (
    <React.Fragment>
      {location != "/print" && (
        <aside className="mobile-menu-container" onClick={props.handleClick}>
          <div className="mobile-meny-text-logo-container">
            <h1 className="mobile-menu-text-logo">
              Creative<span>|</span>Solutions
            </h1>
          </div>
          <Navs />
          <div className="mobile-menu-footer-container">
            <p className="mobile-menu-footer">Ivan Riumkin</p>
            <p className="mobile-menu-footer">2022</p>
          </div>
        </aside>
      )}
    </React.Fragment>
  );
};

export default MobileMenu;
