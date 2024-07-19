"use client";
import { cls } from "hsh-utils-string";
import { animated, useSpring } from "@react-spring/web";
import { useDrag, useScroll } from "@use-gesture/react";
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
  const [springProps, api] = useSpring(() => ({ x: 0, y: 0, opacity: 0 }));
  const { currentSection, setSideSection } = useSideSectionPage();

  const scrollSectionRef = useRef<HTMLDivElement | null>(null);
  const [isScrolledToEnd, setIsScrolledToEnd] = useState(false);
  const [isScrollable, setIsScrollable] = useState(false);

  const bind = useDrag(
    ({
      event, // 현재 드래그 이벤트에 대한 원시 이벤트 객체입니다. (예: 마우스 이벤트, 터치 이벤트)
      args, // useDrag 훅에 전달된 인수 배열입니다.
      down, // 드래그가 활성화되어 있는지 여부를 나타내는 부울 값입니다.
      movement: [movementX, movementY], // 드래그 시작 지점으로부터의 이동 거리를 나타내는 배열
      offset: [x, y], // 드래그가 시작된 이후의 총 오프셋을 나타내는 배열
      velocity: [velocityX, velocityY], // 현재 드래그 속도를 나타내는 배열
      delta: [deltaX, deltaY], // 이전 이벤트 이후의 변화량을 나타내는 배열
      direction, // 드래그 방향을 나타내는 배열
      initial: [initialX, initialY], // 드래그가 시작된 시점의 위치를 나타내는 배열
      dragging, // 현재 드래그 상태인지 여부를 나타내는 부울 값
    }) => {
      api.start({ x: movementX, y: movementY });

      setSideSection(sectionIdx);

      // 스크롤 가능 여부 확인
      if (scrollSectionRef.current) {
        const { scrollHeight, clientHeight } = scrollSectionRef.current;
        setIsScrollable(scrollHeight > clientHeight);
      }

      // 드래그가 끝난 후 원래 위치로 돌아가도록 설정
      if (!down) {
        api.start({ x: 0, y: 0 });
      }

      if (movementX > 100) {
        console.log("section Up");
      }
    }
  );

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
      scrollSectionRef.current.scrollTop = 0;
    }
  }, [currentSection]);

  return (
    <animated.section
      {...props}
      {...bind()}
      className={cls(
        "w-full h-[94%]",
        "absolute",
        "rounded-3xl",
        "shadow-lg",
        "bg-opacity-0"
      )}
      style={{
        x: springProps.x,
        y: springProps.y,
        zIndex: currentSection === sectionIdx ? 8 : 7 - sectionIdx,
        backgroundColor:
          currentSection === sectionIdx
            ? "rgba(224, 139, 102, 1)"
            : `rgba(245, 169, 127, ${1 - (sectionIdx * 2) / 10})`, // 배경 투명도 설정
      }}
    >
      <div className={cls("relative", "w-full h-full")}>
        <header
          className={cls(
            "flex justify-center items-end",
            "absolute top-[-39.5px]",
            "w-[100px] h-[40px]",
            "rounded-t-2xl",
            "transition-all",
            "cursor-pointer"
          )}
          style={{
            left: `${sectionIdx * 120 + 20}px`,
            backgroundColor:
              currentSection === sectionIdx
                ? "rgba(224, 139, 102, 1)"
                : `rgba(245, 169, 127, ${1 - (sectionIdx * 2) / 10})`, // 배경 투명도 설정
          }}
        >
          <b>{subHeading}</b>
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
    </animated.section>
  );
};
export default Section;
