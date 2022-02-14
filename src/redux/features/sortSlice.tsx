import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../redux/store";

interface SortState {
  value: string;
}

const initialState: SortState = {
  value: "",
};

export const sortSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    handleSort: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { handleSort } = sortSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectSort = (state: RootState) => state.sort.value;

export default sortSlice.reducer;
