import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateByPopularity, updateCountry, updateByVotes, updaTimeFrame, selectFilters, updateTimeFrame } from "./filtersSlice";

export function FilterBar() {
    const filters = useSelector(selectFilters)
    const dispatch = useDispatch()
    const countryList = ['United States', 'Argentina', 'Australia', 'Bulgaria', 'Canada', 'Chile', 'Colombia', 'Croatia', 'Czech Republic', 'Finland', 'France', 'Germany', 'Greece', 'Hungary', 'Iceland', 'India', 'Ireland', 'Italy', 'Japan', 'Malaysia', 'Mexico', 'New Zealand', 'Philippines', 'Poland', 'Portugal', 'Puerto Rico', 'Romania', 'Serbia', 'Singapore', 'Spain', 'Sweden', 'Taiwan', 'Thailand', 'Turkey', 'United Kingdom']
    const handlePopularityClick = () => {
        const popularitySetting = filters.byPopularity ? false: true;
        dispatch(updateByPopularity(popularitySetting))
    };
    const handleCountrySelection = (e) => {
        dispatch(updateCountry(e.target.value))
    };
    const handleVotesClick = () => {
        const votesSetting = filters.byVotes ? false: true;
        dispatch(updateByVotes(votesSetting))
    };
    const handleTimeFrameSelection = (e) => {
        dispatch(updateTimeFrame(e.target.value))
    };
    
    return (
        <div className="filter-bar-container">
            <div className="filter-bar">
                <button className='popularity-filter' onClick={handlePopularityClick}>Hot</button>
                <select className='country-filter' onChange={handleCountrySelection}>
                    <option value="none">Everywhere</option>
                    {countryList.map((country, index) => <option value={country.toLowerCase} key={index}>{country}</option>)}
                </select>
                <button className='votes-filter' onClick={handleVotesClick}>Top Voted</button>
                <select className= 'time-frame-filter' onChange={handleTimeFrameSelection}>
                    <option>Day</option>
                    <option>Week</option>
                    <option>Month</option>
                    <option>Year</option>
                </select>
            </div>
        </div>
    )
}