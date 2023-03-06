import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: 1, title: "Haha", content: "Hello,My first time to come here,I'm freshers" },
    { id: 2, title: "Babab", content: "No need to tell, you just take over me" }
]

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: (state, actions) => {
            console.log("hahaha", actions.payload);
            state.push(actions.payload)
        }
    }
})

export const selectAllPosts = state => state.posts

export const { postAdded } = postsSlice.actions

export default postsSlice.reducer