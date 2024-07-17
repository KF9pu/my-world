"use client";
import { PageEnum } from "@/enums";
import { useHoverPage } from "@/shared";
import { usePage, usePageMenu } from "@/shared";
import {
  NavCard,
  NavDetailCard,
  YFlipBox,
  ArrowRight,
  EmptyBox,
} from "@/widgets";
import { useSpring, a } from "@react-spring/web";
import { cls } from "hsh-utils-string";
import { isRSCRequestCheck } from "next/dist/server/base-server";
import Image from "next/image";
import { useRef, useState, useEffect, type FC } from "react";

interface NavbarProps {}

const images = [
  "/images/my-poto.jpg",
  "https://i.imgur.com/pHotGCo.png",
  "https://i.imgur.com/3uQ5T3t.jpeg",
  "https://i.imgur.com/NJDh4I1.jpeg",
];

const Navbar: FC<NavbarProps> = ({}) => {
  const { pageNum } = usePage();
  const { hoverPageNum, hoverPageSet } = useHoverPage();
  const [navHover, setNavHover] = useState(false);
  const { hoverSections } = usePageMenu();

  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [isScrolledToEnd, setIsScrolledToEnd] = useState(false);

  const navSpringProps = useSpring({
    width: navHover ? 984 : 200,
    config: { tension: 0, friction: 0 },
  });

  const navTapSpringProps = useSpring({
    width: navHover ? 760 : 0,
    opacity: navHover ? 1 : 0,
    config: { tension: 0, friction: 0 },
  });

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } =
          scrollContainerRef.current;
        if (scrollLeft + clientWidth >= scrollWidth) {
          setIsScrolledToEnd(true);
        } else {
          setIsScrolledToEnd(false);
        }
      }
    };

    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
      handleScroll();
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  useEffect(() => {
    setIsScrolledToEnd(false);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = 0;
    }
  }, [hoverPageNum]);

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
          <div
            className={cls(
              "flex items-end",
              "w-[728px] h-1/2",
              "rounded-tl-full",
              "shadow-lg shadow-primary-shadow"
            )}
          >
            <ul className={cls("flex items-end", "relative", "w-full")}>
              {Array.from({ length: PageEnum.pageCnt }).map((_, idx) => {
                return <NavCard key={`NavCard_${idx}`} pageIndex={idx} />;
              })}
            </ul>
          </div>
          <div
            className={cls("flex items-start", "relative", "w-[728px] h-1/2")}
          >
            <div
              ref={scrollContainerRef}
              className={cls(
                "flex items-start",
                "relative",
                "w-full h-full",
                "overflow-x-scroll",
                "rounded-bl-full",
                "shadow-lg shadow-primary-shadow"
              )}
            >
              <ul className={cls("flex", "w-full h-full", "relative")}>
                {Array.from({ length: Math.max(5, hoverSections.length) }).map(
                  (_, idx) => {
                    return (
                      <NavDetailCard key={`NavDetailCard_${idx}`} idx={idx} />
                    );
                  }
                )}
                <EmptyBox
                  active={hoverSections.length > 5}
                  distance={hoverSections.length * 140 + 25}
                />
              </ul>
            </div>
            <ArrowRight
              active={hoverSections.length > 5}
              arrowCnt={3}
              addStyleBox={cls(
                "flex justify-center items-center",
                "absolute right-[8px] bottom-[8px]",
                "w-fit h-fit",
                "transition-opacity",
                isScrolledToEnd ? "opacity-0" : ""
              )}
              addStyleArrow={cls("")}
              ping
            />
          </div>
        </a.div>
      </a.div>
    </nav>
  );
};
export default Navbar;
