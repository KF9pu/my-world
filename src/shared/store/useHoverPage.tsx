import { create } from "zustand";

interface State {
  hoverPageNum: number | undefined;
  hoverPageSet: (hoverPageNum: number | undefined) => void;
}

const useHoverPage = create<State>((set) => ({
  hoverPageNum: undefined,
  hoverPageSet: (hoverPageNum) =>
    set(() => ({
      hoverPageNum,
    })),
}));

export default useHoverPage;
