"use client";
import {
  ActivitySection,
  HistorySection,
  IconGithub,
  IconWishket,
  IntroSection,
  ProjectSection,
} from "@/components";
import { cls } from "hsh-utils-string";
import { type FC } from "react";

interface ProfileProps {}

const Profile: FC<ProfileProps> = ({}) => {
  return (
    <div
      className={cls("flex flex-col justify-end", "relative", "w-full h-full")}
    >
      <IntroSection />
      <ProjectSection />
      <HistorySection />
      <ActivitySection />
    </div>
  );
};
export default Profile;
