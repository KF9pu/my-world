"use client";
import { cls } from "hsh-utils-string";
import { type FC } from "react";
import IntroSection from "./IntroSection";
import ProjectSection from "./ProjectSection";
import HistorySection from "./HistorySection";
import ActivitySection from "./ActivitySection";

interface ProfileProps {}

const Profile: FC<ProfileProps> = ({}) => {
  return (
    <div
      className={cls("flex flex-col justify-end", "w-full h-full", "relative")}
    >
      <IntroSection />
      <ProjectSection />
      <HistorySection />
      <ActivitySection />
    </div>
  );
};
export default Profile;
