import { createSlice } from "@reduxjs/toolkit";

export const commentsSlice = createSlice({
    name: 'comments',
    initialState: {
        comments: {
        1: {
            id: 1,
            postTitle: 'I love Hector',
            comment: "He's ugly though"
        },
        2: {
            id: 2,
            postTitle: 'I love Hector',
            comment: "Who doesn't"
        }
    },
    isLoadingComments: false,
    failedToLoadComments: false},
    extraReducers: {
        // retrieveComments: (state, action) => {

        // }
    }
})

export default commentsSlice.reducer;
export const selectComments = state => state.comments.comments;