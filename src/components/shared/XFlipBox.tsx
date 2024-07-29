"use client";
import { FC, ReactNode } from "react";
import { useSpring, a } from "@react-spring/web";
import usePage from "@/libs/store/usePage";
import { cls } from "hsh-utils-string";

interface XFlipBoxProps {
  children: ReactNode;
  width: number;
  height?: number;
}

const XFlipBox: FC<XFlipBoxProps> = ({ children, height, width }) => {
  const { pageNum } = usePage();

  const { transform, opacity } = useSpring({
    opacity: pageNum % 2 === 0 ? 1 : 0,
    transform: `perspective(600px) rotateX(${pageNum % 2 === 0 ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  return (
    <div
      className={cls("relative", "rounded-full")}
      style={{
        width: `${width}px`,
        height: height ? `${height}px` : "fit-content",
      }}
    >
      <a.div
        className={cls("absolute w-full h-full", "rounded-full")}
        style={{
          opacity: opacity.to((o) => 1 - o),
          transform,
        }}
      >
        {children}
      </a.div>
      <a.div
        className={cls("absolute w-full h-full", "rounded-full")}
        style={{
          opacity,
          transform,
          rotateX: "180deg",
        }}
      >
        {children}
      </a.div>
    </div>
  );
};

export default XFlipBox;
