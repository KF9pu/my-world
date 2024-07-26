import { ProfileSection as Section } from "@/widgets";
import { cls } from "hsh-utils-string";
import { type FC } from "react";
import { IntroSectionDeckBox as DeckBox } from "..";

interface IntroSectionProps {}

const IntroSection: FC<IntroSectionProps> = ({}) => {
  return (
    <Section id="intro" subHeading="소개" sectionIdx={0}>
      <div
        className={cls(
          "flex justify-end items-end",
          "relative",
          "w-full h-full",
          "overflow-hidden",
          "transition-transform duration-1000"
        )}
      >
        <DeckBox />
      </div>
    </Section>
  );
};
export default IntroSection;
