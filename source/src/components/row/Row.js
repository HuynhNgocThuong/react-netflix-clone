import { firebaseDatabase } from "../../firebase/firebase.js";
import { useEffect, useState } from "react";
function Row(props) {
  const { title, movieType } = props;
  const [movies, setMovies] = useState([]);
  const leafRoot = "movies";

  useEffect(() => {
    fetchMovies(movieType);
  }, []);

  const fetchMovies = (movieType) => {
    const movieRef = firebaseDatabase.ref(`${leafRoot}/${movieType}`);
    movieRef.on("value", (snapshot) => {
      const movies = snapshot.val();
      if (movies && movies.length !== 0) {
        // update "movies" state after getting movies from Firebase.
        setMovies(() => movies);
      }
    });
  };
  return (
    <div class="row">
      <h2>{title}</h2>
      <div class="row__posters">
        {movies.map((movie) => (
          <img
            className=" row__poster row__posterLarge"
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt={movie.original_title}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
