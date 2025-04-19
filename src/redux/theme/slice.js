import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLightTheme : false,
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.isLightTheme = !state.isLightTheme;
        },
        setIsLightTheme: (state, action) => {
            state.isLightTheme = action.payload;
        }
    }
})

export const { toggleTheme, setIsLightTheme } = themeSlice.actions;

export default themeSlice.reducer;