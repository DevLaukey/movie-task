import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: [],
  reducers: {
    createPost(state, action) {},
    updatePost(state, action) {},
    deletePost(state, action) {},
  },
});

console.log(postsSlice);


export const { movies } = movieSlice.actions;

export default movieSlice.reducer;
