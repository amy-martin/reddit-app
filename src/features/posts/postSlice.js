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

export default postSlice.reducer;
export const { updatePost } = postSlice.actions;
export const selectPost = state => state.post;