import { useMovieContext } from "../context/MovieContext";
import "../css/MovieCard.css";

export function MovieCard({ movie }) {
    const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();
    const favorite = isFavorite(movie.id);

    function onFavoriteClick(e) {
        e.preventDefault();
        if (favorite) removeFromFavorites(movie.id);
        else addToFavorites(movie);
    }

    return <div className="movie-card">
        <div className="movie-poster">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <div className="movie-overlay">
                <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={onFavoriteClick}>
                    ❤️
                </button>
            </div>
        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            {/* this is to get only the year from dd-mm-yyyy */}
            <p>{movie.release_date?.split("-")[0]}</p>
        </div>
    </div>
}

//export default MovieCard