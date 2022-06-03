import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "types/User";
import { loginUser, registerUser } from "./user.actions";
interface UserState {
  user: IUser | null;
  isLoading: boolean;
}

const initialState: UserState = {
  user: null,
  isLoading: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
    },
  },
  extraReducers: {
    [loginUser.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
      state.isLoading = false;
      state.user = action.payload;
    },
    [loginUser.pending.type]: (state) => {
      state.isLoading = true;
    },
    [loginUser.rejected.type]: (state) => {
      state.isLoading = false;
    },
    [registerUser.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
      state.isLoading = false;
      state.user = action.payload;
    },
    [registerUser.pending.type]: (state) => {
      state.isLoading = true;
    },
    [registerUser.rejected.type]: (state) => {
      state.isLoading = false;
    },
  },
});

export const userReducer = userSlice.reducer;
export const { logout } = userSlice.actions;
