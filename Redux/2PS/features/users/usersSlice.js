import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id:'0', name: "Kenchli"},
    {id:'1', name: "Ada"},
    {id:'2', name: "john"}
]

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {

    }
})

export const selectAllUsers = state => state.users

export default usersSlice.reducer
