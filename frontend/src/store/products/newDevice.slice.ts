import { getNewDevice } from "./product.actions";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { INewDevices } from "types/Device";
interface NewDeviceState {
  newDevice: INewDevices[] | any;
  isLoading: boolean;
  error: string;
}

const initialState: NewDeviceState = {
  newDevice: null,
  isLoading: false,
  error: "",
};

export const newDeviceSlice = createSlice({
  name: "newDevice",
  initialState,
  reducers: {},
  extraReducers: {
    [getNewDevice.fulfilled.type]: (
      state,
      action: PayloadAction<INewDevices>
    ) => {
      state.isLoading = false;
      state.error = "";
      state.newDevice = action.payload;
    },
    [getNewDevice.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getNewDevice.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const newDeviceReducer = newDeviceSlice.reducer;
