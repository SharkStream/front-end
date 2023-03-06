import { configureStore } from "@reduxjs/toolkit";
import counterReduces from "../features/counter/counterSlice";

export const store = configureStore({
    reducer: {
        counter: counterReduces
    }
})