import React from 'react'
import "./Movies.css"
import StarRatings from 'react-star-ratings';

function Movie() {
  const url = ''
  const rating = 4;
  return (
    <div className="movie">
      <img src={url} alt="" className="movie__pic" />
      <div className="movie__details">
        <h4 className="movie__title">The Shawshank Redemption</h4>
        <div className="movie__adds">
          <StarRatings
            rating={rating}
            starRatedColor="blue"
            
            numberOfStars={5}
            name="rating"
          />
        </div>
      </div>
    </div>
  );
}

export default Movie