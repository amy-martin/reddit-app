import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
    name: 'post',
    initialState: {},
    reducers: {
        updatePost: (state, action) => {
            state = action.payload
        }
    }
})