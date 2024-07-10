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
        idx >= hoverSections.length
          ? hoverSections.length != 0
            ? "h-[16px]"
            : ""
          : "py-[4px] hover:pb-[12px] hover:bg-slate-600",
        "shadow-lg",
        "rounded-b-3xl",
        "text-center",
        "transition-all",
        "cursor-pointer"
      )}
      style={{ left: `${idx * 130 + 35}px` }}
    >
      {hoverSections[idx] || ""}
    </li>
  );
};
export default NavDetailCard;
