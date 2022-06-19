import React from "react";
import "./App.css"
import Body from "./components/Body/Body";
import Sidebar from "./components/Sidebar/Sidebar";
import axios from "axios";
import { useEffect, useState } from "react";
import Discover from "./components/Body/categories/Discover";
import { Outlet, Route, Routes } from "react-router-dom";
import Favorites from "./components/Body/categories/Favorites";
import NewReleases from "./components/Body/categories/NewReleases";
import Upcoming from "./components/Body/categories/Upcoming";

function App() {
  const [movies, setMovies] = useState([]);
  const url = "https://api.themoviedb.org/3/";
  const api = axios.create({ baseURL: url });
  
  const movieDetails = api.get(`/discover/movie?api_key=${process.env.REACT_APP_MOVIEDB_API}`, {
    params: process.env.MOVIEDB_API,
  });

  useEffect(() => {
    movieDetails.then((res) => { 
      console.log(res.data.results);
    });
  }, [movies])
  return (
    <main className="App">
      <div className="App__container">
        <Sidebar />
   
      </div>
    </main>
  );
}

export default App;
