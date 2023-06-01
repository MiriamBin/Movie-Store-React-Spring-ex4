
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
* TODO: REMOVE UNNECESSARY CODE
 */

/*
* url for popular movies and tv shows
*/
export const POPULAR_MOVIES_URL = `${TMDB_BASE_URL}movie/popular?${DEFAULT_POPULAR_PARAMS}`;
export const POPULAR_TV_SHOWS_URL = `${TMDB_BASE_URL}tv/popular?${DEFAULT_POPULAR_PARAMS}`;
/*
* url for latest movie and tv show
*/
export const LATEST_MOVIE_URL = `${TMDB_BASE_URL}movie/latest?${DEFAULT_POPULAR_PARAMS}`;
export const LATEST_TV_SHOW_URL = `${TMDB_BASE_URL}tv/latest?${DEFAULT_POPULAR_PARAMS}`;
/*
* url for top-rated movies and tv shows
*/
export const TOP_RATED_MOVIES_URL = `${TMDB_BASE_URL}movie/top_rated?${DEFAULT_POPULAR_PARAMS}`;
export const TOP_RATED_TV_SHOWS_URL = `${TMDB_BASE_URL}tv/top_rated?${DEFAULT_POPULAR_PARAMS}`;


/*
* url for search movies and tv shows
*/
export const SEARCH_MOVIES_URL = `${TMDB_BASE_URL}search/movie?${DEFAULT_POPULAR_PARAMS}&query=`;
export const SEARCH_TV_SHOWS_URL = `${TMDB_BASE_URL}search/tv?${DEFAULT_POPULAR_PARAMS}&query=`;
/*
* url for genres movies and tv shows
*/
export const GENRES_MOVIE_LIST_URL = `${TMDB_BASE_URL}genre/movie/list?api_key=${API_KEY}&language=en`;
export const GENRES_TV_LIST_URL = `${TMDB_BASE_URL}genre/tv/list?api_key=${API_KEY}&language=en`;
/*
* url for genres movies and tv shows
 */
export const TMDB_IMAGE_BASE_URL = `https://image.tmdb.org/t/p/w500/`;

export const DEFAULT_IMAGE_URL = `movie-app/public/image-not-found.jpg`;
/*
default image url for movies and tv shows
 */
export const DEFAULT_MOVIE_IMAGE_URL = `./image-not-found.jpg`;