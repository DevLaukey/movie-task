import React from 'react'
import "./Movies.css"
import StarRatings from 'react-star-ratings';

function Movie(props) {
  const url = "https://image.tmdb.org/t/p/original/";
  return (
    <div className="movie">
      <img src={`${url}/${props.movie.backdrop_path}`} alt="" className="movie__pic" />
      <div className="movie__details">
        <h4 className="movie__title">{props.movie.title}</h4>
        <div className="movie__adds">
          <StarRatings
            className="movie__rating"
            rating={props.movie.vote_average/2}
            starRatedColor="blue"
            starDimension='15px'
            numberOfStars={5}
            name="rating"
          />
          <p className="movie__time">
            {props.movie.vote_count}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Movie