import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateSearchTerm } from "./searchTermSlice";

export default function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        setSearchTerm(e.target.value)
        dispatch(updateSearchTerm(searchTerm))
    } 
    return (
        <form onSubmit={handleSubmit}>
            <input type='search' id='query' name='q' placeholder='Search...'>  
            </input>
            <button>Search</button>
        </form>
    )
}
