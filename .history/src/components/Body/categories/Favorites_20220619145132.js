import React from 'react'
import Movie from '../Movie';

function Favorites() {
  // /trending/all/{time_window}
  return (
    <div className="movies__container">
      <h2 className="movies__title">Discover</h2>
      <div className="movies">
        <Movie />
      </div>
    </div>
  );
}

export default Favorites