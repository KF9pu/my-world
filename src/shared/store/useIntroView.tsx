import { create } from "zustand";

interface State {
  isView: boolean;
  viewToggle: () => void;
}

const useIntroView = create<State>((set) => ({
  isView: false,
  viewToggle: () => {
    set((state) => ({
      isView: !state.isView,
    }));
  },
}));

export default useIntroView;
