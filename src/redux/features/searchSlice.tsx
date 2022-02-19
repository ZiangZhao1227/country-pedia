import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { RootState } from "../../redux/store";

interface SearchState {
  value: string;
}

const initialState: SearchState = {
  value: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    handleSearch: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { handleSearch } = searchSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectSearch = (state: RootState) => state.search.value;

export default searchSlice.reducer;
