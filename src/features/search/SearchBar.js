import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/search/?q=${searchTerm}`)
        setSearchTerm('')
    } 
    return (
        <form onSubmit={handleSubmit}>
            <input type='search' id='query' name='q' placeholder='Search Reddit' onChange={e => setSearchTerm(e.target.value)} value={searchTerm}>  
            </input>
            <button>Search</button>
        </form>
    )
}
