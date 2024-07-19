import { cls } from "hsh-utils-string";
import type { FC } from "react";
import { useIntroView } from "@/shared";
import { IconGithub, NameBox } from "..";

interface IntroSectionHeaderProps {}

const IntroSectionHeader: FC<IntroSectionHeaderProps> = ({}) => {
  const { isView } = useIntroView();
  return (
    <header
      className={cls(
        "flex flex-col items-center justify-center gap-[12px]",
        "flex-shrink-0",
        "w-full h-full",
        "transition-transform duration-1000",
        isView ? "translate-x-[-100%]" : " delay-200"
      )}
    >
      <NameBox />
      <div
        className={cls(
          "min-w-[120px]",
          "p-[12px]",
          "bg-accent",
          "rounded-2xl",
          "shadow-lg"
        )}
      >
        <IconGithub />
      </div>
    </header>
  );
};
export default IntroSectionHeader;
