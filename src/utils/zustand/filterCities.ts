import { create } from "zustand";

interface filterState {
  state: "recommended" | "cheapest" | "fastest" | "earliest" | "latest";
  setState: (
    by: "recommended" | "cheapest" | "fastest" | "earliest" | "latest"
  ) => void;
}

export const useFilterStore = create<filterState>()((set) => ({
  state: "recommended",
  setState: (by) => set(() => ({ state: by })),
}));
