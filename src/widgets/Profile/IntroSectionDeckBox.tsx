import { fetcher } from "@/features";
import { a, useSprings, to as interpolate } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import { cls } from "hsh-utils-string";
import { useState, type FC } from "react";
import useSWR from "swr";

interface IntroSectionDeckBoxProps {}

const to = (i: number) => ({
  x: 0,
  y: i * -4,
  scale: 0.8,
  rot: -10 + Math.random() * 20,
  delay: i * 100,
});
const from = (_i: number) => ({
  x: 0,
  rot: -10 + Math.random() * 20,
  scale: 0.8,
  y: -30,
});

const trans = (r: number, s: number) =>
  `perspective(1500px) rotateX(30deg) rotateY(${
    r / 10
  }deg) rotateZ(${r}deg) scale(${s})`;

const IntroSectionDeckBox: FC<IntroSectionDeckBoxProps> = ({}) => {
  const { data, error, isLoading } = useSWR("/api/deck", fetcher);

  const [gone] = useState(() => new Set());
  const [props, api] = useSprings(data ? data.data.length : 0, (i) => ({
    ...to(i),
    from: from(i),
  }));

  const bind = useDrag(
    ({
      args: [index],
      down,
      movement: [mx],
      direction: [xDir],
      velocity: [vx],
    }) => {
      const trigger = vx > 0.05;
      const dir = xDir < 0 ? -1 : 1;
      if (!down && trigger) gone.add(index);
      api.start((i) => {
        if (index !== i) return;
        const isGone = gone.has(index);
        const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0;
        const rot = mx / 100 + (isGone ? dir * 10 * vx : 0);
        const scale = down ? 1.1 : 1;
        return {
          x,
          rot,
          scale,
          delay: undefined,
          config: { friction: 50, tension: down ? 800 : isGone ? 200 : 100 },
        };
      });
      if (!down && gone.size === data.data.length)
        setTimeout(() => {
          gone.clear();
          api.start((i) => to(i));
        }, 600);
    }
  );

  if (error) return <div>error...</div>;
  return (
    <div
      className={cls(
        "flex justify-center items-center",
        "relative",
        "w-full h-full",
        "p-[12px]"
      )}
    >
      {isLoading ? (
        <div>loading...</div>
      ) : (
        <>
          {props.map(({ x, y, rot, scale }, i) => (
            <a.div
              className={cls("flex", "absolute", "w-[300px] h-[400px]")}
              key={i}
              style={{ x, y }}
            >
              <a.div
                {...bind(i)}
                style={{
                  transform: interpolate([rot, scale], trans),
                }}
                className={cls(
                  "w-full h-full",
                  "shadow-2xl",
                  "bg-primary",
                  "cursor-pointer"
                )}
              >
                <p>{data.data[i].key}</p>
                <p>{data.data[i].content}</p>
              </a.div>
            </a.div>
          ))}
        </>
      )}
    </div>
  );
};
export default IntroSectionDeckBox;
