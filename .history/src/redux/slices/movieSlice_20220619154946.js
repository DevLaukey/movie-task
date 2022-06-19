import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: [],
  reducers: {
    changeMovie: (state, { payload }) => {
      return state = payload;
   }
  },
});

export const { changeMovie } = movieSlice.actions;

export default movieSlice.reducer;
