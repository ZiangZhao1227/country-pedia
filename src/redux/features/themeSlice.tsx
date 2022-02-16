import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../redux/store";

interface ThemeState {
  value: boolean;
}

const initialState: ThemeState = {
  value: true,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export const selectTheme = (state: RootState) => state.theme.value;

export default themeSlice.reducer;