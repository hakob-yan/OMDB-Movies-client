// reducers.ts
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUsers } from "../../../api";

const initialState: {
  activeUserId: string;
  list: { id: number; name: string }[];
} = { list: [], activeUserId: "" };

export const getUsersList = createAsyncThunk("users/getUsers", getUsers);
const counterSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsersList.fulfilled, (state, action) => {
      return {
        ...state,
        list: action.payload,
        activeUserId: action.payload[0].id,
      };
    });
  },
});

export default counterSlice.reducer;
