import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Movie from "../Movie";

function NewReleases() {
  const movies = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  const movieDetails = axios.get(
    `https://api.themoviedb.org/3/genre/movie/list?api_key= 2384938f56f2d5e077d35a9f4274b76f&language=en-US`
  );

  useEffect(() => {
    movieDetails.then((res) => {
      dispatch(changeMovie(res.data.results));
    });
  }, []);
  return (
    <div className="movies__container">
      <h2 className="movies__title">|New Releases</h2>

      <div className="movies">
        {movies.map((movie) => {
          return <Movie key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
}

export default NewReleases;
