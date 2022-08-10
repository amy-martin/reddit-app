import { createSlice } from "@reduxjs/toolkit";

export const postsSlice = createSlice({
    name: 'posts',
    initialState: 
        {
            1: {id: 1,
            type: 'text',
            title: 'I love Hector',
            content: 'I love Hector a lot'},
            2: {id: 2,
            type: 'media',
            title: 'Brad and Pineapple',
            content: {}},
            3: {id: 3,
                type: 'text',
                title: 'I love Hector',
                content: 'I love Hector a lot'},
            4: {id: 4,
                type: 'text',
                title: 'I love Hector',
                content: 'I love Hector a lot'},
            5: {id: 5,
                type: 'text',
                title: 'I love Hector',
                content: 'I love Hector a lot'},
            6: {id: 6,
                type: 'text',
                title: 'I love Hector',
                content: 'I love Hector a lot'},
            7: {id: 7,
                type: 'text',
                title: 'I love Hector',
                content: 'I love Hector a lot'},
            8: {id: 8,
                type: 'text',
                title: 'I love Hector',
                content: 'I love Hector a lot'}, 
            9: {id: 9,
                type: 'text',
                title: 'I love Hector',
                content: 'I love Hector a lot'}
    }
    ,
    reducers: {
        updatePosts: (state, action) => {
            state = action.payload
        }
    }
})

export default postsSlice.reducer
export const { updatePosts } = postsSlice.actions
export const selectPosts = state => state.posts