import React from 'react'
import Movie from './Movie'
import "./Movies.css"


function Movies() {
  const [categories, setCategories] = React.useState([]);
  
  React.useEffect(() => { });
  return (
    <div className="movies__container">
      <h2 className="movies__title">Discover</h2>
      <div className="movies">
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
      </div>
    </div>
  );
}

export default Movies