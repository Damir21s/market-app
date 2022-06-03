import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserApi } from "services/user.service";
import { ILoginData, IRegisterData } from "types/Api";
export const loginUser = createAsyncThunk(
  "user/login",
  async (loginData: ILoginData, thunkApi) => {
    try {
      const data = await UserApi.login(loginData);
      return data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);
export const registerUser = createAsyncThunk(
  "user/register",
  async (registerData: IRegisterData, thunkApi) => {
    try {
      const data = await UserApi.register(registerData);
      return data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.response.data);
    }
  }
);
