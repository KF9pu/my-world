import { cls } from "hsh-utils-string";
import type { FC } from "react";
import { OpacityClickText as ClickText, ArrowRight } from ".";
import { usePage, useSideSectionPage } from "@/shared";
import { PageEnum } from "@/enums";

interface NextPageButtonProps {}

const NextPageButton: FC<NextPageButtonProps> = ({}) => {
  const { pageNum } = usePage();
  const { currentSection, setSideSection } = useSideSectionPage();
  return (
    <button
      className={cls(
        "flex justify-center items-center gap-[4px]",
        "relative",
        "w-[72px] h-[56px]",
        "transition-all duration-500",
        "rounded-lg",
        "cursor-pointer",
        "border border-accent hover:border-primary-dark",
        "hover:shadow-lg hover:shadow-primary-shadow",
        "group"
      )}
      onClick={() =>
        setSideSection(
          currentSection === PageEnum.PageToSections[`${pageNum}`].length - 1
            ? 0
            : currentSection + 1
        )
      }
    >
      <div
        className={cls(
          "ralative",
          "group-hover:opacity-0",
          "transition-all duration-500"
        )}
      >
        <b
          className={cls(
            "absolute top-[8px] left-[14px]",
            "rotate-[2deg]",
            "text-[24px] "
          )}
        >
          Next
        </b>
        <p className={cls("absolute top-[28px] left-[24px]", "text-[20px] ")}>
          Page
        </p>
      </div>
      <div
        className={cls(
          "rotate-[2deg]",
          "transition-opacity duration-500",
          "opacity-0 group-hover:opacity-100",
          "text-[28px]"
        )}
      >
        <ClickText className="translate-x-[-2px] translate-y-[2px]" />
      </div>
    </button>
  );
};
export default NextPageButton;
