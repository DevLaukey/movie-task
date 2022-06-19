import axios from "axios";
import React, { useEffect, useState } from "react";
import Movie from "../Movie";
import { useSelector, useDispatch } from "react-redux";


function Discover() {
   const movies = useSelector((state) => state.movies);
   const dispatch = useDispatch();
  // movie/550?api_key=2384938f56f2d5e077d35a9f4274b76f
  const url = "https://api.themoviedb.org/3/";
  const api = axios.create({ baseURL: url });

  const movieDetails = api.get(
    `/discover/movie?api_key=2384938f56f2d5e077d35a9f4274b76f`
  );

  useEffect(() => {
    movieDetails.then((res) => {
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
