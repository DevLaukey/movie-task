import React from 'react'
import Movie from './Movie'
import "./Movies.css"
function Movies() {
  return (
    <div className="movies">
      <h4 className="movies__title">
        Discover
      </h4>
          <Movie />
    </div>
  )
}

export default Movies