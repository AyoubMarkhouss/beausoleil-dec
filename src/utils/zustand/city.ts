import { create } from "zustand";

interface BearState {
  goTo: string | null;
  setGoTo: (by: string | null) => void;
  startFrom: string | null;
  setStartFrom: (by: string | null) => void;
  goDateInfo: string | null;
  setGoDateInfo: (by: string) => void;
  toDateInfo: string | null;
  toGoDateInfo: (by: string) => void;
}

export const useTravelStore = create<BearState>()((set) => ({
  startFrom: null,
  setStartFrom: (by) => set(() => ({ startFrom: by })),
  goTo: null,
  setGoTo: (by) => set(() => ({ goTo: by })),
  goDateInfo: null,
  setGoDateInfo: (by) => set(() => ({ goDateInfo: by })),
  toDateInfo: null,
  toGoDateInfo: (by) => set(() => ({ toDateInfo: by })),
}));
