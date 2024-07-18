"use client";
import { FC, MutableRefObject, ReactNode, useEffect, useState } from "react";
import { useSpring, a } from "@react-spring/web";
import usePage from "@/shared/store/usePage";
import { cls } from "hsh-utils-string";

interface YFlipBoxProps {
  children: ReactNode;
  rounded?: true;
  shadow?: true;
  scrollY?: true;
  addStyle?: any;
  fit?: true;
}

const YFlipBox: FC<YFlipBoxProps> = ({
  children,
  rounded,
  shadow,
  scrollY,
  addStyle,
  fit,
}) => {
  const { pageNum } = usePage();
  const [isRotate, setIsRotate] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: isRotate ? 1 : 0,
    transform: `perspective(600px) rotateY(${isRotate ? 0 : 180}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  useEffect(() => {
    setIsRotate((prev) => !prev);
  }, [pageNum]);

  return (
    <div
      className={cls(
        "relative",
        rounded ? "rounded-full" : "",
        shadow ? "shadow-lg shadow-primary-shadow" : "",
        scrollY ? "overflow-y-scroll" : "",
        addStyle ?? ""
      )}
    >
      <a.div
        className={cls(
          "absolute w-full",
          fit ? "h-fit" : "h-full",
          rounded ? "" : "rounded-full",
          isRotate ? "z-0" : "z-[1]"
        )}
        style={{
          opacity: opacity.to((o) => 1 - o),
          transform,
          rotateY: "180deg",
        }}
      >
        <div>{children}</div>
      </a.div>
      <a.div
        className={cls(
          "absolute w-full",
          fit ? "h-fit" : "h-full",
          rounded ? "" : "rounded-full",
          isRotate ? "z-[1]" : "z-0"
        )}
        style={{
          opacity,
          transform,
        }}
      >
        <div>{children}</div>
      </a.div>
    </div>
  );
};

export default YFlipBox;
