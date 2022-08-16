import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { retrievePosts, selectPosts, isLoadingPosts } from "../posts/postsSlice";
import { useNavigate } from "react-router-dom";


export function FilterBar() {
    let filterSelection
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const countryNameList = ['United States', 'Argentina', 'Australia', 'Bulgaria', 'Canada', 'Chile', 'Colombia', 'Croatia', 'Czech Republic', 'Finland', 'France', 'Germany', 'Greece', 'Hungary', 'Iceland', 'India', 'Ireland', 'Italy', 'Japan', 'Malaysia', 'Mexico', 'New Zealand', 'Philippines', 'Poland', 'Portugal', 'Puerto Rico', 'Romania', 'Serbia', 'Singapore', 'Spain', 'Sweden', 'Taiwan', 'Thailand', 'Turkey', 'United Kingdom']
    const countryAbbList = ['US', 'AG', 'AU', 'BG', 'CA', 'CL', 'CO', 'HR', 'CZ', 'FI', 'FR', 'DE', 'GR', 'HU', 'IS', 'IN', 'IE', 'IT', 'JP', 'MY', 'MX', 'NZ', 'PH', 'PL', 'PT', 'PR', 'RO', 'RS', 'SG', 'ES', 'SE', 'TW', 'TH', 'TR', 'GB']
    const handlePopularityClick = (e) => {
        filterSelection = '/r/popular';
        navigate(filterSelection);
    };
    const handleCountrySelection = (e) => {
        filterSelection = `/r/popular/?geo_filter=${e.target.value}`;
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
                <select className='country-filter' onChange={handleCountrySelection}>
                    <option value="none">Everywhere</option>
                    {countryNameList.map((country, index) => <option value={countryAbbList[index]} key={index}>{country}</option>)}
                </select>
                <button className='new-filter' onClick={handleNewClick}>New</button>
                <button className='top-filter' onClick={handleTopClick}>Top</button>
            </div>
        </div>
    )
}