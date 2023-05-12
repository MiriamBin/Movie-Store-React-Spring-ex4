import { useState } from "react";
import {Form} from "react-bootstrap";

function SearchPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [listMovies, setListMovies] = useState([]);
    const API_KEY = "78d0428861881a4570bce56c00beab85";

    function handleResponse(response) {
        if (!response.ok) {
            throw new Error(" MOO! Something went wrong. Please try again later.");
        }
        return response.json(); // Parse the JSON response
    }

    /**
     * This function handles the parsed JSON data received from the server
     * @param response - the parsed JSON data received from the server
     */
    function handleJson(response) {
        // Handle the parsed JSON data received from the server
        console.log(response);
        setListMovies(response.results);
    }

    /**
     * This function handles the error message
     * @param err - the error message
     */
    function handleError(err) {
        console.error(err);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchQuery}&include_video=false`
        )
            .then(handleResponse)
            .then(handleJson)
            .catch(handleError);
    };

    return (
        <div>
            <h1>Movie Search</h1>
            <Form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(event) => setSearchQuery(event.target.value)}
                    placeholder="Search for movies..."
                />
                <button type="submit">Search</button>
            </Form>
            <ul>
                {listMovies.map((movie) => (
                    <li key={movie.id}>{movie.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default SearchPage;