import {
  AbsoluteHelp,
  ArrowRight,
  ProfileSection as Section,
  ThisProjectBox,
} from "@/components";
import { cls } from "hsh-utils-string";
import type { FC } from "react";

interface ProjectSectionProps {}

const aa = [""];

const ProjectSection: FC<ProjectSectionProps> = ({}) => {
  return (
    <Section id="project" subHeading="프로젝트" sectionIdx={1}>
      <div
        className={cls(
          "flex flex-col",
          "relative",
          "w-full h-full",
          "overflow-y-scroll",
          "p-[12px]"
        )}
      >
        <AbsoluteHelp>
          <p>
            1. This: <br />
            <em className="text-[18px]">현재 프로젝트</em>
          </p>
          <p>
            2. Experienced : <br />
            <em className="text-[18px]">경험한 프로젝트</em>
          </p>
          <div className="flex gap-[8px]">
            <span className="flex">
              <p className="animate-em1">S</p>
              <p className="animate-em2">c</p>
              <p className="animate-em3">r</p>
              <p className="animate-em4">o</p>
              <p className="animate-em5">l</p>
              <p className="animate-em6">l</p>
            </span>
            <span className="flex">
              <p className="animate-em1">D</p>
              <p className="animate-em2">o</p>
              <p className="animate-em5">w</p>
              <p className="animate-em6">n</p>
            </span>
          </div>
        </AbsoluteHelp>
        <ThisProjectBox />
        <div
          className={cls(
            "flex flex-col justify-around",
            "flex-shrink-0",
            "w-full h-full"
          )}
        >
          <h2>Experienced</h2>
          <div>aa</div>
        </div>
      </div>
    </Section>
  );
};
export default ProjectSection;
