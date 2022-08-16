import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import searchTermReducer from "../features/search/searchTermSlice"
import postsReducer from "../features/posts/postsSlice"
import commentsReducer from "../features/comments/commentsSlice"
import filtersReducer from "../features/filter-bar/filtersSlice"

export default configureStore({
    reducer: {
        searchTerm: searchTermReducer,
        posts: postsReducer,
        comments: commentsReducer,
        filters: filtersReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false})
})