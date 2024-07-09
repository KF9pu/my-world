// YFlipBox.tsx
import { FC, ReactNode } from "react";
import { useSpring, a } from "@react-spring/web";
import usePage from "@/shared/store/usePage";
import { cls } from "hsh-utils-string";

interface YFlipBoxProps {
  children: ReactNode;
}

const YFlipBox: FC<YFlipBoxProps> = ({ children }) => {
  const { pageNum } = usePage();

  const { transform, opacity } = useSpring({
    opacity: pageNum % 2 === 0 ? 1 : 0,
    transform: `perspective(600px) rotateY(${pageNum % 2 === 0 ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  return (
    <div className={cls("relative w-[160px] h-[160px]", "rounded-full")}>
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
          rotateY: "180deg",
        }}
      >
        {children}
      </a.div>
    </div>
  );
};

export default YFlipBox;
