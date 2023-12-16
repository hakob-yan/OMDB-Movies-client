// reducers.ts
import { createSlice } from "@reduxjs/toolkit";
export interface IMovie {
  title: string;
  year: string;
  runTime: string;
  genre: string;
  director: string;
  image: string;
}

const initialState: IMovie[] = [];

const counterSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
});

export default counterSlice.reducer;
