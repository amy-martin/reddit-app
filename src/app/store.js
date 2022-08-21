import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../features/posts/postsSlice"
import commentsReducer from "../features/comments/commentsSlice"
import postReducer from "../features/posts/postSlice"

export default configureStore({
    reducer: {
        posts: postsReducer,
        comments: commentsReducer,
        post: postReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false})
})