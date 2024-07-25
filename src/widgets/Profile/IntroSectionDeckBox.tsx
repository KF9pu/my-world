import { useSpring } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import { cls } from "hsh-utils-string";
import type { FC } from "react";

interface IntroSectionDeckBoxProps {}

const IntroSectionDeckBox: FC<IntroSectionDeckBoxProps> = ({}) => {
  return (
    <div
      className={cls(
        "flex justify-center items-center",
        "w-full h-full",
        "border",
        "p-[12px]"
      )}
    >
      ss
    </div>
  );
};
export default IntroSectionDeckBox;
