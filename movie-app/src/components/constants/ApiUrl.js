
/*
* API key for TMDB API
*/
const API_KEY = "78d0428861881a4570bce56c00beab85";
/*
* base url for TMDB API
*/
const TMDB_BASE_URL = `https://api.themoviedb.org/3/`;
/*
* default params for popular movies and tv shows
*/
const DEFAULT_POPULAR_PARAMS = `api_key=${API_KEY}&include_adult=false&include_video=false`;
/*
* url for popular movies
*/
export const POPULAR_MOVIES_URL = `${TMDB_BASE_URL}movie/popular?${DEFAULT_POPULAR_PARAMS}`;
/*
* url for search movies
*/
export const SEARCH_MOVIES_URL = `${TMDB_BASE_URL}search/movie?${DEFAULT_POPULAR_PARAMS}&query=`;
/*
* url for genres movies
*/
export const GENRES_MOVIE_LIST_URL = `${TMDB_BASE_URL}genre/movie/list?api_key=${API_KEY}&language=en`;
/*
* url for genres movies
 */
export const TMDB_IMAGE_BASE_URL = `https://image.tmdb.org/t/p/w500/`;
/*
* default image url for movies
 */
export const DEFAULT_MOVIE_IMAGE_URL = `./image-not-found.jpg`;