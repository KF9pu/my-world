import { cls } from "hsh-utils-string";
import type { FC } from "react";

interface EmptyBoxProps {
  active: boolean;
  distance: number;
}

const EmptyBox: FC<EmptyBoxProps> = ({ active, distance }) => {
  return active ? (
    <div
      className={cls("absolute", "w-[4px] h-[4px]")}
      style={{
        left: `${distance}px`,
      }}
    />
  ) : (
    <></>
  );
};
export default EmptyBox;
