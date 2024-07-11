import usePageMenu from "@/shared/usePageMenu";
import { cls } from "hsh-utils-string";
import type { FC } from "react";

interface NavDetailCardProps {
  idx: number;
}

const NavDetailCard: FC<NavDetailCardProps> = ({ idx }) => {
  const { hoverSections } = usePageMenu();
  return (
    <li
      className={cls(
        "absolute",
        "w-[120px]",
        "px-[12px]",
        "shadow-lg",
        "rounded-b-3xl",
        "text-center",
        "transition-all",
        "cursor-pointer",
        idx >= hoverSections.length
          ? cls(hoverSections.length != 0 ? "h-[16px]" : "")
          : "text-[20px] py-[4px] hover:pb-[8px] hover:bg-[#fff5d4] hover:rounded-full hover:mt-[8px]"
      )}
      style={{ left: `${idx * 130 + 35}px` }}
    >
      {hoverSections[idx] || ""}
    </li>
  );
};
export default NavDetailCard;
