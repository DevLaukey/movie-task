import React from "react";
import "./App.css";
import Body from "./components/Body/Body";
import Sidebar from "./components/Sidebar/Sidebar";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {

  return (
    <main className="App">
      <div className="App__container">
        <Sidebar />
        <Body />
      </div>
    </main>
  );
}

export default App;
