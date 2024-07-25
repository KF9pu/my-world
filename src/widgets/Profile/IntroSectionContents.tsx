import { useIntroView } from "@/shared";
import { cls } from "hsh-utils-string";
import type { FC } from "react";
import { IntroSectionBackButton as BackButton } from "..";

interface IntroSectionContentsProps {}

const infos = [
  { 이름: "" },
  { 나이: "" },
  { 생년월일: "" },
  { 취미: "" },
  { 특기: "" },
  { MBTI: "" },
  { 혈액형: "" },
];

const IntroSectionContents: FC<IntroSectionContentsProps> = ({}) => {
  const { isView } = useIntroView();

  return (
    <div
      className={cls(
        "flex flex-col justify-center items-center",
        "w-full h-full",
        "flex-shrink-0",
        "transition-transform duration-1000",
        isView ? "translate-x-[-100%] delay-100 " : ""
      )}
    >
      <div className={cls("flex justify-end", "w-full h-fit")}>
        <BackButton />
      </div>
    </div>
  );
};
export default IntroSectionContents;
