import { createSlice } from "@reduxjs/toolkit";

import type { RootState } from "../../redux/store";
import { CountryObjectProps } from "../../types/Types";

const initialState = {
  value: localStorage.getItem("favorite")
    ? JSON.parse(localStorage.getItem("favorite") || "[]")
    : [],
};

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      state.value.push(action.payload);
      localStorage.setItem("favorite", JSON.stringify(state.value));
    },
    removeFavorite: (state, action) => {
      state.value = state.value.filter(
        (item: CountryObjectProps) =>
          item.CountryName !== action.payload.CountryName
      );
      localStorage.setItem("favorite", JSON.stringify(state.value));
      if (localStorage.getItem("favorite")?.length === 0)
        localStorage.removeItem("favorite");
    },
    clearFavorite: (state) => {
      state.value = [];
      localStorage.removeItem("favorite");
    },
  },
});

export const { addFavorite, removeFavorite, clearFavorite } =
  favoriteSlice.actions;

export const selectFavorite = (state: RootState) => state.favorite.value;

export default favoriteSlice.reducer;
