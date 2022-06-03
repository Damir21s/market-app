import { getTheBestDevice } from "./product.actions";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITheBestDevices } from "types/Device";
interface TheBestDeviceState {
  bestDevice: ITheBestDevices[] | any;
  isLoading: boolean;
  error: string;
}

const initialState: TheBestDeviceState = {
  bestDevice: null,
  isLoading: false,
  error: "",
};

export const theBestDeviceSlice = createSlice({
  name: "theBestDevice",
  initialState,
  reducers: {},
  extraReducers: {
    [getTheBestDevice.fulfilled.type]: (
      state,
      action: PayloadAction<ITheBestDevices>
    ) => {
      state.isLoading = false;
      state.error = "";
      state.bestDevice = action.payload;
    },
    [getTheBestDevice.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getTheBestDevice.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const theBestDeviceReducer = theBestDeviceSlice.reducer;
