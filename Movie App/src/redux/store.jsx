import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './movieReducer';
import groupReducer from './groupSlice';
import pageReducer from './pagesSlice';

const store = configureStore({
    reducer: {
        movies: moviesReducer,
        group: groupReducer,
        page: pageReducer,
    }
});

export default store;
