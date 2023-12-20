import "./App.css";
import MovieList from "./components/movies-list";

function App() {
  return (
    <div className="App">
      <section className="movie-list-section">
        <MovieList />
      </section>
    </div>
  );
}

export default App;
