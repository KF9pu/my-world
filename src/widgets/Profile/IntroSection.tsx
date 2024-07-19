import { ProfileSection as Section } from "@/widgets";
import { cls } from "hsh-utils-string";
import { type FC } from "react";
import Header from "./IntroSectionHeader";
import Contents from "./IntroSectionContents";

interface IntroSectionProps {}

const IntroSection: FC<IntroSectionProps> = ({}) => {
  return (
    <Section id="intro" subHeading="소개" sectionIdx={0}>
      <div
        className={cls(
          "flex ",
          "w-full h-full",
          "overflow-hidden",
          "transition-transform duration-1000"
        )}
      >
        <Header />
        <Contents />
      </div>
    </Section>
  );
};
export default IntroSection;
