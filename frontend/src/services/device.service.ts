import {
  ResponseNewDevices,
  ResponseTheBestDevices,
  ResponseOneDevice,
  IOrderData,
} from "./../types/Device";
import { IQueryDevice } from "types/Api";
import { ResponseDevices } from "types/Device";
import { instance } from "./baseURL";
export const DeviceApi = {
  async getAllDevices(query: IQueryDevice) {
    const { data } = await instance.get<ResponseDevices>(
      `/devices?page=${query.page}&limit=${query.limit}` +
        (query.type !== "" ? `&typeId=${query.type}` : ``) +
        (query.value !== "" ? `&search=${query.value}` : ``)
    );
    return data;
  },
  async getDevice(id: string) {
    const { data } = await instance.get<ResponseOneDevice>(`/devices/${id}`);
    return data;
  },
  async getNewDevices() {
    const { data } = await instance.get<ResponseNewDevices>(`/new`);
    return data;
  },
  async getTheBestDevices() {
    const { data } = await instance.get<ResponseTheBestDevices>(`/the_best`);
    return data;
  },
  async reserveOrder(orderData: IOrderData) {
    const { data } = await instance.post<ResponseTheBestDevices>(
      `/orders`,
      orderData
    );
    return data;
  },
};
