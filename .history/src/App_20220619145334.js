import React from "react";
import "./App.css";
import Body from "./components/Body/Body";
import Sidebar from "./components/Sidebar/Sidebar";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [movies, setMovies] = useState([]);
  const url = "https://api.themoviedb.org/3/";
  const api = axios.create({ baseURL: url });

  const movieDetails = api.get(
    `/discover/movie?api_key=${key}`
  );

  useEffect(() => {
    movieDetails.then((res) => {
      console.log(res.data.results);
    });
  }, [movies]);
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
