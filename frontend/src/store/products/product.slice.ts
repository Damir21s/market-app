import { IDevice } from "./../../types/Device";
import { getDevices, getOneDevice } from "./product.actions";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ResponseDevices } from "types/Device";
interface DeviceState {
  data: { device: IDevice[] | null; totalItems: number | null };
  oneDevice: IDevice | null;
  isLoading: boolean;
  error: string;
}

const initialState: DeviceState = {
  data: { device: null, totalItems: null },
  oneDevice: null,
  isLoading: false,
  error: "",
};

export const deviceSlice = createSlice({
  name: "device",
  initialState,
  reducers: {},
  extraReducers: {
    [getDevices.fulfilled.type]: (
      state,
      action: PayloadAction<ResponseDevices>
    ) => {
      state.isLoading = false;
      state.error = "";
      state.data.device = action.payload.data;
      state.data.totalItems = action.payload.meta.totalItems;
    },
    [getDevices.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getDevices.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [getOneDevice.fulfilled.type]: (state, action: PayloadAction<IDevice>) => {
      state.isLoading = false;
      state.error = "";
      state.oneDevice = action.payload;
    },
    [getOneDevice.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getOneDevice.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const deviceReducer = deviceSlice.reducer;
