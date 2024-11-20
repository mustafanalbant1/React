// redux/movieAction.js
import axios from 'axios';

export const setMovies = (movies) => ({
    type: 'SET_MOVIES',
    payload: movies,
});

const api_key = import.meta.env.VITE_API_KEY
const baseUrl = import.meta.env.VITE_BASE_URL

export const fetchMoviesRequest = () => ({
    type: 'FETCH_MOVIES_REQUEST'
});

export const fetchMoviesFailure = (error) => ({
    type: 'FETCH_MOVIES_FAILURE',
    payload: error
});

export const resetPage = () => ({
    type: 'RESET_PAGE',
});


export const fetchMovies = (group, page, abortController) => async (dispatch) => {
    // Yeni bir AbortController oluştur
    const controller = abortController || new AbortController();

    // Yeni bir AbortController oluştur
    abortController = new AbortController();
    const signal = abortController.signal;

    dispatch(fetchMoviesRequest());
    const options = {
        method: 'GET',
        url: `${baseUrl}/${group}`,
        params: {
            Page: page,
            Language: 'en-US',
            Adult: 'true'
        },
        headers: {
            'x-rapidapi-key': api_key,
            'x-rapidapi-host': 'tvshow.p.rapidapi.com'

        },
        signal: controller.signal,
    };

    try {
        const response = await axios.request(options);
        dispatch(setMovies(response.data));
    } catch (error) {
        dispatch(fetchMoviesFailure(error.message));
        console.error("API error:", error);
    }
};
