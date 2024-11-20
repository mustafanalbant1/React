// Düzeltilmiş Kod
import { createSlice } from '@reduxjs/toolkit';
import { getTodoAsync, addTodoAsync, toggleTodoAsync, removeTodoAsync } from './services'



export const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        items: [],
        isLoading: false,
        error: null,
        activeFilter: localStorage.getItem('activeFilter'),
        addNewTodo: {
            isLoading: false,
            error: false
        }
    },
    reducers: {
        // toggle: (state, action) => {
        //     const { id } = action.payload;
        //     const item = state.items.find((item) => item.id === id);
        //     if (item) {
        //         item.completed = !item.completed;
        //     }
        // },
        // destroy: (state, action) => {
        //     const id = action.payload;
        //     state.items = state.items.filter((item) => item.id !== id);
        // },
        changeActiveFilter: (state, action) => {
            state.activeFilter = action.payload;
        },
        clearCompleted: (state) => {
            state.items = state.items.filter((item) => !item.completed);
        },
    },
    extraReducers: (builder) => {
        // getTodo işlemi
        builder
            .addCase(getTodoAsync.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getTodoAsync.fulfilled, (state, action) => {
                state.items = action.payload;
                state.isLoading = false;
            })
            .addCase(getTodoAsync.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })
            // addTodo işlemi
            .addCase(addTodoAsync.pending, (state) => {
                state.addNewTodo.isLoading = true
            })
            .addCase(addTodoAsync.fulfilled, (state, action) => {
                state.items.push(action.payload);
                state.addNewTodo.isLoading = false
            })
            .addCase(addTodoAsync.rejected, (state, action) => {
                state.addNewTodo.error = false
                state.error = action.error.message
            })
            // toggle todo
            .addCase(toggleTodoAsync.fulfilled, (state, action) => {
                const { id, completed } = action.payload
                const index = state.items.findIndex(item => item.id === id)
                state.items[index].completed = completed
            })
            //remove todo
            .addCase(removeTodoAsync.fulfilled, (state, action) => {
                // const id = action.payload;
                // state.items = state.items.filter((item) => item.id !== id)
                const id = action.payload;
                const index = state.items.filter((item) => item.id !== id)
                state.items.splice(index, 1)
            })
    },
});

export const selectedTodos = (state) => state.todos.items;
export const selectFilteredTodos = (state) => {
    if (state.todos.activeFilter === 'all') {
        return state.todos.items;
    }
    return state.todos.items.filter((todo) =>
        state.todos.activeFilter === 'active' ? !todo.completed : todo.completed
    );
};

export const { destroy, changeActiveFilter, clearCompleted } = todoSlice.actions;
export default todoSlice.reducer;
