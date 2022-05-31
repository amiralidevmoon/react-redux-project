import {configureStore} from '@reduxjs/toolkit'
import usersReducer from './slices/usersSlice'
import loadingReducer from './slices/loadingSlice'

export const store = configureStore({
    reducer: {
        users: usersReducer,
        loading: loadingReducer
    },
})