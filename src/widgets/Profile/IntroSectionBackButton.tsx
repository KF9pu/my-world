import { cls } from "hsh-utils-string";
import type { FC } from "react";
import ArrowRight from "../ArrowRight";
import { useIntroView } from "@/shared";
import ClickBox from "../OpacityClickText";

interface IntroSectionBackButtonProps {}

const IntroSectionBackButton: FC<IntroSectionBackButtonProps> = ({}) => {
  const { viewToggle } = useIntroView();
  return (
    <button
      className={cls(
        "flex justify-center items-center",
        "w-fit h-fit",
        "relative",
        "py-[16px] px-[20px]",
        "border border-primary",
        "rounded-lg",
        "bg-accent",
        "transition-all",
        "shadow-lg hover:shadow-primary-dark-shadow",
        "cursor-pointer",
        "group"
      )}
      onClick={() => viewToggle()}
    >
      <ArrowRight
        active={true}
        ping
        arrowCnt={3}
        addStyleBox={cls(
          "flex justify-center items-center",
          "w-fit h-fit",
          "rotate-180",
          "scale-150",
          "transition-opacity",
          "group-hover:opacity-0"
        )}
      />
      <div
        className={cls(
          "absolute",
          "opacity-0 group-hover:opacity-100",
          "transition-opacity group-hover:duration-500",
          "translate-y-[4%]",
          "text-[24px]"
        )}
      >
        <b>
          <ClickBox className="" />
        </b>
      </div>
    </button>
  );
};
export default IntroSectionBackButton;
