import "./App.css";
import MoviesProvider from "./context/MoviesProvider";
import MovieViewer from "./pages/MovieViewer";

function App() {
  return (
    <MoviesProvider>
      <MovieViewer />
    </MoviesProvider>
  );
}

export default App;
