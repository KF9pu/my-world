"use client";
import { cls } from "hsh-utils-string";
import type { FC } from "react";
import FlipImage from "@/widgets/FlipImage";
import Navbar from "./Navbar";

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = ({}) => {
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
      <div className="mt-[200px]">aaaaaaaaa</div>
    </aside>
  );
};
export default Sidebar;
