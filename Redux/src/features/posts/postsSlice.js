import { createSlice } from "@reduxjs/toolkit";
import { sub } from 'date-fns'

const initialState = [
    {
        id: '1',
        title: "Haha",
        content: "Hello,My first time to come here,I'm freshers",
        date: sub(new Date(), { minutes: 10 }).toISOString()
    },
    {
        id: '2',
        title: "Babab",
        content: "No need to tell, you just take over me",
        date: sub(new Date(), { minutes: 5 }).toISOString()
    }
]

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: (state, actions) => {
            state.push(actions.payload)
        }
    }
})

export const selectAllPosts = state => state.posts

export const { postAdded } = postsSlice.actions

export default postsSlice.reducer