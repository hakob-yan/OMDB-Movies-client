// reducers.ts
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUsers } from "../../../api";
import { updateUserAuthId } from "../../../lib/axios";

const initialState: {
  activeUserId: string;
  list: { id: number; name: string }[];
} = { list: [], activeUserId: "" };

export const getUsersList = createAsyncThunk("users/getUsers", getUsers);
const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUser(state, action) {
      updateUserAuthId(action.payload);
      return {
        ...state,
        activeUserId: action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUsersList.fulfilled, (state, action) => {
      updateUserAuthId(action.payload[0].id);
      return {
        ...state,
        list: action.payload,
        activeUserId: action.payload[0].id,
      };
    });
  },
});
export const { setUser } = userSlice.actions;

export default userSlice.reducer;
