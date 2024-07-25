import { useSpring } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import type { FC } from "react";

interface IntroSectionContentsCardProps {}

const IntroSectionContentsCard: FC<IntroSectionContentsCardProps> = ({}) => {
  const [springProps, api] = useSpring(() => ({ x: 0, y: 0, opacity: 0 }));

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

      if (movementX > 100) {
        console.log("section Up");
      }
    }
  );
  return <div></div>;
};
export default IntroSectionContentsCard;
