import { Theme, ThemeSlice } from '@/models/Theme';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: ThemeSlice = {
  theme: 'light',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload;
    },
    defaultTheme: (state) => {
      state.theme = initialState.theme;
    },
  },
});

export const { toggleTheme, defaultTheme } = themeSlice.actions;
export default themeSlice.reducer;
