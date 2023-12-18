// reducers.ts
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUsers } from "../../../api";

const initialState: { id: number; name: string }[] = [];

export const getUsersList = createAsyncThunk("users/getUsers", getUsers);
const counterSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsersList.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default counterSlice.reducer;
