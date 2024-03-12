import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Emoji from "../components/Emojis";
import Form from "../components/Form";
import useCounter from "../hooks/useCounter";

const movies = [
  { name: "Forrest Gump", emoji: "🏃🍫🍤" },
  { name: "The Matrix", emoji: "🕶️💊👽" },
  { name: "Titanic", emoji: "🚢❄️💔" },
  { name: "Jurassic Park", emoji: "🦖🌴🚙" },
  { name: "The Lion King", emoji: "🦁👑🌅" },
  { name: "Star Wars", emoji: "⚔️🚀🌌" },
  { name: "The Avengers", emoji: "🦸‍♂️🦸‍♀️💥" },
  { name: "Harry Potter", emoji: "⚡🧙‍♂️🔮" },
  { name: "The Terminator", emoji: "🤖🔫🕶️" },
  { name: "Indiana Jones", emoji: "🤠🔍💎" },
  { name: "Back to the Future", emoji: "⏰🚗💥" },
  { name: "The Shawshank Redemption", emoji: "🔒🔑💰" },
  { name: "The Godfather", emoji: "🍕🤵🔫" },
  { name: "The Dark Knight", emoji: "🦇♞👨‍🦯" },
  { name: "Pulp Fiction", emoji: "🍔🔫🕶️" },
  { name: "Schindler's List", emoji: "📜🚂🔴" },
  { name: "The Lord of the Rings: The Return of the King", emoji: "🧝‍♂️🧙‍♂️🗡️" },
  { name: "The Silence of the Lambs", emoji: "🔇🐑🍖" },
  { name: "Fight Club", emoji: "👊💼🚽" },
  { name: "Inception", emoji: "🌀👩‍🚀🎩" },
];

function MovieViewer() {
  const [currentMovie, setCurrentMovie] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  const { points, lives, increasePoints, decreaseLives, resetGame } =
    useCounter();

  const selectRandomMovie = () => {
    const randomIndex = Math.floor(Math.random() * movies.length);
    const selectedMovie = movies[randomIndex];
    setCurrentMovie(selectedMovie);
    // Eliminar la película seleccionada del array, para que no se repita
    movies.splice(randomIndex, 1);
  };

  useEffect(() => {
    selectRandomMovie();
  }, []);

  const displayNextMovie = () => {
    if (inputValue.toLowerCase() === currentMovie.name.toLowerCase()) {
      increasePoints();
      setError("");
      setInputValue("");
      if (movies.length > 0) {
        selectRandomMovie();
      } else {
        alert("¡Felicidades! Has adivinado todas las películas");
      }
    } else {
      setError("Nombre de película incorrecto.");
      decreaseLives();
      if (lives === 1) {
        resetGame();
        alert("Game Over");
        selectRandomMovie();
        setInputValue("");
        setError("");
      }
    }
  };

  return (
    <div>
      <Header points={points} lives={lives} />
      <div className="movie-container">
        <h1 className="title">Guess the movie</h1>
        {currentMovie ? (
          <div>
            <Emoji emoji={currentMovie.emoji} />
            <div className="form">
              <Form
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onClick={displayNextMovie}
                content="Send"
              />
            </div>
            {error && <p style={{ color: "red" }}>{error}</p>}
          </div>
        ) : (
          <p>No hay más películas.</p>
        )}
      </div>
    </div>
  );
}

export default MovieViewer;
