import MovieCard from "../components/MovieCard";
import "../css/Favorites.css"

function Favorites({ favorites }) {
  if (!favorites || favorites.length === 0) {
    return (
      <div className="favorites-empty">
        <h2>NO favorite Movies Yet</h2>
        <p>Start adding movies to your favorites and they will appear here</p>
      </div>
    );
  }

  return (
    <div className="movies-grid">
      {favorites.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </div>
  );
}

export default Favorites;