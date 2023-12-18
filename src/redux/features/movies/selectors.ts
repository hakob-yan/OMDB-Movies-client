import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store";

const selectSelf = (state: RootState) => state.movies;
export const allMoviesSelect = createSelector(selectSelf, (state) => state.all);
export const searchedMoviesSelect = createSelector(
  selectSelf,
  (state) => state.searchedMovies
);
