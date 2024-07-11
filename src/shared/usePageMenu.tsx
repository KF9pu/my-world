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
          "소개",
          "프로젝트",
          "연혁",
          "활동",
          "프로젝트",
          "연혁",
          "활동",
          "프로젝트",
          "연혁",
          "활동",
          "프로젝트",
          "연혁",
          "활동",
        ];
      case PageEnum.Page[1]:
        return ["갤러리", "플레이센터", "-"];
      case PageEnum.Page[2]:
        return ["내 맛집", "방송맛집", "제철음식", "로컬음식"];
      case PageEnum.Page[3]:
        return [];
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
