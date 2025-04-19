import { createSlice } from "@reduxjs/toolkit";

const weatherSearchHistorySlice = createSlice({
    name: "weatherSearchHistory",
    initialState: {
        searchHistory: [],
    },
    reducers: {
        addSearchHistory: (state, action) => {
            console.log('tes',state.searchHistory.length);
            const newEntry = action.payload;
            console.log("Adding search:", newEntry);
            let isDuplicate = false;
            // if(state.searchHistory.length > 0){
            //     isDuplicate = state.searchHistory.some(entry => entry.id === newEntry.id);
            // }
            if(!isDuplicate) {
                state.searchHistory.push(newEntry);
            }
            console.log("UPDATED search history "+JSON.stringify(state.searchHistory, null, 2));

            return;
        },
        removeSearchHistory: (state, action) => {
            const idToRemove = action.payload;
            state.searchHistory = state.searchHistory.filter(entry => entry.id !== idToRemove)
            return;
        }
    }
})

export const { addSearchHistory, removeSearchHistory } = weatherSearchHistorySlice.actions;
export default weatherSearchHistorySlice.reducer;