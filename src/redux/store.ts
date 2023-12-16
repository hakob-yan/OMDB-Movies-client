// store.ts
import { configureStore } from "@reduxjs/toolkit";
import moviesReducr from "./features/movies/moviesSlice"; // You'll create this

const store = configureStore({
  reducer: {
    movies: moviesReducr,
  },

  // other configuration options (middleware, devTools, etc.)
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
