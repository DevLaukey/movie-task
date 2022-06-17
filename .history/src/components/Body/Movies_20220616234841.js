import React from 'react'
import Movie from './Movie'
import "./Movies.css"


function Movies() {
  const [categories, setCategories] = React.useState([]);
  
  const chooseCategory = (categories) => { 
    switch (categories) {
      case 'discover':
        setCategories()
        break;
      case 'new relases':
        setCategories()
        break;
      case 'upcoming':
        setCategories()
        break;
      case 'favorites':
        setCategories()
        break;
      default:
        setCategories()
    }
  }
  React.useEffect(() => { 
   
  });
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