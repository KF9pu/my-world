"use client";
import { PageEnum } from "@/enums";
import { usePage } from "@/shared";
import { useEffect, useRef, useState, type FC } from "react";
import { cls } from "hsh-utils-string";
import usePageMenu from "@/shared/usePageMenu";
import YFlipBox from "../widgets/YFlipBox";
import { ArrowRight } from "@/widgets";

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = ({}) => {
  const { pageNum } = usePage();
  const { sections } = usePageMenu();

  const scrollSideRef = useRef<HTMLDivElement | null>(null);
  const [isScrolledToEnd, setIsScrolledToEnd] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollSideRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = scrollSideRef.current;

        if (scrollTop + clientHeight >= scrollHeight) {
          setIsScrolledToEnd(true);
        } else {
          setIsScrolledToEnd(false);
        }
      }
    };

    const scrollContainer = scrollSideRef.current;
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
    if (scrollSideRef.current) {
      scrollSideRef.current.scrollTop = 0;
    }
  }, [pageNum]);

  return (
    <div className={cls("w-full h-full", " py-[20px] px-[20px]")}>
      <div
        className={cls(
          "flex flex-col items-center gap-[12px]",
          "w-[200px] h-full",
          "shadow-lg",
          "rounded-full",
          "pt-[210px]",
          "bg-blue-200"
        )}
      >
        <h2
          className={cls(
            "w-fit",
            "font-bold",
            "text-white",
            "rounded-xl shadow-lg",
            "px-[24px] py-[12px]",
            "text-[24px]"
          )}
        >
          {PageEnum.Page[pageNum]}
        </h2>
        <div
          className={cls(
            "w-[180px]",
            "relative",
            "border",
            "rounded-2xl shadow-lg",
            "py-[12px] px-[20px]"
          )}
        >
          <div
            ref={scrollSideRef}
            className={cls(
              "overflow-y-scroll",
              sections.length > 5 ? "h-[320px]" : "h-[300px]"
            )}
          >
            <YFlipBox>
              <ul className={cls("flex flex-col gap-[20px]")}>
                {sections.map((section, idx) => {
                  return (
                    <li className={cls("text-[24px]")} key={`sidevar_${idx}`}>
                      {section}
                    </li>
                  );
                })}
              </ul>
            </YFlipBox>
          </div>
          <ArrowRight
            sectionsLength={sections.length}
            arrowCnt={3}
            addStyleBox={cls(
              "flex justify-center items-center",
              "absolute right-0 bottom-[24px]",
              "w-fit h-fit",
              "rotate-90",
              "transition-opacity",
              isScrolledToEnd ? "opacity-0" : "opacity-1"
            )}
            addStyleArrow={cls("")}
            ping
          />
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
