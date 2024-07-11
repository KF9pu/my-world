"use client";
import { cls } from "hsh-utils-string";
import type { FC } from "react";
import { Navbar, Sidebar } from "./";
import { usePage } from "@/shared";

interface SideNavigationProps {}

const SideNavigation: FC<SideNavigationProps> = ({}) => {
  return (
    <aside
      className={cls(
        "flex flex-col items-center gap-[20px]",
        "relative",
        "w-[240px] h-full",
        "shadow-lg",
        "rounded-l-2xl"
      )}
    >
      <Navbar />
      <Sidebar />
    </aside>
  );
};
export default SideNavigation;
