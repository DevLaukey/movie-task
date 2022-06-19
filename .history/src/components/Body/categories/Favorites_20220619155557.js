import axios from "axios";
import React from "react";
import Movie from "../Movie";

function Favorites() {
  // /
  const movies = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  const movieDetails = axios.get(
    `https://api.themoviedb.org/3/trending/all/week?api_key=2384938f56f2d5e077d35a9f4274b76f`
  );

  useEffect(() => {
    movieDetails.then((res) => {
      dispatch(changeMovie(res.data.results));
    });
  }, []);
  return (
    <div className="movies__container">
      <h2 className="movies__title">Discover</h2>
      <div className="movies">
        <Movie />
      </div>
    </div>
  );
}

export default Favorites;
