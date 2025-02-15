import { useState, useEffect } from "react" // useEffect makes it so we can do something once. Such as fetching all of the popular movies only once. 
import { MovieCard } from "../Components/MovieCard"
import { searchrMovies } from "../services/api";
import { getPopularMovies } from "../services/api";
import "../css/Home.css"

function Home() {
    const [searchQuery, setSearchQuery] = useState(""); // searchQuery is the state and setSearchQuery is the function used to update state. When state changes, the entire component is re-rendered. You MUST use state to keep the values. 
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            } catch (err) {
                setError("Failed to load movies...")
                console.log(err);
            }
            finally {
                setLoading(false);
            }
        }
        loadPopularMovies();
    }, []) // call the function when the array changes. The array is a dependency array. 



    const handleSearch = async (e) => {
        e.preventDefault();
        if (!searchQuery.trim()) return;
        if (loading) return;
        setLoading(true)
        try {
            const searchResults = await searchrMovies(searchQuery);
            setMovies(searchResults);
            setError(null);
        } catch(err) {

        } finally {
            setLoading(false);
        }
        setSearchQuery("");
    };

    return <div className="movies">
        <form onSubmit={handleSearch} className="search-form">
            <input type="text" placeholder="Search for movies" className="search-inpu" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
            <button type="submit" className="search-button">Search</button>
        </form>

        {error && <div className="error-message">{error}</div>}
        { loading ? (<div className="loading">Loading...</div>) : (
        <div className="movies-grid">
            {movies.map((movie) =>
            (
                <MovieCard movie={movie} key={movie.id} />
            )
            )}
        </div> )}
    </div>
}

export default Home