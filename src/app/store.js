import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import postsReducer from "../features/posts/postsSlice"
import commentsReducer from "../features/comments/commentsSlice"

export default configureStore({
    reducer: {
        posts: postsReducer,
        comments: commentsReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false})
})