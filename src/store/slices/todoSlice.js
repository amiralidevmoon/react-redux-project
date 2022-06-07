import {createSlice} from '@reduxjs/toolkit'

let initialState = {
    list: []
}

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        setTodo: (state, {payload}) => {
            state.list = payload;
        },
        addTodo: (state, action) => {
            state.list.push(action.payload)
        },
        deleteTodo: (state, {payload}) => {
            state.list = state.list.filter(todo => todo.id !== payload)
        },
        toggleStatusTodo: (state, {payload}) => {
            state.list = state.list.map((todo) => {
                return todo.id === payload.id
                    ? {
                        ...todo,
                        status: !todo.status
                    }
                    : todo
            })
        },
        editTodo: (state, {payload}) => {
            state.list = state.list.map((todo) => {
                return todo.id === payload.id
                    ? {
                        ...todo,
                        title: payload.title
                    }
                    : todo
            })
        }
    },
})

// Action creators are generated for each case reducer function
export const {setTodo, addTodo, deleteTodo, toggleStatusTodo, editTodo} = todoSlice.actions

export default todoSlice.reducer