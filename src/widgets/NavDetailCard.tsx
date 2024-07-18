import { useHoverPage } from "@/shared";
import { cls } from "hsh-utils-string";
import type { FC } from "react";
import { PageEnum } from "@/enums";
import EmptyBox from "./EmptyBox";

interface NavDetailCardProps {}

const NavDetailCard: FC<NavDetailCardProps> = ({}) => {
  const { hoverPageNum } = useHoverPage();
  const { PageToSections } = PageEnum;
  const hoverSections =
    PageToSections[hoverPageNum !== undefined ? hoverPageNum : "none"];
  const sectionLength = hoverSections.length;

  return (
    <>
      {Array.from({
        length: Math.max(5, sectionLength),
      }).map((_, idx) => {
        return (
          <li
            key={`NavDetailCard_${idx}`}
            className={cls(
              "absolute",
              "w-[120px]",
              "px-[12px]",
              "shadow-lg shadow-primary-shadow",
              "rounded-b-3xl",
              "text-center",
              "transition-all",
              "cursor-pointer",
              "text-shadow-lg",
              idx >= sectionLength
                ? cls(sectionLength !== 0 ? "h-[16px]" : "")
                : "text-[20px] py-[4px] hover:pb-[8px] hover:bg-primary-light hover:rounded-full hover:mt-[8px]"
            )}
            style={{ left: `${idx * 140 + 25}px` }}
          >
            {hoverSections[idx] || ""}
          </li>
        );
      })}
      <EmptyBox
        active={sectionLength > 5}
        distance={sectionLength * 140 + 25}
      />
    </>
  );
};
export default NavDetailCard;
