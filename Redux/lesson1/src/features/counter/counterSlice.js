import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        addIncrementAmount: (state, actions) => {
            state.count += actions.payload
        },
        reset: (state) => {
            state.count = 0
        }
    }
})

export const { increment, decrement, addIncrementAmount, reset } = counterSlice.actions

export default counterSlice.reducer;