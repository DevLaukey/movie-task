import React from "react";
import Movie from "../Movie";

function NewReleases() {
  // https://api.themoviedb.org/3/genre/movie/list?api_key= 2384938f56f2d5e077d35a9f4274b76f&language=en-US
  return (
    <div className="movies__container">
      <h2 className="movies__title">Discover</h2>
      <div className="movies">
        <Movie />
      </div>
    </div>
  );
}

export default NewReleases;
