import { useState, useEffect } from "react";
import "./App.css";
import SerachIcon from "./search.svg";
import MovieCard from "./MovieCard";

//24b5d36b

const API_URL = "http://www.omdbapi.com?apikey=24b5d36b";
// const movie1 = {
//   Title: "RRR",
//   Year: "2022",
//   imdbID: "tt8178634",
//   Type: "movie",
//   Poster:
//     "https://m.media-amazon.com/images/M/MV5BODUwNDNjYzctODUxNy00ZTA2LWIyYTEtMDc5Y2E5ZjBmNTMzXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
// };
const App = () => {
  const [movies, setmovies] = useState([]);
  const [searchName, setsearchName]= useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL} &s=${title}`);
    const data = await response.json();
    setmovies(data.Search);
  };

  useEffect(() => {
    searchMovies("RRR");
  }, []);

  return (
    <div className="app">
      <h1>Movie Lander</h1>
      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchName}
          onChange={(e) => setsearchName(e.target.value)}
        />

        <img src={SerachIcon} alt="Search" onClick={() => searchMovies(searchName)} />
      </div>
      {movies.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h1>No movies found</h1>
        </div>
      )}
    </div>
  );
};

export default App;
