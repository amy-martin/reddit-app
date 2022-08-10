import { createSlice } from "@reduxjs/toolkit";

export const filtersSlice = createSlice({
    name: 'filters',
    initialState: {
        byPopularity: true,
        country: '',
        byVotes: false,
        timeFrame: ''
    },
    reducers: {
        updateByPopularity: (state, action) => {
            state.byPopularity = action.payload
        },
        updateCountry: (state, action) => {
            state.country = action.payload
        },
        updateByVotes: (state, action) => {
            state.byVotes = action.payload
        },
        updateTimeFrame: (state, action) => {
            state.timeFrame = action.payload
        }
}
})

export default filtersSlice.reducer;
export const {updateByPopularity, updateCountry, updateByVotes, updateTimeFrame} = filtersSlice.actions;
export const selectFilters = state => state.filters