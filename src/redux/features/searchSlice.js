import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    handleSearch: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { handleSearch } = searchSlice.actions;

export default searchSlice.reducer;
