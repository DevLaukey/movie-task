import React from "react";
import "./Body.css";
import Movies from "./Movies";
import Nav from "./Nav/Nav";
import { Routes, Route} from "react-router-dom";
import Discover from "./categories/Discover";

function Body() {
  return (
    <div className="body">
      <Nav />
      {/* <Discover/> */}
    </div>
  );
}

export default Body;
