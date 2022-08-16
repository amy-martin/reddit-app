import { createSlice } from "@reduxjs/toolkit";

export const filtersSlice = createSlice({
    name: 'filters',
    initialState: {
        popularityFilter: true,
        geoFilter: '',
        votesFilter: false,
        timeFrameFilter: ''
    },
    reducers: {
        updateByPopularity: (state, action) => {
            state.popularityFilter = action.payload
        },
        updateCountry: (state, action) => {
            state.geoFilter = action.payload
        },
        updateByVotes: (state, action) => {
            state.votesFilter = action.payload
        },
        updateTimeFrame: (state, action) => {
            state.timeFrameFilter = action.payload
        }
}
})

export default filtersSlice.reducer;
export const {updateByPopularity, updateCountry, updateByVotes, updateTimeFrame} = filtersSlice.actions;
export const selectFilters = state => state.filters