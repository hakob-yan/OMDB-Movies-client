// store.ts
import { configureStore } from "@reduxjs/toolkit";
import moviesReducr from "./features/movies/moviesSlice"; // You'll create this

const store = configureStore({
  reducer: {
    movies: moviesReducr,
  },

  // other configuration options (middleware, devTools, etc.)
});

export default store;
