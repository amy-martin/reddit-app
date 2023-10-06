import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const retrievePosts = createAsyncThunk(
    'posts/retrievePosts', 
    async (_, thunkAPI) => {
        const response = await fetch(`https://www.reddit.com/.json`)
        const json = await response.json();
        return json
    }
)
export const retrieveFilteredPosts = createAsyncThunk(
    'posts/retrieveFilteredPosts', 
    async ({filterSelection}, thunkAPI) => {
            const response = await fetch(`https://www.reddit.com/${filterSelection}.json`)
            const json = await response.json();
            return json
    }
)
export const retrieveSearchPosts = createAsyncThunk(
    'posts/retrieveSearchPosts', 
    async (searchQuery, thunkAPI) => {
        const response = await fetch(`https://www.reddit.com/search.json${searchQuery}`)
        const json = await response.json();
        
        return json
    }
)
export const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: {}, 
        isLoadingPosts: false,
        failedToLoadPosts: false}
    ,
    extraReducers: {
        [retrievePosts.pending]: (state) => {
            state.isLoadingPosts = true;
            state.failedToLoadPosts = false;
        },
        [retrievePosts.fulfilled]: (state, action) => {
            state.isLoadingPosts = false;
            state.failedToLoadPosts = false;
            state.posts = action.payload;
        },
        [retrievePosts.rejected]: (state) => {
            state.isLoadingPosts = false;
            state.failedToLoadPosts = true
        },
        [retrieveFilteredPosts.pending]: (state) => {
            state.isLoadingPosts = true;
            state.failedToLoadPosts = false;
        },
        [retrieveFilteredPosts.fulfilled]: (state, action) => {
            state.isLoadingPosts = false;
            state.failedToLoadPosts = false;
            state.posts = action.payload;
        },
        [retrieveFilteredPosts.rejected]: (state) => {
            state.isLoadingPosts = false;
            state.failedToLoadPosts = true
        },
        [retrieveSearchPosts.pending]: (state) => {
            state.isLoadingPosts = true;
            state.failedToLoadPosts = false;
        },
        [retrieveSearchPosts.fulfilled]: (state, action) => {
            state.isLoadingPosts = false;
            state.failedToLoadPosts = false;
            state.posts = action.payload;
        },
        [retrieveSearchPosts.rejected]: (state) => {
            state.isLoadingPosts = false;
            state.failedToLoadPosts = true
        }
    }
})

export default postsSlice.reducer
export const isLoadingPosts = (state) => state.posts.isLoadingPosts
export const failedToLoadPosts = (state) => state.posts.failedToLoadPosts
export const selectPosts = state => state.posts.posts