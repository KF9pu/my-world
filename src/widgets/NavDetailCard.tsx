import { useHoverPage, usePage, useSideSectionPage } from "@/shared";
import { cls } from "hsh-utils-string";
import { useEffect, useRef, useState, type FC } from "react";
import { PageEnum } from "@/enums";
import EmptyBox from "./EmptyBox";
import ArrowRight from "./ArrowRight";

interface NavDetailCardProps {}

const NavDetailCard: FC<NavDetailCardProps> = ({}) => {
  const { hoverPageNum, hoverPageSet } = useHoverPage();
  const { pageSet } = usePage();
  const { setSideSection } = useSideSectionPage();
  const { PageToSections } = PageEnum;

  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [isScrolledToEnd, setIsScrolledToEnd] = useState(false);

  const hoverSections =
    PageToSections[hoverPageNum !== undefined ? hoverPageNum : "none"];
  const sectionLength = hoverSections.length;

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
    <div className={cls("flex items-start", "relative", "w-[728px] h-1/2")}>
      <div
        ref={scrollContainerRef}
        className={cls(
          "flex items-start",
          "relative",
          "w-full h-full",
          "overflow-x-scroll",
          "rounded-bl-full",
          "shadow-lg shadow-primary-shadow",
          hoverPageNum === undefined ? "bg-primary-light" : "bg-accent"
        )}
      >
        <ul className={cls("flex", "w-full h-full", "relative")}>
          {Array.from({
            length: Math.max(5, sectionLength),
          }).map((_, idx) => {
            return (
              <li
                onClick={() => {
                  pageSet(hoverPageNum ?? 0);
                  setSideSection(idx);
                  hoverPageSet(undefined);
                }}
                key={`NavDetailCard_${idx}`}
                className={cls(
                  "absolute",
                  "w-[120px]",
                  "px-[12px]",
                  "shadow-lg shadow-primary-shadow",
                  "rounded-b-3xl",
                  "text-center",
                  "transition-all",
                  "cursor-pointer",
                  "text-shadow-lg",
                  idx >= sectionLength
                    ? cls(sectionLength !== 0 ? "h-[16px]" : "")
                    : "text-[20px] py-[4px] hover:bg-primary hover:rounded-full hover:mt-[8px]"
                )}
                style={{ left: `${idx * 140 + 25}px` }}
              >
                {hoverSections[idx] || ""}
              </li>
            );
          })}
          <EmptyBox
            active={sectionLength > 5}
            distance={sectionLength * 140 + 25}
          />
        </ul>
      </div>
      <ArrowRight
        active={sectionLength > 5}
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
  );
};
export default NavDetailCard;
