import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: [],
  reducers: {
   changeMovie:() => {}
  },
});

console.log(postsSlice);


export const { changeMovie } = movieSlice.actions;

export default movieSlice.reducer;
