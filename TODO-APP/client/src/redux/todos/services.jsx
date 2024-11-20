import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getTodoAsync = createAsyncThunk('todos/getTodosAsync', async () => {
    const res = await axios(`${import.meta.env.VITE_API_BASE_ENDPOINT}/todos`);
    return res.data;
});

export const addTodoAsync = createAsyncThunk('todos/addTodoAsync', async (data) => { // Burada type'ı değiştirdik
    const res = await axios.post(`${import.meta.env.VITE_API_BASE_ENDPOINT}/todos`, data);
    return res.data;
});

export const toggleTodoAsync = createAsyncThunk('todos/toggleAsync', async ({ id, data }) => {
    const res = await axios.patch(`${import.meta.env.VITE_API_BASE_ENDPOINT}/todos/${id}`, data)
    return res.data;
})

export const removeTodoAsync = createAsyncThunk('todos/removeTodoAsync', async (id) => {
    const res = await axios.delete(`${import.meta.env.VITE_API_BASE_ENDPOINT}/todos/${id}`,);
    return id;
})