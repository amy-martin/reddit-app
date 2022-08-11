import React from "react";
import { FilterBar } from "../filter-bar/FilterBar";
import PostListings from "./PostListings";

export function PostPage() {
    return (
        <div className='post-page'>
            <FilterBar />
            <PostListings />
        </div>
    )
}