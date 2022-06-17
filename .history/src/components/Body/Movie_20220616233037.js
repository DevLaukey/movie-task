import React from 'react'
import "./Movies.css"
import StarRatings from 'react-star-ratings';

function Movie() {
  const url = "https://image.tmdb.org/t/p/original/";
  const path = "/zGLHX92Gk96O1DJvLil7ObJTbaL.jpg";
  const rating = 4;
  return (
    <div className="movie">
      <img src={`${url}/${path}`} alt="" className="movie__pic" />
      <div className="movie__details">
        <h4 className="movie__title">The Shawshank Redemption</h4>
        <div className="movie__adds">
          <StarRatings
            className="movie__rating"
            rating={rating}
            starRatedColor="blue"
            starDimension='15px'
            numberOfStars={5}
            name="rating"
          />
          <p className="movie__time">
            90 min
          </p>
        </div>
      </div>
    </div>
  );
}

export default Movie