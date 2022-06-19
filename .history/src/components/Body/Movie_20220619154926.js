import React from 'react'
import "./Movies.css"
import StarRatings from 'react-star-ratings';

function Movie(props) {
  const url = "https://image.tmdb.org/t/p/original/";
  console.log(props.movie)
  const path = "/zGLHX92Gk96O1DJvLil7ObJTbaL.jpg";
  const rating = 4;
  return (
    <div className="movie">
      <img src={`${url}/${backdrop_path}`} alt="" className="movie__pic" />
      <div className="movie__details">
        <h4 className="movie__title">{ title}</h4>
        <div className="movie__adds">
          <StarRatings
            className="movie__rating"
            rating={vote_average}
            starRatedColor="blue"
            starDimension='15px'
            numberOfStars={5}
            name="rating"
          />
          <p className="movie__time">
            {vote_count}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Movie