import React from "react";
import "./Sidebar.css";
import { IoEnterSharp } from "react-icons/io5";
import { SiVisualstudiocode } from "react-icons/si";

import Links from "./Links";


function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <div className="sidebar__left">
          <SiVisualstudiocode className="sidebar__logo" />
          <p className="sidebar__text">MEDIA HD</p>
        </div>
        <div className="sidebar__right">
          <IoEnterSharp
            style={{ color: "#acacac", height: "25", width: "30" }}
          />
        </div>
      </div>
      <div className="sidebar__bottom">
       <Links />
        <section className="sidebar__genre">
          <p className="sidebar__genre-bold-text">Genre</p>
          <p className="sidebar__genre-text">Action</p>
          <p className="sidebar__genre-text">Documentary</p>
          <p className="sidebar__genre-text">Comedy</p>
          <p className="sidebar__genre-text">Horror</p>
        </section>
        <section className="sidebar__downloads">
          <p className="sidebar__downloads-bold-text">Downloads</p>
          <img src="" alt="download" />
          <p className="sidebar__downloads-text">x</p>
        </section>
      </div>
    </div>
  );
}

export default Sidebar;
