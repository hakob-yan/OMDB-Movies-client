// reducers.ts
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getMoviesByTitle, getRecentMovies } from "../../../api";
export interface IMovie {
  title: string;
  year: string;
  imdbID: string;
  type: string;
  image: string;
}

const initialState: { recent: IMovie[]; searchedMovies: IMovie[] } = {
  recent: [],
  searchedMovies: [],
};

export const fetchRecentMovies = createAsyncThunk(
  "movies/fetchRecentMovies",
  getRecentMovies
);
export const searchMoviesByTitle = createAsyncThunk(
  "movies/searchMoviesByTitle",
  getMoviesByTitle
);
const moviesSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    deleteMovie(state, action) {
      const id = action.payload;
      const recent = state.recent.filter((el) => el.imdbID !== id);
      const searchedMovies = state.searchedMovies.filter(
        (el) => el.imdbID !== id
      );

      return {
        ...state,
        recent,
        searchedMovies,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRecentMovies.fulfilled, (state, action) => {
      return {
        ...state,
        recent: action.payload,
      };
    });
    builder.addCase(searchMoviesByTitle.fulfilled, (state, action) => {
      return {
        ...state,
        searchedMovies: action.payload,
      };
    });
  },
});
export const { deleteMovie } = moviesSlice.actions;

export default moviesSlice.reducer;
