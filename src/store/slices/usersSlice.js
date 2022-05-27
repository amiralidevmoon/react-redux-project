import {createSlice} from '@reduxjs/toolkit'

const initialState = []

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser: (state) => {
            state.value += 1
        },
    },
})

// Action creators are generated for each case reducer function
export const {increment} = usersSlice.actions

export default usersSlice.reducer