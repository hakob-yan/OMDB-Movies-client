// reducers.ts
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getMoviesByTitle,
  getAllMovies,
  deleteMovieById,
  updateMovieById,
} from "../../../api";
export interface IMovie {
  title: string;
  year: string;
  genre: string;
  runtime: string;
  director: string;
  imdb_id: string;
  type: string;
  image: string;
  is_favorite: boolean;
}

const initialState: {
  all: IMovie[];
  searchedMovies: IMovie[];
  onlyFavorites: boolean;
} = {
  all: [],
  searchedMovies: [],
  onlyFavorites: false,
};

export const fetchAllMovies = createAsyncThunk(
  "movies/fetchAllMovies",
  getAllMovies
);

export const searchMoviesByTitle = createAsyncThunk(
  "movies/searchMoviesByTitle",
  getMoviesByTitle
);
export const deleteMovie = createAsyncThunk(
  "movies/deleteMovie",
  deleteMovieById
);
export const updateMovie = createAsyncThunk(
  "movies/updateMovie",
  updateMovieById
);
const moviesSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setOnlyFavorites(state, action) {
      return {
        ...state,
        onlyFavorites: action.payload,
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
    builder.addCase(deleteMovie.fulfilled, (state, action) => {
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
    });
    builder.addCase(updateMovie.fulfilled, (state, action) => {
      const movie = action.payload;
      const all = state.all.map((el) => {
        if (el.imdb_id === movie.imdb_id) {
          return movie;
        } else {
          return el;
        }
      });
      const searchedMovies = state.searchedMovies.map((el) => {
        if (el.imdb_id === movie.imdb_id) {
          return movie;
        } else {
          return el;
        }
      });
      return {
        ...state,
        all,
        searchedMovies,
      };
    });
  },
});
export const { setOnlyFavorites } = moviesSlice.actions;

export default moviesSlice.reducer;
