import { MovieCard } from "../Components/MovieCard"

function Home() {
    const movies = [
        {id: 1, title: "John Wick", release_date: "2020"},
        {id: 2, title: "Terminator", release_date: "2020"},
        {id: 3, title: "The Matrix", release_date: "2020"}
    ]

    const handleSearch = () => {

    }
    return <div className="movies">
        <form onSubmit={handleSearch} className="search-form"> 
            <input type="text" placeholder="Search for movies" className="search-inpu" />
            <button type="submit" className="search-button">Search</button>
        </form>
        <div className="movies-grid">
            { movies.map( movie => <MovieCard movie={movie} key={movie.id }/> )}
        </div>
    </div>
}

export default Home