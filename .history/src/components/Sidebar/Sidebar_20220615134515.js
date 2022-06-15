import React from "react";
import "./Sidebar.css";
import logo from "../../logo.svg";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <div className="sidebar__logo">
          <img src={logo} alt="logo" />
            MEDIA HD
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
