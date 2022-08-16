import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const retrievePosts = createAsyncThunk(
    'posts/retrievePosts', 
    async (filterSelection, thunkAPI) => {
        const response = await fetch(`https://www.reddit.com/${filterSelection}.json`)
        const json = await response.json();
        return json
    }
)
export const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: {
        //     1: {id: 1,
        //     type: 'text',
        //     title: 'I love Hector',
        //     content: 'I love Hector a lot'},
        //     2: {id: 2,
        //     type: 'media',
        //     title: 'Brad and Pineapple',
        //     content: {}},
        //     3: {id: 3,
        //         type: 'text',
        //         title: 'I love Hector',
        //         content: 'I love Hector a lot'},
        //     4: {id: 4,
        //         type: 'text',
        //         title: 'I love Hector',
        //         content: 'I love Hector a lot'},
        //     5: {id: 5,
        //         type: 'text',
        //         title: 'I love Hector',
        //         content: 'I love Hector a lot'},
        //     6: {id: 6,
        //         type: 'text',
        //         title: 'I love Hector',
        //         content: 'I love Hector a lot'},
        //     7: {id: 7,
        //         type: 'text',
        //         title: 'I love Hector',
        //         content: 'I love Hector a lot'},
        //     8: {id: 8,
        //         type: 'text',
        //         title: 'I love Hector',
        //         content: 'I love Hector a lot'}, 
        //     9: {id: 9,
        //         type: 'text',
        //         title: 'I love Hector',
        //         content: 'I love Hector a lot'}
    }, 
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
        }
    }
})

export default postsSlice.reducer
export const isLoadingPosts = (state) => state.posts.isLoadingPosts
export const selectPosts = state => state.posts.posts