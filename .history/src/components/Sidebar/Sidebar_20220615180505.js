import React from "react";
import "./Sidebar.css";
import logo from "../../logo.svg";
import { IoEnterSharp } from "react-icons/io5";
import {SiVisualstudiocode} from "react-icons/si";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <div className="sidebar__left">
          <p className="sidebar__text">MEDIA HD</p>
          <SiVisualstudiocode />
        </div>
        <div className="sidebar__right">
          <IoEnterSharp
            style={{ color: "#acacac", height: "25", width: "30" }}
          />
        </div>
      </div>
      <div className="sidebar__bottom">casdc</div>
    </div>
  );
}

export default Sidebar;
