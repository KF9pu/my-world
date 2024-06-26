"use client";
import { cls } from "hsh-utils-string";
import type { FC } from "react";
import FlipImage from "@/widgets/FlipImage";
import Navbar from "./Navbar";
import { usePage } from "@/shared";
import { SideCard } from "@/widgets";

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = ({}) => {
  const { pageNum } = usePage();
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
      <div className={cls("mt-[200px]", "shadow-lg")}>
        <SideCard />
      </div>
    </aside>
  );
};
export default Sidebar;
