import { create } from "zustand";

interface State {
  pageNum: number;
  pageUp: () => void;
  pageDown: () => void;
  pageSet: (pageNum: number) => void;
}

const usePage = create<State>((set) => ({
  pageNum: 0,
  pageUp: () =>
    set((state) => ({
      pageNum: state.pageNum === 3 ? 0 : state.pageNum + 1,
    })),
  pageDown: () =>
    set((state) => ({
      pageNum: state.pageNum === 0 ? 3 : state.pageNum - 1,
    })),
  pageSet: (pageNum) => {
    set(() => ({
      pageNum,
    }));
  },
}));

export default usePage;
