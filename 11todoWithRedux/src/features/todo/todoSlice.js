// Slice is the naming convention for redux-toolkit 
// it does'nt do anything, we also know this file as a reducer in reddux

import { createSlice, nanoid } from "@reduxjs/toolkit"


// initial state, how should to be a todo bydefault
const initialState = {
    todos: [{id: 1, text: "Hello world"}]
}


export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: { 
        // reducers always have state and action 
        addTodo: (state, action) => {
            const todo = {
                // nanoid is a method provided by @reduxjs/toolkit to generate a unique id 

                id: nanoid(),
                text: action.payload
            }

            state.todos.push(todo);

        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
    }
}) 

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer;