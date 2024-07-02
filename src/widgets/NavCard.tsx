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
  const { hoverPageSet } = useHoverPage();
  return (
    <li
      className={cls(
        "flex justify-center items-center",
        "absolute",
        "w-[100px] h-fit",
        "shadow-md",
        "rounded-full",
        "px-[12px] py-[8px]",
        "transition-all",
        pageNum === pageIndex
          ? "bg-black text-white"
          : "hover:py-[12px] hover:text-[20px]"
      )}
      style={{ left: `${pageIndex * 110 + 20}px` }}
      onMouseOver={() =>
        hoverPageSet(pageNum === pageIndex ? undefined : pageIndex)
      }
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
