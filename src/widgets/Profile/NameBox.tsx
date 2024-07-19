import { cls } from "hsh-utils-string";
import type { FC, HTMLAttributes } from "react";
import ArrowRight from "../ArrowRight";

interface NameBoxProps extends HTMLAttributes<HTMLElement> {}

const NameBox: FC<NameBoxProps> = ({ onClick, ...props }) => {
  return (
    <div
      {...props}
      className={cls(
        "flex justify-center items-center gap-[4px]",
        "group",
        "relative"
      )}
    >
      <ArrowRight
        active={true}
        ping
        arrowCnt={3}
        addStyleBox={cls(
          "flex justify-center items-center",
          "absolute left-[-100%]",
          "w-fit h-fit",
          "group-hover:opacity-0",
          "scale-150",
          "transition-opacity"
        )}
      />
      <h1
        className={cls(
          "text-[36px] text-shadow-lg",
          "transition-transform",
          "group-hover:translate-x-[-100%]"
        )}
      >
        <b>홍성화</b>
      </h1>
      <div
        className={cls(
          "absolute",
          "transition-opacity",
          "opacity-0 group-hover:opacity-100",
          "cursor-pointer",
          "translate-y-[4px]",
          "text-primary-dark leading-3",
          "px-[12px] py-[4px]",
          "group"
        )}
        onClick={onClick}
      >
        <em className="group-hover:animate-em1">C</em>
        <em className="group-hover:animate-em2">l</em>
        <em className="group-hover:animate-em3">i</em>
        <em className="group-hover:animate-em4">c</em>
        <em className="group-hover:animate-em5">k</em>
      </div>
    </div>
  );
};
export default NameBox;
