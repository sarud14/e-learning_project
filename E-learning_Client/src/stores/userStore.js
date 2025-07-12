import { create } from "zustand";

import { persist, createJSONStorage } from "zustand/middleware";
import { authenticateApt } from "../services/authenticateService";

const useUserStore = create(
  persist(
    (set, get) => ({
      user: null,
      token: "",

      login: async (input) => {
        const result = await authenticateApt.post("/login", input);
        console.log(result.data);
        set({ token: result.data.token, user: result.data.payload });
        return result;
      },
      logout: () => set({ token: "", user: null }),
    }),
    {
      name: "userState",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useUserStore;
