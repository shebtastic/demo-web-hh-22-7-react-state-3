import { useState } from "react";
import "./styles.css";
import Movie from "./components/Movie";
import Form from "./components/Form";

const initialMovieData = [
  {
    id: "28djdh72",
    name: "The Incredible Hulk",
    isLiked: false,
  },
  {
    id: "dknseu2",
    name: "Spiderman 1-25",
    isLiked: false,
  },
  {
    id: "dkwi02ksk",
    name: "Lord of the Rings",
    isLiked: true,
  },
];

export default function App() {
  const [movies, setMovies] = useState(initialMovieData);

  function addMovie(movie) {
    movies.push
    // bevorzugter weg
    setMovies((oldMovies) => [
      ...oldMovies,
      {
        ...movie,
        id: crypto.randomUUID()
      }
    ])

    // kleinschrittigere alternative
    //     setMovies((oldMovies) => {
    //       let newMovieArray = [...oldMovies];

    //       const movieWithId = {
    //         ...movie,
    //         id: crypto.randomUUID(),
    //       };

    //       newMovieArray.push(movieWithId);

    //       return newMovieArray;
    //     });
  }

  function deleteMovie(id) {
    console.log(id);
    setMovies((oldMovies) => oldMovies.filter((movie) => movie.id !== id));
  }

  function toggleMovieLike(id) {
    setMovies((oldMovies) => 
      oldMovies.map((movie) => {
        if(movie.id !== id) {
          return movie
        } else {
          return {
            ...movie,
            isLiked: !movie.isLiked
          }
        }
      })
    );
  }
  
  return (
    <div className="app">
      <h1>Favorite Movies</h1>
      <ul className="list">
        {movies.map((movie) => (
          <li key={movie.id}>
            <Movie
              name={movie.name}
              isLiked={movie.isLiked}
              onDelete={() => deleteMovie(movie.id)}
              onToggleLike={() => toggleMovieLike(movie.id)}
            />
          </li>
        ))}
      </ul>
      <Form onSubmit={addMovie} />
    </div>
  );
}
