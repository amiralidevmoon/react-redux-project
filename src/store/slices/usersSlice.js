import {createSlice} from '@reduxjs/toolkit'

let initialState = {
    list: []
}

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsers: (state, {payload}) => {
            state.list = payload;
        },
        addUser: (state, {payload}) => {
            state.list.push(payload);
        },
        deleteUser: (state, {payload}) => {
            state.list = state.list.filter(user => user.id !== payload)
        },
        editUser: (state, {payload}) => {
            state.list = state.list.map(user => {
                return user.id === payload.id
                    ? {...user, ...payload}
                    : user;
            })
        }
    },
})

// Action creators are generated for each case reducer function
export const {setUsers, addUser, deleteUser, editUser} = usersSlice.actions

export default usersSlice.reducer