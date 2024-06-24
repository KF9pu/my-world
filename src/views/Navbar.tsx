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
        "rounded-full",
        "select-none"
      )}
    >
      <div className={cls("rounded-full", "shadow-lg", "m-[10px]")}>
        <FlipImage />
      </div>
      <ul className={cls("flex gap-2", "shadow-lg")}>
        <NavCard pageIndex={0} />
        <NavCard pageIndex={1} />
        <NavCard pageIndex={2} />
        <NavCard pageIndex={3} />
      </ul>
    </nav>
  );
};
export default Navbar;
