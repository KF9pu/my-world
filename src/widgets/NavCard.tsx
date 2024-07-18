import { PageEnum } from "@/enums";
import { useHoverPage } from "@/shared";
import usePage from "@/shared/store/usePage";
import { cls } from "hsh-utils-string";
import type { FC } from "react";

interface NavCardProps {}

const NavCard: FC<NavCardProps> = ({}) => {
  const { pageNum, pageSet } = usePage();
  const { hoverPageNum, hoverPageSet } = useHoverPage();
  const { pageCnt, Page } = PageEnum;
  return (
    <div
      className={cls(
        "flex items-end",
        "w-[728px] h-1/2",
        "rounded-tl-full",
        "shadow-lg shadow-primary-shadow"
      )}
    >
      <ul className={cls("flex items-end", "relative", "w-full")}>
        {Array.from({ length: pageCnt }).map((_, idx) => {
          return (
            <li
              key={`NavCard_${idx}`}
              className={cls(
                "flex justify-center",
                "absolute",
                "w-[100px] h-fit",
                "rounded-t-3xl",
                "py-[4px]",
                "transition-all",
                "cursor-pointer",
                "text-[20px]",
                "text-shadow-lg",
                pageNum === idx
                  ? "bg-primary-light font-bold text-primary-dark-contrast pt-[12px]"
                  : "hover:text-primary-light-contrast hover:font-bold hover:bg-accent hover:pt-[12px]",
                hoverPageNum === idx
                  ? "text-accent-contrast font-bold bg-accent pt-[12px]"
                  : ""
              )}
              style={{ left: `${idx * 140 + 93}px` }}
              onMouseOver={() => {
                hoverPageSet(pageNum === idx ? undefined : idx);
              }}
              onClick={() => {
                pageSet(idx);
                hoverPageSet(undefined);
              }}
            >
              {Page[idx]}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default NavCard;
