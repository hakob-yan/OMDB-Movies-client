// reducers.ts
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addUser, getUsers } from "../../../api";
import { updateUserAuthId } from "../../../lib/axios";

const initialState: {
  activeUserId: string;
  list: { id: number; name: string }[];
} = { list: [], activeUserId: "1" };

export const getUsersList = createAsyncThunk("users/getUsers", getUsers);
export const addNewUser = createAsyncThunk("users/addUser", addUser);

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
    builder.addCase(addNewUser.fulfilled, (state, action) => {
      const newUser = action.payload;
      updateUserAuthId(newUser.id);
      return {
        ...state,
        list: [...state.list, newUser],
        activeUserId: newUser.id,
      };
    });
  },
});
export const { setUser } = userSlice.actions;

export default userSlice.reducer;
