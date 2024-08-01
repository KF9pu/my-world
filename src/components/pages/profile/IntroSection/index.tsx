import {
  AbsoluteHelp,
  ProfileSection as Section,
  IntroDeckBox as DeckBox,
} from "@/components";
import { cls } from "hsh-utils-string";
import { type FC } from "react";

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
        <AbsoluteHelp>
          <p>카드를 드래그 하고,</p>
          <p>날려 보세요!</p>
        </AbsoluteHelp>
        <DeckBox />
      </div>
    </Section>
  );
};
export default IntroSection;
