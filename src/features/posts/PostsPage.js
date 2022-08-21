import React from "react";
import { useParams } from "react-router-dom";
import { FilterBar } from "../filter-bar/FilterBar";
import PostListings from "./PostListings";
import { useSearchParams } from "react-router-dom";

export function PostsPage() {
    const { r, filter } = useParams();
    const [searchParams] = useSearchParams();
    const queryString = searchParams.toString().replaceAll('+', '%20');
    let filterSelection
    let searchQuery
    


    filterSelection = r ? `r/${filter}`: filter

    searchQuery = searchParams.get('q') ? `?${queryString}`: null
      
    return (
        <div className='posts-page'>
            <FilterBar />
            <PostListings filterSelection={filterSelection} searchQuery={searchQuery}/>
        </div>
    )
}