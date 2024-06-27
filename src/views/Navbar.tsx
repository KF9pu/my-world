"use client";
import usePage from "@/shared/store/usePage";
import { FlipImage, NavCard } from "@/widgets";
import { cls } from "hsh-utils-string";
import type { FC } from "react";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <nav
      className={cls(
        "flex items-center gap-[20px]",
        "absolute left-[10px] top-[10px]",
        "w-[1004px] h-fit",
        "shadow-lg",
        "rounded-l-full rounded-r-2xl",
        "select-none"
      )}
    >
      <FlipImage />
      <ul className={cls("flex gap-2", "w-[790px]", "shadow-lg", "p-[20px]")}>
        <NavCard pageIndex={0} />
        <NavCard pageIndex={1} />
        <NavCard pageIndex={2} />
        <NavCard pageIndex={3} />
      </ul>
    </nav>
  );
};
export default Navbar;
