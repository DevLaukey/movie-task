import React from "react";
import "./Body.css";
import Movies from "./Movies";
import Nav from "./Nav/Nav";
import { Routes, Route, Outlet} from "react-router-dom";
import Discover from "./categories/Discover";

function Body() {
  return (
    <div className="body">
      <Nav />
      <Outlet />
      {/* <Discover/> */}
    </div>
  );
}

export default Body;
