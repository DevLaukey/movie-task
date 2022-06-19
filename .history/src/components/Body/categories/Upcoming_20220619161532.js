import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changeMovie } from '../../../redux/slices/movieSlice';
import Movie from '../Movie';

function Upcoming() {
  // /genre/movie/ list;
    const movies = useSelector((state) => state.movies);
    const dispatch = useDispatch();
    const movieDetails = axios.get(
      `https://api.themoviedb.org/3/genre/movie/upcoming?api_key=2384938f56f2d5e077d35a9f4274b76f&language=en-US`
    );

    useEffect(() => {
      movieDetails.then((res) => {
        dispatch(changeMovie(res.data.results));
      });
    }, []);

  return (
    <div className="movies__container">
      <h2 className="movies__title">Upcoming Movies</h2>

      <div className="movies">
        {movies.map((movie) => {
          return <Movie key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
}

export default Upcoming