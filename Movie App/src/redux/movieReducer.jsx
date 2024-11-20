// reducers/movieReducer.js
const initialState = {
    movies: [],
    loading: false,
    error: null
};

const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_MOVIES_REQUEST':
            return {
                ...state,
                loading: true,  // Sadece loading durumunu true yapıyoruz
                error: null
            };
        case 'SET_MOVIES':
            return {
                ...state,
                movies: action.payload,
                loading: false,
                error: null
            };
        case 'FETCH_MOVIES_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export default movieReducer;
