"use client";
import { useSpring, a } from "@react-spring/web";
import { cls } from "hsh-utils-string";
import { ReactNode, useState, type FC } from "react";

interface AbsoluteHelpProps {
  children: ReactNode;
}

const AbsoluteHelp: FC<AbsoluteHelpProps> = ({ children }) => {
  const [helpHover, setHelpHover] = useState(false);

  const helpBoxSpringProps = useSpring({
    width: helpHover ? 160 : 28,
    height: helpHover ? 200 : 28,
    config: {
      duration: 100,
    },
  });

  return (
    <div
      className={cls(
        "absolute top-0 right-0 z-[7]",
        "w-fit h-fit min-w-[28px] min-h-[28px]",
        "border border-primary-dark hover:border-primary-light-contrast",
        "transition-all",
        "shadow-lg",
        "rounded-2xl",
        "text-primary-dark hover:text-primary-light-contrast",
        "bg-primary-light"
      )}
      onMouseOver={() => setHelpHover(true)}
      onMouseLeave={() => setHelpHover(false)}
    >
      <a.div
        className={cls(
          "flex flex-col justify-start items-start",
          "relative",
          "overflow-hidden"
        )}
        style={helpBoxSpringProps}
      >
        <b className={cls("text-center leading-7", "w-full h-full")}>?</b>
        <div
          className={cls(
            "flex flex-col justify-center items-center",
            "absolute top-[36px] right-[8px]",
            "w-[144px] h-[156px]",
            "border border-primary-light-contrast",
            "rounded-2xl",
            "p-[8px]",
            "text-[20px]"
          )}
        >
          <b>{children}</b>
        </div>
      </a.div>
    </div>
  );
};
export default AbsoluteHelp;
