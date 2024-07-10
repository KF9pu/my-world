// hooks/usePageMenu.ts
import { PageEnum } from "@/enums";
import { useState, useEffect } from "react";
import useHoverPage from "./store/useHoverPage";
import usePage from "./store/usePage";

const usePageMenu = () => {
  const [sections, setSections] = useState<string[]>([]);
  const [hoverSections, setHoverSections] = useState<string[]>([]);
  const { pageNum } = usePage();
  const { hoverPageNum } = useHoverPage();

  const generateSections = (pageNum: number) => {
    const pageEnumValue = PageEnum.Page[pageNum];

    switch (pageEnumValue) {
      case PageEnum.Page[0]:
        return [
          "Intro",
          "Settings",
          "Chronicles",
          "Activity",
          "nice",
          "zz",
          "Settings",
          "Chronicles",
          "Activity",
          "nice",
          "zz",
          "Settings",
          "Chronicles",
          "Activity",
          "nice",
          "zz",
          "Settings",
          "Chronicles",
          "Activity",
          "nice",
          "zz",
          "Chronicles",
          "Activity",
          "nice",
          "zz",
          "Chronicles",
          "Activity",
          "nice",
          "zz",
          "Chronicles",
          "Activity",
          "nice",
          "zz",
          "Chronicles",
          "Activity",
          "nice",
          "zz",
        ];
      case PageEnum.Page[1]:
        return ["News", "Events", "Maps", "nice", "zz", "nice", "zz"];
      case PageEnum.Page[2]:
        return ["Photos", "Videos", "Albums", "nice", "zz", "nice", "zz"];
      case PageEnum.Page[3]:
        return ["Restaurants", "Cafes", "Reviews", "nice", "zz", "nice", "zz"];
      default:
        return [];
    }
  };

  useEffect(() => {
    if (pageNum === undefined) return setSections([]);
    setSections(generateSections(pageNum));
  }, [pageNum]);

  useEffect(() => {
    if (hoverPageNum === undefined) return setHoverSections([]);
    setHoverSections(generateSections(hoverPageNum));
  }, [hoverPageNum]);

  return {
    sections,
    hoverSections,
    pageCnt: Object.keys(PageEnum.Page).filter((key) => isNaN(Number(key)))
      .length,
  };
};

export default usePageMenu;
