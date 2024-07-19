import { cls } from "hsh-utils-string";
import type { FC, HTMLAttributes } from "react";

interface OpacityClickTextProps extends HTMLAttributes<HTMLElement> {}

const OpacityClickText: FC<OpacityClickTextProps> = ({ ...props }) => {
  return (
    <div
      {...props}
      className={cls(
        "text-primary-dark",
        "cursor-pointer",
        props.className ??
          cls(
            "absolute",
            "transition-opacity",
            "opacity-0 group-hover:opacity-100",
            "translate-y-[4px]",
            "text-primary-dark leading-3",
            "px-[12px] py-[4px]",
            "group"
          )
      )}
    >
      <em className="group-hover:animate-em1">C</em>
      <em className="group-hover:animate-em2">l</em>
      <em className="group-hover:animate-em3">i</em>
      <em className="group-hover:animate-em4">c</em>
      <em className="group-hover:animate-em5">k</em>
    </div>
  );
};
export default OpacityClickText;
