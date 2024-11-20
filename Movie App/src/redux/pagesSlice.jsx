// src/redux/pageSlice.js
import { createSlice } from '@reduxjs/toolkit';

const pageSlice = createSlice({
    name: 'page',
    initialState: 1, // Varsayılan sayfa
    reducers: {
        setPage: (state, action) => action.payload, // Sayfayı güncelleyen reducer
    },
});

export const { setPage } = pageSlice.actions;
export default pageSlice.reducer;
