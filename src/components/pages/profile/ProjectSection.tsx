import { ProfileSection as Section, ThisProjextBox } from "@/components";
import { cls } from "hsh-utils-string";
import type { FC } from "react";

interface ProjectSectionProps {}

const aa = [""];

const ProjectSection: FC<ProjectSectionProps> = ({}) => {
  return (
    <Section id="project" subHeading="프로젝트" sectionIdx={1}>
      <div className={cls("flex", "w-full h-full", "rounded-2xl", "bg-accent")}>
        <ThisProjextBox />
        <div>
          <h2>Experienced</h2>
        </div>
      </div>
    </Section>
  );
};
export default ProjectSection;
