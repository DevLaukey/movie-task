import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "../slices/movieSlice";

const store = configureStore({
  reducer: {
    movies:movieSlice
  },
});

export default store;
