"use client";
import { useHoverPage } from "@/shared";
import usePage from "@/shared/store/usePage";
import { FlipImage, FlipNavCard, NavCard } from "@/widgets";
import { cls } from "hsh-utils-string";
import { useState, type FC } from "react";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  const { hoverPageSet } = useHoverPage();
  const [navHover, setNavHover] = useState(false);
  return (
    <nav
      className={cls(
        "flex justify-between items-center",
        "absolute left-[20px] top-[20px]",
        "hover:w-[984px] h-[200px]",
        "shadow-lg",
        navHover ? "rounded-l-full" : "rounded-full",
        "p-[20px]",
        "select-none",
        "transition-all",
        "overflow-hidden",
        "bg-red-200"
      )}
      onMouseOver={() => setNavHover(true)}
      onMouseLeave={() => {
        hoverPageSet(undefined);
        setNavHover(false);
      }}
    >
      <FlipImage />
      <div
        className={cls(
          "flex flex-col gap-[8px]",
          "h-full",
          "transition-all",
          navHover ? "" : "hidden"
        )}
      >
        <ul
          className={cls(
            "flex items-end gap-2",
            "w-[750px] h-1/2",
            "pb-[10px]"
          )}
        >
          <div
            className={cls(
              "flex justify-between items-end gap-[8px]",
              "relative",
              "w-full"
            )}
          >
            <NavCard pageIndex={0} />
            <NavCard pageIndex={1} />
            <NavCard pageIndex={2} />
            <NavCard pageIndex={3} />
          </div>
        </ul>
        <FlipNavCard />
      </div>
    </nav>
  );
};
export default Navbar;
