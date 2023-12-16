import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store";

const selectSelf = (state: RootState) => state.movies;
export const recentMoviesSelect = createSelector(
  selectSelf,
  (state) => state.recent
);
