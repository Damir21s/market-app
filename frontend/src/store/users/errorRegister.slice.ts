import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { registerUser } from "./user.actions";

interface ResponseMessageError {
  message: Array<string>;
}

interface ErrorState {
  error: Array<string> | null;
}

const initialState: ErrorState = {
  error: null,
};

export const errorRegisterSlice = createSlice({
  name: "errorRegister",
  initialState,
  reducers: {},
  extraReducers: {
    [registerUser.fulfilled.type]: (state) => {
      state.error = null;
    },
    [registerUser.rejected.type]: (
      state,
      action: PayloadAction<ResponseMessageError>
    ) => {
      state.error = action.payload.message;
    },
  },
});

export const errorRegisterReducer = errorRegisterSlice.reducer;
