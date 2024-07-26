"use client";
import { PageEnum } from "@/enums";
import { usePage, useSideSectionPage } from "@/shared";
import { useEffect, useRef, useState, type FC } from "react";
import { cls } from "hsh-utils-string";
import YFlipBox from "../widgets/YFlipBox";
import { ArrowRight, IconGithub, IconWishket } from "@/widgets";

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = ({}) => {
  const { pageNum } = usePage();
  const { Page, PageToSections } = PageEnum;
  const { currentSection, setSideSection } = useSideSectionPage();

  const sideSection = PageToSections[pageNum];
  const sideSectionLength = sideSection.length;

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
    <div className={cls("w-full h-full", "py-[20px] px-[20px]")}>
      <div
        className={cls(
          "flex flex-col items-center gap-[20px]",
          "w-[200px] h-full",
          "shadow-lg shadow-primary-shadow",
          "rounded-full",
          "pt-[210px]",
          "bg-primary-light",
          "text-primary-dark-contrast"
        )}
      >
        <h2
          className={cls(
            "w-fit",
            "font-bold",
            "px-[24px] pt-[12px]",
            "text-[24px]",
            "text-shadow-lg"
          )}
        >
          {Page[pageNum]}
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
                sideSectionLength > 6 ? "" : "items-center",
                "z-0"
              )}
            >
              <ul
                className={cls(
                  "flex flex-col items-center gap-[12px] ",
                  sideSectionLength > 6 ? "py-[20px]" : ""
                )}
              >
                {sideSection.map((section, idx) => {
                  return (
                    <li
                      key={`sideBar_sections_${idx}`}
                      onMouseOver={() => setSideSection(idx)}
                      className={cls(
                        "text-[24px] text-center text-shadow-lg",
                        "w-[80%]",
                        "transition-all",
                        "rounded-full",
                        "cursor-pointer",
                        "shadow-primary-dark-shadow",
                        currentSection === idx
                          ? "bg-primary-dark shadow-lg text-primary-dark-contrast"
                          : "text-primary-light-contrast"
                      )}
                    >
                      {section}
                    </li>
                  );
                })}
              </ul>
            </YFlipBox>
          </div>
          <ArrowRight
            active={sideSectionLength > 6}
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
        <div
          className={cls(
            "flex items-center justify-around",
            // "absolute top-0 right-0",
            "w-[140px] h-fit"
          )}
        >
          <IconGithub />
          <IconWishket />
          {/* TODO:Notin Icon 생성 - Notion 이력서? 연결 */}
          {/* <NextPageButton /> */}
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
