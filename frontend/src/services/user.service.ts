import { ILoginData, IRegisterData } from "types/Api";
import { IUser } from "types/User";
import { instance } from "./baseURL";

export const UserApi = {
  async register(registrData: IRegisterData) {
    const { data } = await instance.post<IUser>("/auth/register", registrData);
    return data;
  },
  async login(loginData: ILoginData) {
    const { data } = await instance.post<IUser>("/auth/login", loginData);
    return data;
  },
};
