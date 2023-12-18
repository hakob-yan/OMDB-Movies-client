import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store";

const selectSelf = (state: RootState) => state.users;
export const usersSelect = createSelector(selectSelf, (state) => state);
