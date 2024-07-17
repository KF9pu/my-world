"use client";
import { cls } from "hsh-utils-string";
import { useState, type FC } from "react";
import { animated, useSpring } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import { ProfileSection } from "@/widgets";

interface ProfileProps {}

const Profile: FC<ProfileProps> = ({}) => {
  const [currentSection, setSection] = useState();

  const [springProps, api] = useSpring(() => ({ x: 0, y: 0 }));

  const bind = useDrag(
    ({
      event, // 현재 드래그 이벤트에 대한 원시 이벤트 객체입니다. (예: 마우스 이벤트, 터치 이벤트)
      args, // useDrag 훅에 전달된 인수 배열입니다.
      down, // 드래그가 활성화되어 있는지 여부를 나타내는 부울 값입니다.
      movement: [movementX, movementY], // 드래그 시작 지점으로부터의 이동 거리를 나타내는 배열
      offset: [x, y], // 드래그가 시작된 이후의 총 오프셋을 나타내는 배열
      velocity: [velocityX, velocityY], // 현재 드래그 속도를 나타내는 배열
      delta: [deltaX, deltaY], // 이전 이벤트 이후의 변화량을 나타내는 배열
      direction, // 드래그 방향을 나타내는 배열
      initial: [initialX, initialY], // 드래그가 시작된 시점의 위치를 나타내는 배열
      dragging, // 현재 드래그 상태인지 여부를 나타내는 부울 값
    }) => {
      api.start({ x: movementX, y: movementY });

      if (!down) {
        // 드래그가 끝난 후 원래 위치로 돌아가도록 설정
        api.start({ x: 0, y: 0 });
      }

      if (movementX > 100) {
        console.log("section Up");
      }
    }
  );
  return (
    <div className={cls("w-full h-full")}>
      <animated.div
        {...bind()}
        className={cls("w-[94%] h-full", "relative")}
        style={{
          x: springProps.x,
          y: springProps.y,
        }}
      >
        <ProfileSection id="intro" subHeading="소개">
          <>q</>
        </ProfileSection>

        <ProfileSection id="project" subHeading="프로젝트">
          <></>
        </ProfileSection>

        <ProfileSection id="histoty" subHeading="연혁">
          <></>
        </ProfileSection>

        <ProfileSection id="activity" subHeading="활동">
          <></>
        </ProfileSection>
      </animated.div>
      {/* <animated.div
        {...bind()}
        style={{
          x: springProps.x,
          y: springProps.y,
          width: "100px",
          height: "100px",
          backgroundColor: "blue",
          touchAction: "none", // for touch devices
        }}
      >
        Drag me
      </animated.div> */}
    </div>
  );
};
export default Profile;
