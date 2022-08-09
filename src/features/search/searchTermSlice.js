import { createSlice } from "@reduxjs/toolkit";

export const searchTermSlice = createSlice({
    name: 'searchTerm', 
    initialState: '',
    reducers: {
        updateSearchTerm: (state, action) => {
            state = action.payload
        },
        clearSearchTerm: state => state = ''
    }
})

export default searchTermSlice.reducer;
export const { updateSearchTerm, clearSearchTerm } = searchTermSlice.actions;
export const selectSearchTerm = state => state.searchTerm;