import { PageEnum } from "@/enums";
import { useHoverPage, usePage } from "@/shared";
import { cls } from "hsh-utils-string";
import type { FC } from "react";

interface FlipNavCardProps {}

const FlipNavCard: FC<FlipNavCardProps> = ({}) => {
  const { hoverPageNum } = useHoverPage();
  return (
    <div className={cls("h-1/2", "shadow-lg", "p-[12px]")}>
      {hoverPageNum !== undefined ? PageEnum.Page[hoverPageNum] : ""}
    </div>
  );
};
export default FlipNavCard;
