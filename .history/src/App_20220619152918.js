import React from "react";
import "./App.css";
import Body from "./components/Body/Body";
import Sidebar from "./components/Sidebar/Sidebar";

import { Provider } from "react-redux";
import store from "./redux/store/store";

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
