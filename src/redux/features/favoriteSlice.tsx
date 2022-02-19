import { createSlice } from "@reduxjs/toolkit";

import type { RootState } from "../../redux/store";

interface InitialStateProps {
  value: string[];
}

interface favoriteProps {
  type: string;
  payload: string;
}

const initialState: InitialStateProps = {
  value:
    typeof window !== "undefined"
      ? localStorage.getItem("favorite")
        ? JSON.parse(localStorage.getItem("favorite") || "[]")
        : []
      : [],
};

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addFavorite: (state, action: favoriteProps) => {
      state.value.push(action.payload);
      localStorage.setItem("favorite", JSON.stringify(state.value));
    },
    removeFavorite: (state, action) => {
      state.value = state.value.filter(
        (country: string) => country !== action.payload
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
