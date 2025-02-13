const API_KEY = "d53433e129d4af661ac39a5a02aaba90";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`); // fetch performs a request
    const data = await response.json();
    return data.results;
};

export const searchrMovies = async (query) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`); // encodeURIComponent removes characters that can't be passed into the query.
    const data = await response.json();
    return data.results;
};