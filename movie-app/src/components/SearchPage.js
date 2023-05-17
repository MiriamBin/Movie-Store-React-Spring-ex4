import { useState, useEffect } from 'react';
import axios from 'axios';
import {Button, Form} from 'react-bootstrap';
import MediaList from './MediaList';


/*
Genre IDs:
----------
Action: 28
Adventure: 12
Animation: 16
Comedy: 35
Crime: 80
Documentary: 99
Drama: 18
Family: 10751
Fantasy: 14
History: 36
Horror: 27
Music: 10402
Mystery: 9648
Romance: 10749
Science Fiction: 878
TV Movie: 10770
Thriller: 53
War: 10752
Western: 37
*/



const useFetch = (initialUrl, initialData) => {
    const [data, setData] = useState(initialData);
    const [url, setUrl] = useState(initialUrl);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsError(false);
            setIsLoading(true);
            try {
                const response = await axios(url);
                setData(response.data);
            } catch (error) {
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return [{ data, isLoading, isError }, setUrl];
};

function SearchPage({ cartItems, setCartItems }) {
    const API_KEY = '78d0428861881a4570bce56c00beab85';
    const FETCH_ERROR_MSG = 'Something went wrong...';

    const [searchQuery, setSearchQuery] = useState('');
    const TMBD_SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&include_adult=false&include_video=false&query=`;
    const TMBD_SEARCH_DEFAULT = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&include_adult=false&include_video=false&with_genres=16`;
    const [{ data, isLoading, isError }, doFetch] = useFetch(TMBD_SEARCH_DEFAULT, { results: [] });

    const handleSubmit = (event) => {
        event.preventDefault();
        doFetch(TMBD_SEARCH_URL + encodeURIComponent(searchQuery));
    };

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <input type="text" className="form-control" value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} />
                <Button className="btn btn-primary" type="submit">Search</Button>
            </Form>

            {isError && <div className="alert alert-danger">{FETCH_ERROR_MSG}</div>}

            {isLoading ? (
                <div className="alert alert-warning">Loading (this could be animated gif instead)...</div>
            ) : (
                <MediaList listMovies={data.results} cartItems={cartItems} setCartItems={setCartItems} />
            )}
        </>
    );
}

export default SearchPage;