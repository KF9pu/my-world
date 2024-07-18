import { ProfileSection } from "@/widgets";
import type { FC } from "react";

interface ActivitySectionProps {}

const ActivitySection: FC<ActivitySectionProps> = ({}) => {
  return (
    <ProfileSection id="activity" subHeading="활동" sectionIdx={3}>
      <></>
    </ProfileSection>
  );
};
export default ActivitySection;
