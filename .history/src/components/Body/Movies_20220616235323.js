import axios from 'axios';
import React from 'react'
import Movie from './Movie'
import "./Movies.css"


function Movies() {
  // const [categories, setCategories] = React.useState([]);
   
  // const url = "https://api.themoviedb.org/3/";
  // const api = axios.create({ baseURL: url });

  // const movieDetails = api.get(
  //   `/discover/movie?api_key=${process.env.REACT_APP_MOVIEDB_API}`,
  //   {
  //     params: process.env.MOVIEDB_API,
  //   }
  // );

  // const chooseCategory = (categories) => { 
  //   switch (categories) {
  //     case 'discover':
  //       setCategories()
  //       break;
  //     case 'new relases':
  //       setCategories()
  //       break;
  //     case 'upcoming':
  //       setCategories()
  //       break;
  //     case 'favorites':
  //       setCategories()
  //       break;
  //     default:
  //       setCategories()
  //   }
  // }
  // React.useEffect(() => { 
  //    movieDetails.then((res) => {
  //      console.log(res.data.results);
  //    });
  // }, [categories]);
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