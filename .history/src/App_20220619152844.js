import React from "react";
import "./App.css";
import Body from "./components/Body/Body";
import Sidebar from "./components/Sidebar/Sidebar";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {

  return (
    <Provider store={store}>

    <main className="App">
      <div className="App__container">
        <Sidebar />
        <Body />
      </div>
    </main>
    </Provider>
  );
}

export default App;
