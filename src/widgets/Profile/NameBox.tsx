import { cls } from "hsh-utils-string";
import type { FC } from "react";
import ArrowRight from "../ArrowRight";
import { useIntroView } from "@/shared";
import ClickText from "../OpacityClickText";

interface NameBoxProps {}

const NameBox: FC<NameBoxProps> = () => {
  const { viewToggle } = useIntroView();

  return (
    <div
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
      <ClickText onClick={() => viewToggle()} />
    </div>
  );
};
export default NameBox;
