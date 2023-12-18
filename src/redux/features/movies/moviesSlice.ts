// reducers.ts
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getMoviesByTitle, getAllMovies } from "../../../api";
export interface IMovie {
  title: string;
  year: string;
  imdb_id: string;
  type: string;
  image: string;
  is_favorite: boolean;
}

const initialState: { all: IMovie[]; searchedMovies: IMovie[] } = {
  all: [],
  searchedMovies: [],
};

export const fetchAllMovies = createAsyncThunk(
  "movies/fetchAllMovies",
  getAllMovies
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
      const all = state.all.filter((el) => el.imdb_id !== id);
      const searchedMovies = state.searchedMovies.filter(
        (el) => el.imdb_id !== id
      );

      return {
        ...state,
        all,
        searchedMovies,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllMovies.fulfilled, (state, action) => {
      const allMovies = action.payload;
      return {
        ...state,
        all: allMovies,
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
