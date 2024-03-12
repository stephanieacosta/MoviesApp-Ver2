import React, { useState } from "react";
import MoviesContext from "./MoviesContext";

const MoviesProvider = ({ children }) => {
  const [points, setPoints] = useState(0);
  const [lives, setLives] = useState(3);

  return (
    <MoviesContext.Provider value={{ points, setPoints, lives, setLives }}>
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesProvider;
