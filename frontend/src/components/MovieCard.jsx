import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/MovieCard.css"

function MovieCard({ movie, addToFavorites }) {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  function onFavoriteClick() {
    addToFavorites(movie);
    navigate("/Favorites");
  }

  return (
    <>
      <div className="movie-card">
        <div className="movie-poster">
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
          <div className="movie-overlay">
            <button className="favorite-btn" onClick={onFavoriteClick}>
              🤍
            </button>
            <button className="details-btn" onClick={() => setShowModal(true)}>
              Details
            </button>
          </div>
        </div>
        <div className="movie-info">
          <h3>{movie.title}</h3>
          <p>{movie.release_date?.split("-")[0]}</p>
        </div>
      </div>

      {showModal && (
        <div className="modal-backdrop" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowModal(false)}>✕</button>
            <div className="modal-body">
              <img
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt={movie.title}
                className="modal-poster"
              />
              <div className="modal-info">
                <h2>{movie.title}</h2>
                <p className="modal-year">{movie.release_date?.split("-")[0]}</p>
                <p className="modal-overview">
                  {movie.overview || "No summary available for this movie."}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default MovieCard;
