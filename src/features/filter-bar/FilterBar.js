import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { retrievePosts, selectPosts, isLoadingPosts } from "../posts/postsSlice";
import { useNavigate } from "react-router-dom";


export function FilterBar() {
    let filterSelection
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handlePopularityClick = (e) => {
        filterSelection = '/r/popular';
        navigate(filterSelection);
    };
    
    const handleNewClick = (e) => {
        filterSelection = '/new/';
        navigate(filterSelection);
    }
    const handleTopClick = (e) => {
        filterSelection = '/top/';
        navigate(filterSelection);
    }
    
    return (
        <div className="filter-bar-container">
            <div className="filter-bar">
                <button className='popularity-filter' onClick={handlePopularityClick}>Hot</button>
                <button className='new-filter' onClick={handleNewClick}>New</button>
                <button className='top-filter' onClick={handleTopClick}>Top</button>
            </div>
        </div>
    )
}