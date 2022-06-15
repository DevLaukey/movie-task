import "./App.css"
import Body from "./components/Body/Body";
import Sidebar from "./components/Sidebar/Sidebar";
import axios from "axios";
import { useEffect } from "react";

function App() {
  const url = "https://api.themoviedb.org/3/";
  const api = axios.create({ baseURL: url });
  
  const movieDetails = api.get(
    `/movie-discover`,
    {
      params: process.env.MOVIEDB_API,
    }
  );

  useEffect(() => {
    movieDetails.then((res) => { 
      console.log(res.data);
    });
  }, [])
  return (
    <main className="App">
      <div className="App__container">
        <Sidebar />
        <Body />
      </div>
    </main>
  );
}

export default App;
