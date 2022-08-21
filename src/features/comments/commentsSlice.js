import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const retrieveComments = createAsyncThunk(
    'comments/retrieveComments',
    async (permalink, thunkAPI) => {
        const response = await fetch(`https://www.reddit.com${permalink}.json`)
        const json = await response.json();
        return json
    }
)
export const commentsSlice = createSlice({
    name: 'comments',
    initialState: {
        comments: {}
    },
    isLoadingComments: false,
    failedToLoadComments: false,
    extraReducers: {
        [retrieveComments.pending]: (state) => {
            state.isLoadingComments = true;
            state.failedToLoadComments = false;
        },
        [retrieveComments.fulfilled]: (state, action) => {
            state.isLoadingComments = false;
            state.failedToLoadComments = false;
            state.comments = (action.payload[1].data.children);
        },
        [retrieveComments.rejected]: (state) => {
            state.isLoadingComments = false;
            state.failedToLoadComments = true;
        }
    }
})

export default commentsSlice.reducer;
export const selectComments = state => state.comments.comments;
export const isLoadingComments = state => state.isLoadingComments;
export const failedToLoadComments = state => state.failedToLoadComments;