export interface IDevice {
  characteristics: Array<Object>;
  id: number;
  name: string;
  price: number;
  img: string;
  description: Array<string>;
}

export interface ResponseDevices {
  data: IDevice[];
  meta: { totalItems: number };
}

export interface ResponseOneDevice extends IDevice {}

export interface ResponseNewDevices {
  data: INewDevices[];
}

export interface ResponseTheBestDevices {
  data: ITheBestDevices[];
}

export interface INewDevices {
  id: number;
  device_id: number;
  name: string;
  image: string;
}

export interface ITheBestDevices extends INewDevices {}

export interface IOrderData {
  userId: number;
  devicesId: Array<number>;
}
