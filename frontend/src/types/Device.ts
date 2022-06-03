export interface IDevice {
  characteristics: ICharacterstics;
  id: number;
  name: string;
  price: number;
  img: string;
  description: string;
}

export interface ResponseDevices {
  data: IDevice[];
  meta: { totalItems: number };
}

export interface ResponseOneDevice extends IDevice {}

export interface ICharacterstics {
  CPU: string;
  RAM: string;
  SIM_cards: string;
  battery: string;
  communication_standard: string;
  internal_memory: string;
  operating_system: string;
  screen: string;
  weight: string;
  сamera: string;
}

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
