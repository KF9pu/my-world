import { IconGithub, NameBox, ProfileSection } from "@/widgets";
import { cls } from "hsh-utils-string";
import { useState, type FC } from "react";

interface IntroSectionProps {}

const infos = [
  { 이름: "" },
  { 나이: "" },
  { 생년월일: "" },
  { 취미: "" },
  { 특기: "" },
  { MBTI: "" },
  { 혈액형: "" },
];

const IntroSection: FC<IntroSectionProps> = ({}) => {
  const [isView, setIsView] = useState(false);
  return (
    <ProfileSection id="intro" subHeading="소개" sectionIdx={0}>
      <div
        className={cls(
          "flex ",
          "w-full h-full",
          "overflow-hidden",
          "transition-transform duration-1000"
        )}
      >
        <header
          className={cls(
            "flex flex-col items-center justify-center gap-[12px]",
            "flex-shrink-0",
            "w-full h-full",
            "bg-accent",
            "transition-transform duration-1000",
            isView ? "translate-x-[-100%]" : " delay-200"
          )}
        >
          <NameBox onClick={() => setIsView(true)} />
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
        <div
          className={cls(
            "w-full h-full",
            "flex-shrink-0",
            "bg-primary",
            "transition-transform duration-1000",
            isView ? "translate-x-[-100%] delay-200 " : ""
          )}
        >
          너 어디갔닌ㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴ
          <div onClick={() => setIsView(false)}>zz</div>
        </div>
      </div>
    </ProfileSection>
  );
};
export default IntroSection;
