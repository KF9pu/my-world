import usePage from "@/shared/store/usePage";
import type { FC } from "react";

interface NavCardProps {
  pageIndex: number;
}

const pageTitle = ["Profile", "World", "Gellary", "??"];

const NavCard: FC<NavCardProps> = ({ pageIndex }) => {
  const { pageNum, pageSet } = usePage();
  return (
    <li className="" onClick={() => pageSet(pageIndex)}>
      {pageTitle[pageIndex]}
    </li>
  );
};
export default NavCard;
