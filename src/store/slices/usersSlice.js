import {createSlice} from '@reduxjs/toolkit'

const initialState = []

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser: (usersState, action) => {
            usersState.push(action.payload)
        },
    },
})

// Action creators are generated for each case reducer function
export const {addUser} = usersSlice.actions

export default usersSlice.reducer