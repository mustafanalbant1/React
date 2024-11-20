// src/redux/groupSlice.js
import { createSlice } from '@reduxjs/toolkit';

const groupSlice = createSlice({
    name: 'group',
    initialState: 'Popular', // Varsayılan grup
    reducers: {
        setGroup: (state, action) => action.payload, // Grubu güncelleyen reducer
    },
});

export const { setGroup } = groupSlice.actions;
export default groupSlice.reducer;
