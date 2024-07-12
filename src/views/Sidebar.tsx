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
          "shadow-lg shadow-primary-shadow",
          "rounded-full",
          "pt-[210px]",
          "text-primary-dark-contrast"
        )}
      >
        <h2
          className={cls(
            "w-fit",
            "font-bold",
            "px-[24px] py-[12px]",
            "text-[24px]",
            "text-shadow-lg"
          )}
        >
          {PageEnum.Page[pageNum]}
        </h2>
        <div className={cls("relative w-[180px] h-[300px]")}>
          <div
            ref={scrollSideRef}
            className={cls(
              "flex",
              "overflow-y-scroll",
              "w-full h-full",
              "rounded-2xl shadow-lg shadow-primary-shadow",
              "bg-primary"
            )}
          >
            <YFlipBox
              fit
              addStyle={cls(
                "flex",
                "w-full h-[300px]",
                sections.length > 6 ? "" : "items-center"
              )}
            >
              <ul
                className={cls(
                  "flex flex-col items-center gap-[12px] ",
                  sections.length > 6 ? "py-[20px]" : ""
                )}
              >
                {sections.map((section, idx) => {
                  return (
                    <li
                      className={cls(
                        "text-[24px] text-center text-shadow-lg",
                        "w-[80%]",
                        "transition-all",
                        "rounded-full",
                        "cursor-pointer",
                        "hover:bg-primary-dark hover:shadow-lg hover:shadow-primary-dark-shadow"
                      )}
                      onClick={() => {
                        console.log("diqdiq");
                      }}
                      key={`sidevar_${idx}`}
                    >
                      {section}
                    </li>
                  );
                })}
              </ul>
            </YFlipBox>
          </div>
          <ArrowRight
            active={sections.length > 6}
            arrowCnt={3}
            addStyleBox={cls(
              "flex justify-center items-center",
              "absolute right-0 bottom-[24px]",
              "w-fit h-fit",
              "rotate-90",
              "transition-opacity",
              isScrolledToEnd ? "opacity-0" : "opacity-1"
            )}
            ping
          />
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
