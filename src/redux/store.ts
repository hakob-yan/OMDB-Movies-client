// store.ts
import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./features/movies/moviesSlice";
import usersReducer from "./features/users/usersSlice";

const store = configureStore({
  reducer: {
    movies: moviesReducer,
    users: usersReducer,
  },

  // other configuration options (middleware, devTools, etc.)
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
