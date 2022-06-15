import React from "react";
import "./Sidebar.css";
import logo from "../../logo.svg";
import { IoEnterSharp } from "react-icons/io5";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <div className="sidebar__left">
          <img className="sidebar__logo" src={logo} alt="logo" />
          <p className="sidebar__text">MEDIA HD</p>
        </div>
        <div className="sidebar__right">
          <IoEnterSharp
            style={{ color: "#acacac", height: "25", width: "30" }}
          />{" "}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
