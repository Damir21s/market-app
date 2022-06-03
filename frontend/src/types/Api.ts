export interface IQueryDevice {
  page: number;
  limit: number;
  value: string;
  type: string;
}

export interface ILoginData {
  email: string;
  password: string;
}

export interface IRegisterData {
  username: string;
  email: string;
  password: string;
}
