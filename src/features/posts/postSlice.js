import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const retrievePost = createAsyncThunk(
    'post/retrievePost', 
    async (permalink, thunkAPI) => {
        const response = await fetch(`https://www.reddit.com${permalink}.json`)
        const json = await response.json();
        return json
    }
)

export const postSlice = createSlice({
    name: 'post',
    initialState: {
        post: {},
        isLoadingPost: false,
        failedToLoadPost: false
    },
    extraReducers: {
        [retrievePost.pending]: (state) => {
            state.isLoadingPost = true;
            state.failedToLoadPost = false;
        },
        [retrievePost.fulfilled]: (state, action) => {

            state.isLoadingPost = false;
            state.failedToLoadPost = false;
            state.post = action.payload[0].data.children[0].data;;
        },
        [retrievePost.rejected]: (state) => {
            state.isLoadingPost = false;
            state.failedToLoadPost = true;
        }
    }
})

export const isLoadingPost = state => state.post.isLoadingPost;
export const failedToLoadPost = state => state.post.failedToLoadPost;
export default postSlice.reducer;
export const selectPost = state => state.post.post