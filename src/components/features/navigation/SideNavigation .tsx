"use client";
import { cls } from "hsh-utils-string";
import { type FC } from "react";
import { Footer, Navbar, Sidebar } from "../..";

interface SideNavigationProps {}

const SideNavigation: FC<SideNavigationProps> = ({}) => {
  return (
    <aside
      className={cls(
        "flex flex-col items-center gap-[20px]",
        "relative",
        "w-[240px] h-full",
        "shadow-lg shadow-primary-shadow",
        "rounded-l-2xl",
        "bg-primary-dark",
        "select-none"
      )}
    >
      <Navbar />
      <Sidebar />
      <Footer />
    </aside>
  );
};
export default SideNavigation;
