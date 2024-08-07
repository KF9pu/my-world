import { create } from "zustand";
import usePage from "./usePage";
import { PageEnum } from "@/constants/";

interface State {
  currentSection: number;
  setSideSection: (currentSection: number) => void;
  sideSectionUp: () => void;
  sideSectionDown: () => void;
}

const useSideSectionPage = create<State>((set) => ({
  currentSection: 0,
  sideSectionUp: () =>
    set((state) => {
      const { pageNum } = usePage();
      return {
        currentSection:
          state.currentSection ===
          PageEnum.PageToSections[`${pageNum}`].length - 1
            ? 0
            : state.currentSection + 1,
      };
    }),
  sideSectionDown: () =>
    set((state) => {
      const { pageNum } = usePage();
      return {
        currentSection:
          state.currentSection === 0
            ? PageEnum.PageToSections[`${pageNum}`].length - 1
            : state.currentSection - 1,
      };
    }),
  setSideSection: (sectionIndex) => {
    set(() => ({
      currentSection: sectionIndex,
    }));
  },
}));

export default useSideSectionPage;
