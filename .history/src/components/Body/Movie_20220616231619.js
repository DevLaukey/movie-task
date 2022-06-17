import React from 'react'
import "./Movies.css"
function Movie() {
  const url = ''
  return (
    <div className="movie">
      <img src={url} alt="" className="movie__pic" />
      <div className="movie__details">
        <h4 className="movie__title">
          The Shawshank Redemption
        </h4>
      </div>
    </div>
  )
}

export default Movie