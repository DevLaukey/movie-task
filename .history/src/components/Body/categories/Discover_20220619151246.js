import axios from "axios";
import React, { useEffect, useState } from "react";
import Movie from "../Movie";

function Discover() {
  const [movies, setMovies] = useState([]);
  // movie/550?api_key=2384938f56f2d5e077d35a9f4274b76f
  const url = "https://api.themoviedb.org/3/";
  const api = axios.create({ baseURL: url });

  const movieDetails = api.get(
    `/discover/movie?api_key=202384938f56f2d5e077d35a9f4274b76f`
  );

  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/movie/550?api_key=2384938f56f2d5e077d35a9f4274b76f').then((res) => {
      console.log(res.data.results);
    });
  }, []);
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
