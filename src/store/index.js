import {configureStore} from '@reduxjs/toolkit'
import usersReducer from './slices/usersSlice'
import todoReducer from './slices/todoSlice'
import loadingReducer from './slices/loadingSlice'

export const store = configureStore({
    reducer: {
        users: usersReducer,
        todos: todoReducer,
        loading: loadingReducer
    },
})