// hooks/usePageMenu.ts
import { PageEnum } from "@/enums";
import { useState, useEffect } from "react";
import useHoverPage from "./store/useHoverPage";

const usePageMenu = () => {
  const [sections, setSections] = useState<string[]>([]);
  const { hoverPageNum } = useHoverPage();

  useEffect(() => {
    if (hoverPageNum === undefined) return setSections([]);
    const pageEnumValue = PageEnum.Page[hoverPageNum];
    const generateSections = () => {
      switch (pageEnumValue) {
        case PageEnum.Page[0]:
          return ["Intro", "Settings", "Chronicles", "Activity", "nice", "zz"];
        case PageEnum.Page[1]:
          return ["News", "Events", "Maps", "nice", "zz", "nice", "zz"];
        case PageEnum.Page[2]:
          return ["Photos", "Videos", "Albums", "nice", "zz", "nice", "zz"];
        case PageEnum.Page[3]:
          return [
            "Restaurants",
            "Cafes",
            "Reviews",
            "nice",
            "zz",
            "nice",
            "zz",
          ];
        default:
          return [];
      }
    };

    setSections(generateSections());
  }, [hoverPageNum]);

  return {
    sections,
    pageCnt: Object.keys(PageEnum.Page).filter((key) => isNaN(Number(key)))
      .length,
  };
};

export default usePageMenu;
