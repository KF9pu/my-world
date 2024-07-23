"use client";
import { cls } from "hsh-utils-string";
import { useScroll } from "@use-gesture/react";
import {
  useEffect,
  useRef,
  useState,
  type FC,
  type HTMLAttributes,
  type ReactNode,
} from "react";
import { useSideSectionPage } from "@/shared";
import { ArrowRight } from "..";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  subHeading: string;
  sectionIdx: number;
}

const Section: FC<SectionProps> = ({
  children,
  subHeading,
  sectionIdx,
  ...props
}) => {
  const { currentSection, setSideSection } = useSideSectionPage();

  const scrollSectionRef = useRef<HTMLDivElement | null>(null);
  const [isScrolledToEnd, setIsScrolledToEnd] = useState(false);
  const [isScrollable, setIsScrollable] = useState(false);

  const handleScroll = ({ xy: [x, y] }: { xy: [number, number] }) => {
    if (scrollSectionRef.current) {
      const { scrollTop, scrollHeight, clientHeight } =
        scrollSectionRef.current;
      const isBottom = scrollTop + clientHeight + 10 >= scrollHeight;

      if (isBottom && !isScrolledToEnd) {
        setIsScrolledToEnd(true);
      } else if (!isBottom && isScrolledToEnd) {
        setIsScrolledToEnd(false);
      }
    }
  };

  useScroll(handleScroll, {
    target: scrollSectionRef,
    eventOptions: { passive: true },
  });

  useEffect(() => {
    setIsScrolledToEnd(false);
    if (scrollSectionRef.current) {
      const { scrollHeight, clientHeight } = scrollSectionRef.current;
      setIsScrollable(scrollHeight > clientHeight);
      scrollSectionRef.current.scrollTop = 0;
    }
  }, [currentSection]);

  return (
    <section
      {...props}
      className={cls(
        "w-full h-[94%]",
        "absolute",
        "rounded-3xl",
        "shadow-lg",
        "bg-opacity-0"
      )}
      style={{
        zIndex: currentSection === sectionIdx ? 8 : 7 - sectionIdx,
        backgroundColor:
          currentSection === sectionIdx
            ? "rgba(224, 139, 102, 1)"
            : `rgba(245, 169, 127, ${1 - (sectionIdx * 2) / 10})`, // 배경 투명도 설정
      }}
    >
      <div className={cls("relative", "w-full h-full")}>
        <header
          onClick={() => setSideSection(sectionIdx)}
          className={cls(
            "flex justify-center items-end",
            "absolute top-[-39.5px]",
            "w-[100px] h-[40px]",
            "rounded-t-2xl",
            "transition-all",
            "cursor-pointer",
            currentSection === sectionIdx ? "" : "group"
          )}
          style={{
            left: `${sectionIdx * 120 + 20}px`,
            backgroundColor:
              currentSection === sectionIdx
                ? "rgba(224, 139, 102, 1)"
                : `rgba(245, 169, 127, ${1 - (sectionIdx * 2) / 10})`, // 배경 투명도 설정
          }}
        >
          <b className="group-hover:animate-smallBounce group-hover:text-[28px]">
            {subHeading}
          </b>
        </header>
        {currentSection === sectionIdx ? (
          <div
            className={cls(
              "relative",
              "w-full h-full",
              "transition-all",
              "p-[20px]"
            )}
          >
            <ArrowRight
              active={isScrollable}
              arrowCnt={3}
              scaleUp
              addStyleBox={cls(
                "flex justify-center items-center",
                "absolute right-[30px] bottom-[60px]",
                "w-fit h-fit",
                "rotate-90",
                "transition-opacity",
                isScrolledToEnd ? "opacity-0" : "opacity-1"
              )}
              ping
            />
            <div
              ref={scrollSectionRef}
              className={cls(
                "w-full h-full",
                "overflow-y-scroll",
                "rounded-3xl shadow-lg",
                "px-[20px] py-[20px]",
                "bg-primary-light"
              )}
            >
              {children}
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </section>
  );
};
export default Section;
