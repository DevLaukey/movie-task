import React from "react";
import "./Body.css";

import Nav from "./Nav/Nav";
import {Outlet} from "react-router-dom";


function Body() {
  return (
    <div className="body">
      <Nav />
      <Outlet />
    </div>
  );
}

export default Body;
