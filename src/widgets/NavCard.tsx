import usePage from "@/shared/store/usePage";
import type { FC } from "react";

interface NavCardProps {
  pageIndex: number;
}

const pageTitle = ["page0", "page1", "page2", "page3"];

const NavCard: FC<NavCardProps> = ({ pageIndex }) => {
  const { pageNum, pageDown, pageUp, pageSet } = usePage();
  return <li onClick={() => pageSet(pageIndex)}>{pageTitle[pageIndex]}</li>;
};
export default NavCard;
