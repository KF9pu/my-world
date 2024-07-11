import { PageEnum } from "@/enums";
import { usePage } from "@/shared";
import type { FC } from "react";
import { cls } from "hsh-utils-string";
import usePageMenu from "@/shared/usePageMenu";
import YFlipBox from "./YFlipBox";

interface SideCardProps {}

const SideCard: FC<SideCardProps> = ({}) => {
  const { pageNum } = usePage();
  const { sections } = usePageMenu();
  return (
    <div className={cls("w-full h-full", " py-[20px] px-[20px]")}>
      <div
        className={cls(
          "flex flex-col items-center gap-[12px]",
          "w-[200px] h-full",
          "shadow-lg",
          "rounded-full",
          "pt-[210px]",
          "bg-blue-200"
        )}
      >
        <h2
          className={cls(
            "w-fit",
            "font-bold",
            "text-white",
            "rounded-xl shadow-lg",
            "px-[24px] py-[12px]",
            "text-[24px]"
          )}
        >
          {PageEnum.Page[pageNum]}
        </h2>
        <YFlipBox
          addStyle={cls(
            "w-[180px] max-h-[80%] min-h-[40%]",
            "px-[12px]",
            "border",
            "rounded-2xl"
          )}
          scrollY
          shadow
        >
          <ul className={cls("flex flex-col gap-[20px]", "px-[4px] py-[20px]")}>
            {sections.map((section, idx) => {
              return (
                <li className={cls("text-[24px]")} key={`sidevar_${idx}`}>
                  {section}
                </li>
              );
            })}
          </ul>
        </YFlipBox>
      </div>
    </div>
  );
};
export default SideCard;
