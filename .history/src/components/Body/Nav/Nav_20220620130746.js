import React from 'react'
import "./Nav.css"
import { AiOutlineSearch} from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { useDispatch, useSelector } from 'react-redux';

function Nav() {
  const movies = useSelector((state) => state.movies);
  const dispatch = useDispatch();
const [search, setSearch] = useState("");
const movieDetails = axios.get(
  `https://api.themoviedb.org/3/search/movie?api_key=2384938f56f2d5e077d35a9f4274b76f&language=en-US&query=${search}&page=1&include_adult=false`
);

useEffect(() => {
  dispatch(changeMovie([]));

  movieDetails.then((res) => {
    dispatch(changeMovie(res.data.results));
  });
}, []);

  return (
    <div className="nav">
      <div className="nav__search">
        <AiOutlineSearch style={{ color: "white", fontSize: "20" }} />
        <input
          className="nav__search__input"
          type="text"
          placeholder="Search"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
      <div className="nav__icons">
        <FiSettings />
        <img
          src={`https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2019/12/9-Best-Online-Avatars-and-How-to-Make-Your-Own-for-Free-image1-5.png`}
          alt=""
          className="nav__avatar"
        />
      </div>
    </div>
  );
}

export default Nav