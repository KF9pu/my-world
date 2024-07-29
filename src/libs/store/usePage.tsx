import { create } from "zustand";
import { PageEnum } from "@/constants/enums";

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
      pageNum: state.pageNum === PageEnum.pageCnt - 1 ? 0 : state.pageNum + 1,
    })),
  pageDown: () =>
    set((state) => ({
      pageNum: state.pageNum === 0 ? PageEnum.pageCnt - 1 : state.pageNum - 1,
    })),
  pageSet: (pageNum) => {
    set(() => ({
      pageNum,
    }));
  },
}));

export default usePage;
