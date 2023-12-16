// reducers.ts
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRecentMovies } from "../../../api";
export interface IMovie {
  title: string;
  year: string;
  imdbID: string;
  type: string;
  image: string;
}

const initialState: IMovie[] = [];

export const fetchRecentMovies = createAsyncThunk(
  "movies/fetchRecentMovies",
  getRecentMovies
);

const counterSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRecentMovies.fulfilled, (state, action) => {
      console.log(action);
    });
  },
});

export default counterSlice.reducer;
