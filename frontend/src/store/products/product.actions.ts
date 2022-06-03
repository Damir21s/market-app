import { createAsyncThunk } from "@reduxjs/toolkit";
import { DeviceApi } from "services/device.service";
import { IQueryDevice } from "types/Api";
export const getDevices = createAsyncThunk(
  "allDevice/get",
  async (query: IQueryDevice, thunkApi) => {
    try {
      const response = await DeviceApi.getAllDevices(query);
      return response;
    } catch (error: any) {
      if (error.response) {
        return thunkApi.rejectWithValue(error.response.data.message);
      }
    }
  }
);

export const getOneDevice = createAsyncThunk(
  "oneDevice/get",
  async (id: string, thunkApi) => {
    try {
      const response = await DeviceApi.getDevice(id);
      return response;
    } catch (error: any) {
      if (error.response) {
        return thunkApi.rejectWithValue(error.response.data.message);
      }
    }
  }
);

export const getNewDevice = createAsyncThunk(
  "newDevice/get",
  async (_, thunkApi) => {
    try {
      const response = await DeviceApi.getNewDevices();
      return response;
    } catch (error: any) {
      if (error.response) {
        return thunkApi.rejectWithValue(error.response.data.message);
      }
    }
  }
);

export const getTheBestDevice = createAsyncThunk(
  "theBestDevice/get",
  async (_, thunkApi) => {
    try {
      const response = await DeviceApi.getTheBestDevices();
      return response;
    } catch (error: any) {
      if (error.response) {
        return thunkApi.rejectWithValue(error.response.data.message);
      }
    }
  }
);
