import { PageEnum } from "@/enums";
import { usePage } from "@/shared";
import type { FC } from "react";
import FlipSideCard from "./FlipSideCard";
import { cls } from "hsh-utils-string";

interface SideCardProps {}

const SideCard: FC<SideCardProps> = ({}) => {
  const { pageNum } = usePage();
  return (
    <div className={cls("w-full h-full", " py-[20px] px-[20px]")}>
      <div
        className={cls(
          "flex flex-col",
          "w-[200px] h-full",
          "shadow-lg",
          "rounded-t-full",
          "pt-[200px]",
          "bg-blue-200"
        )}
      >
        <h2 className={cls("w-full")}>{PageEnum.Page[pageNum]}</h2>
        <FlipSideCard />
      </div>
    </div>
  );
};
export default SideCard;
