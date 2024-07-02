import { usePage } from "@/shared";
import { cls } from "hsh-utils-string";
import type { FC } from "react";

interface FlipSideCardProps {}

const FlipSideCard: FC<FlipSideCardProps> = ({}) => {
  const { pageNum } = usePage();

  return (
    <div className={cls("relative", "w-full", "shadow-lg")}>
      <div className={cls("absolute")}>Front</div>
      <div className={cls("absolute")}>Back</div>
    </div>
  );
};
export default FlipSideCard;
