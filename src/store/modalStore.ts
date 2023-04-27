import { create } from "zustand";

interface ModalStoreProps {
  open: boolean;
  setOpen: (val: boolean) => void;
}

export const useModalStore = create<ModalStoreProps>()((set) => ({
  open: false,
  setOpen: (val) => set({ open: val }),
}));
