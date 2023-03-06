import { createSlice } from "@reduxjs/toolkit";
import { sub } from 'date-fns'

const initialState = [
    {
        id: '1',
        title: "Haha",
        content: "Hello,My first time to come here,I'm freshers",
        date: sub(new Date(), { minutes: 10 }).toISOString(),
        reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0
        }
    },
    {
        id: '2',
        title: "Babab",
        content: "No need to tell, you just take over me",
        date: sub(new Date(), { minutes: 5 }).toISOString(),
        reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0
        }
    }
]

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: (state, actions) => {
            state.push(actions.payload)
        },
        reactionAdded: (state, actions) => {
            const { postId, reaction } = actions.payload
            const existingPost = state.find(post => post.id === postId)
            if (existingPost) {
                existingPost.reactions[reaction]++
            }
        }
    }
})

export const selectAllPosts = state => state.posts

export const { postAdded, reactionAdded } = postsSlice.actions

export default postsSlice.reducer