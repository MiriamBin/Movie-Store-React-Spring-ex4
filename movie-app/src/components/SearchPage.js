import { useState } from "react";

function SearchPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);

    const API_KEY = "78d0428861881a4570bce56c00beab85";

    const handleSubmit = async (event) => {
        event.preventDefault();

        fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchQuery}&include_video=false`
        )
            .then((response) => response.json())
            .then((response) => setMovies(response.results))
            .catch((err) => console.error(err));
    };

    return (
        <div>
            <h1>Movie Search</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(event) => setSearchQuery(event.target.value)}
                    placeholder="Search for movies..."
                />
                <button type="submit">Search</button>
            </form>
            <ul>
                {movies.map((movie) => (
                    <li key={movie.id}>{movie.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default SearchPage;
