import { useState } from "react"
import { MovieCard } from "../Components/MovieCard"

function Home() {
    const [searchQuery, setSearchQuery] = useState(""); // searchQuery is the state and setSearchQuery is the function used to update state. When state changes, the entire component is re-rendered. You MUST use state to keep the values. 

    const movies = [
        { id: 1, title: "John Wick", release_date: "2020" },
        { id: 2, title: "Terminator", release_date: "2020" },
        { id: 3, title: "The Matrix", release_date: "2020" }
    ]



    const handleSearch = (e) => {
        e.preventDefault();
        alert(searchQuery);
        setSearchQuery("");
    };

    return <div className="movies">
        <form onSubmit={handleSearch} className="search-form">
            <input type="text" placeholder="Search for movies" className="search-inpu" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
            <button type="submit" className="search-button">Search</button>
        </form>
        <div className="movies-grid">
            {movies.map((movie) =>
            (
                <MovieCard movie={movie} key={movie.id} />
            )
            )}
        </div>
    </div>
}

export default Home