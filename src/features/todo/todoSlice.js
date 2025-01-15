import { createSlice, nanoid } from "@reduxjs/toolkit";

const loadTodosFromLocalStorage = () => {
    const todos = localStorage.getItem('todos');
    return todos ? JSON.parse(todos) : [];
};

const initialState = {
    todos: loadTodosFromLocalStorage()
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                todoTxt: action.payload,
                completed: false
            }
            state.todos.push(todo)
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        editTodo: (state, action) => {
            const { id, updatedTodoText } = action.payload;
            state.todos = state.todos.map((todo) =>
                todo.id === id ? { ...todo, todoTxt: updatedTodoText } : todo
            );
        },
        
        toggleComplete: (state, action) => {
            state.todos = state.todos.map((todo) => todo.id === action.payload ? {...todo, completed: !todo.completed} : todo)
        }

    }
})

export const { addTodo, deleteTodo, editTodo, toggleComplete} = todoSlice.actions

export default todoSlice.reducer


