import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

const filterSlice = createSlice({
  name: "filter",
  initialState: initialState,
  reducers: {
    filterNumbers: (state, action) => {
      return action.payload;
    },
  },
});

export const { filterNumbers } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
