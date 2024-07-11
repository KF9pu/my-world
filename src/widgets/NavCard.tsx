import { PageEnum } from "@/enums";
import { useHoverPage } from "@/shared";
import usePage from "@/shared/store/usePage";
import { cls } from "hsh-utils-string";
import type { FC } from "react";

interface NavCardProps {
  pageIndex: number;
}

const NavCard: FC<NavCardProps> = ({ pageIndex }) => {
  const { pageNum, pageSet } = usePage();
  const { hoverPageNum, hoverPageSet } = useHoverPage();
  return (
    <li
      className={cls(
        "flex justify-center",
        "absolute",
        "w-[100px] h-fit",
        "shadow-lg",
        "rounded-t-3xl",
        "py-[4px]",
        "transition-all",
        "cursor-pointer",
        "text-[20px]",
        pageNum === pageIndex
          ? "bg-[#FF9200] font-bold text-white pt-[12px]"
          : "hover:text-white hover:font-bold hover:bg-[#FFC300] hover:pt-[12px]",
        hoverPageNum === pageIndex
          ? "text-white font-bold bg-[#FFC300] pt-[12px]"
          : ""
      )}
      style={{ left: `${pageIndex * 140 + 93}px` }}
      onMouseOver={() => {
        hoverPageSet(pageNum === pageIndex ? undefined : pageIndex);
      }}
      onClick={() => {
        pageSet(pageIndex);
        hoverPageSet(undefined);
      }}
    >
      {PageEnum.Page[pageIndex]}
    </li>
  );
};
export default NavCard;
