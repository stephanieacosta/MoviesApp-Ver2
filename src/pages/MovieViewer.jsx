import React, { useState } from "react";
import Header from "../components/Header";
import Emoji from "../components/Emojis";
import Form from "../components/Form";

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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const [lives, setLives] = useState(3);
  const [points, setPoints] = useState(0);

  const displayNextMovie = () => {
    if (currentIndex < movies.length) {
      if (
        inputValue.toLowerCase() === movies[currentIndex].name.toLowerCase()
      ) {
        setCurrentIndex(currentIndex + 1);
        setError("");
        setInputValue("");
        setPoints(points + 1);
      } else {
        setError("Nombre de película incorrecto.");
        setLives(lives - 1);
        if (lives === 1) {
          setPoints(0);
          alert("Game Over");
          setCurrentIndex(0);
          setLives(3);
        }
      }
    }
  };

  return (
    <div>
      <Header points={points} lives={lives} />
      <div className="movie-container">
        <h1 className="title">Guess the movie</h1>
        {currentIndex < movies.length ? (
          <div>
            <Emoji emoji={movies[currentIndex].emoji} />
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
          <p
            style={{
              color: "white",
              textAlign: "center",
              fontWeight: "600",
              fontSize: "1.5rem",
            }}
          >
            No hay más películas.
          </p>
        )}
      </div>
    </div>
  );
}

export default MovieViewer;
