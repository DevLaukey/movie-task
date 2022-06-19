import React from "react";
import "./Body.css";
import Movies from "./Movies";
import Nav from "./Nav/Nav";
import { Routes, Route} from "react-router-dom";

function Body() {
  return (
    <div className="body">
      <Nav />
      <Routes>
        <Route path="/" element={ Discover} />
      </Routes>



      <Movies />
    </div>
  );
}

export default Body;
