import React from "react";
import { useParams } from "react-router-dom";
import { FilterBar } from "../filter-bar/FilterBar";
import PostListings from "./PostListings";

export function PostsPage() {
    const { r, filter, searchQuery } = useParams()
    const filterSelection = r ? `r/${filter}`: filter;

    
    return (
        <div className='posts-page'>
            <FilterBar />
            <PostListings filterSelection={filterSelection} searchQuery={searchQuery}/>
        </div>
    )
}