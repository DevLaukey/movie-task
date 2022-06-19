import axios from "axios";
import React, { useEffect, useState } from "react";
import Movie from "../Movie";

function Discover() {
    const [movies, setMovies] = useState([]);
    const url = "https://api.themoviedb.org/3/";
    const api = axios.create({ baseURL: url });
    const key = "202384938f56f2d5e077d35a9f4274b76f";
    const movieDetails = api.get(`/discover/movie?api_key=${key}`);

    useEffect(() => {
      movieDetails.then((res) => {
        console.log(res.data.results);
      });
    }, [movies]);
  return (
    <div className="movies__container">
      <h2 className="movies__title">Discover</h2>
      <div className="movies">
        <Movie />
      </div>
    </div>
  );
}

export default Discover;
