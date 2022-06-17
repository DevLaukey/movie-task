import React from 'react'
import Movie from './Movie'
import "./Movies.css"
function Movies() {
  return (
    <div className="movies">
      <h2 className="movies__title">Discover</h2>
      <Movie />
      <Movie />
      <Movie />
      <Movie />
    </div>
  );
}

export default Movies