import { useContext } from "react";
import MoviesContext from "../context/MoviesContext";

const useCounter = () => {
  const { points, setPoints, lives, setLives } = useContext(MoviesContext);

  const increasePoints = () => {
    setPoints(points + 1);
  };

  const decreaseLives = () => {
    setLives(lives - 1);
  };

  const resetGame = () => {
    setPoints(0);
    setLives(3);
  };

  return {
    points,
    lives,
    increasePoints,
    decreaseLives,
    resetGame,
  };
};

export default useCounter;
