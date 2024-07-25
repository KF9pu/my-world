"use client";
import { useHoverPage } from "@/shared";
import { usePage } from "@/shared";
import { NavCard, NavDetailCard, YFlipBox } from "@/widgets";
import { useSpring, a } from "@react-spring/web";
import { cls } from "hsh-utils-string";
import Image from "next/image";
import { useState, useEffect, type FC } from "react";

interface NavbarProps {}

const images = [
  "/images/my-poto.jpg",
  "https://i.imgur.com/pHotGCo.png",
  "https://i.imgur.com/3uQ5T3t.jpeg",
  "https://i.imgur.com/NJDh4I1.jpeg",
];

const Navbar: FC<NavbarProps> = ({}) => {
  const { pageNum } = usePage();
  const { hoverPageSet } = useHoverPage();
  const [navHover, setNavHover] = useState(false);

  const navSpringProps = useSpring({
    width: navHover ? 984 : 200,
    config: { tension: 0, friction: 0 },
  });

  const navTapSpringProps = useSpring({
    width: navHover ? 760 : 0,
    opacity: navHover ? 1 : 0,
    config: { tension: 0, friction: 0 },
  });

  return (
    <nav
      className={cls("absolute left-[20px] top-[20px]", "w-full", "z-[10]")}
      // onClick={() => setNavHover(true)}
      onMouseOver={() => {
        setNavHover(true);
      }}
      onMouseLeave={() => {
        hoverPageSet(undefined);
        setNavHover(false);
      }}
    >
      <a.div
        className={cls(
          "flex items-center gap-[60px]",
          "shadow-lg shadow-primary-shadow",
          navHover ? "rounded-l-full" : "rounded-full",
          "p-[20px]",
          "transition-all duration-300",
          "overflow-hidden",
          "bg-primary"
        )}
        style={navSpringProps}
      >
        {/* react spring 버그인지 div로 한 번 감싸주어야 이미지가 깨지지 않음 */}
        <div>
          <YFlipBox addStyle={"w-[160px] h-[160px]"} rounded shadow>
            <Image
              src={images[pageNum]}
              fill
              alt="hong"
              className="rounded-full w-full h-full z-20"
            />
          </YFlipBox>
        </div>
        <a.div
          className={cls(
            "flex flex-col",
            "w-full h-[120px]",
            "transition-all duration-300",
            "rounded-l-full",
            "bg-primary-dark"
          )}
          style={navTapSpringProps}
        >
          <NavCard />
          <NavDetailCard />
        </a.div>
      </a.div>
    </nav>
  );
};
export default Navbar;
