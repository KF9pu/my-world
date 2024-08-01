import { cls } from "hsh-utils-string";
import type { FC } from "react";

interface LoadingProps {}

const Loading: FC<LoadingProps> = ({}) => {
  return (
    <div className={cls("flex", "cursor-wait")}>
      <p className="animate-em1">L</p>
      <p className="animate-em2">o</p>
      <p className="animate-em3">a</p>
      <p className="animate-em4">d</p>
      <p className="animate-em5">i</p>
      <p className="animate-em6">n</p>
      <p className="animate-em7">g</p>
    </div>
  );
};
export default Loading;
