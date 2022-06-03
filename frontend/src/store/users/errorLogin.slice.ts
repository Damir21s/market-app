import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loginUser } from "./user.actions";

const initialState = {
  error: null as string | null,
};

export const errorLoginSlice = createSlice({
  name: "errorLogin",
  initialState,
  reducers: {},
  extraReducers: {
    [loginUser.fulfilled.type]: (state) => {
      state.error = null;
    },
    [loginUser.rejected.type]: (state, action: PayloadAction<string>) => {
      if (action.payload === "Unauthorized") {
        state.error = "Неверный логин или пароль";
      } else {
        state.error = action.payload;
      }
    },
  },
});

export const errorLoginReducer = errorLoginSlice.reducer;
