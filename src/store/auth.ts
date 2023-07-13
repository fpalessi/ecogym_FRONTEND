import { create } from "zustand";
import { persist } from "zustand/middleware";

type State = {
  token: string;
  profile: any;
  isAuth: boolean;
};

//funciones que van a actualizar este estado
type Actions = {
  setToken: (token: string) => void;
  setProfile: (profile: any) => void;
  logout: () => void;
};

export const useAuthStore = create(
  persist<State & Actions>(
    (set) => ({
      token: "",
      profile: null,
      isAuth: false,
      // funcion para actualizar este valor y colocar el token real
      setToken: (token: string) =>
        set((state) => ({
          token,
          isAuth: true,
        })),
      setProfile: (profile: any) =>
        set((state) => ({
          profile,
        })),
      logout: () =>
        set((state) => ({
          token: "",
          isAuth: false,
          profile: null,
        })),
    }),
    {
      name: "auth",
    }
  )
);
