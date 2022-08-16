import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateSearchTerm } from "./searchTermSlice";

export default function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        if (e.target.value.length !== 0) {
            console.log(e.target.value.length)
            setSearchTerm(e.target.value.replaceAll(' ', '%'))
            navigate(`/search/q=${searchTerm}`)
        }
    } 
    return (
        <form onSubmit={handleSubmit}>
            <input type='search' id='query' name='q' placeholder='Search...'>  
            </input>
            <button>Search</button>
        </form>
    )
}
