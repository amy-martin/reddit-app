import { configureStore } from "@reduxjs/toolkit";
import searchTermReducer from "../features/search/searchTermSlice"
import postsReducer from "../features/posts/postsSlice"
import commentsReducer from "../features/comments/commentsSlice"
export default configureStore({
    reducer: {
        searchTerm: searchTermReducer,
        posts: postsReducer,
        comments: commentsReducer
    }
})