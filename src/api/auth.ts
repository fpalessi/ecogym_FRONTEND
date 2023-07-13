import axios from "../libraries/axios";

export const doRegister = async (
  fullName: string,
  email: string,
  password: string
) => {
  return axios.post("/register", {
    fullName,
    email,
    password,
  });
};
export const doLogin = async (email: string, password: string) => {
  return axios.post("/login", { email, password });
};

export const getProfile = async () => {
  return await axios.get("/profile");
};
