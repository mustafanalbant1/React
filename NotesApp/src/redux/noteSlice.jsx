import { createSlice } from '@reduxjs/toolkit';

const noteSlice = createSlice({
    name: 'notes',
    initialState: {
        items: [],
        filteredNotes: [],

    },
    reducers: {
        addNote: (state, action) => {
            state.items.push(action.payload);
        },
        removeNote: (state, action) => {
            const id = action.payload
            state.items = state.items.filter((note) => note.id !== id)
        },
        searchNote: (state, action) => {
            const searchValue = action.payload.toLowerCase(); // Arama terimini küçük harflere çevir
            state.filteredNotes = state.items.filter(note =>
                note.content.toLowerCase().includes(searchValue) // Notların içeriğinde arama terimini bul
            );
        },

    }
});

export const { addNote, searchNote, removeNote } = noteSlice.actions;
export default noteSlice.reducer;