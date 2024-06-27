import type { FC } from "react";

interface SideCardProps {}

const sideCardTitle = ["프로필"];

const SideCard: FC<SideCardProps> = ({}) => {
  return (
    <div>
      SideCard
      <img src="https://i.imgur.com/pHotGCo.png" />
    </div>
  );
};
export default SideCard;
