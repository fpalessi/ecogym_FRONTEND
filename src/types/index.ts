export enum SelectedPage {
  Home = "home",
  Acceso = "acceso",
  NuestrasClases = "ourclasses",
  Unirse = "unirse",
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface ClassType {
  name: string;
  description?: string;
  image: string;
}
export interface UserLogin {
  email: string;
  password: string;
}

export interface UserRegister extends UserLogin {
  name: string;
}

export interface UserRegisterResponse extends UserLogin {
  user: { name: string };
  token: string;
  method: string;
}
export type UserLoginResponse = UserRegisterResponse;

export interface IUser {
  id: string;
  name: string;
  email: string;
}
export interface createUser {
  email: string;
  password: string;
  fullName: string;
}

export type authContextType = {
  user: boolean;
  login: () => void;
  logout: () => void;
};
