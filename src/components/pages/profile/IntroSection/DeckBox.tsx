"use client";
import Loading from "@/components/shared/Loading";
import { fetcher } from "@/libs";
import { a, useSprings, to as interpolate } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import { cls } from "hsh-utils-string";
import { useState, type FC } from "react";
import useSWR from "swr";

interface DeckBoxProps {}

const to = (i: number) => ({
  x: 0,
  y: i * -4 + Math.random() * 2,
  scale: 0.8,
  rot: -10 + Math.random() * 20,
  delay: i * 100,
});
const from = (_i: number) => ({
  x: 0,
  rot: -10 + Math.random() * 20,
  scale: 0.8,
  y: -30 + Math.random() * 2,
});

const trans = (r: number, s: number) =>
  `perspective(1500px) rotateX(20deg) rotateY(${
    r / 10
  }deg) rotateZ(${r}deg) scale(${s})`;

const DeckBox: FC<DeckBoxProps> = ({}) => {
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
        "w-full h-full"
      )}
    >
      {isLoading ? (
        <Loading />
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
                  "flex flex-col justify-center items-center",
                  "w-full h-full",
                  "shadow-2xl",
                  "rounded-md",
                  "bg-accent",
                  "text-black",
                  "cursor-grab"
                )}
              >
                <div
                  className={cls(
                    "flex justify-center items-center",
                    "relative",
                    "w-full h-full",
                    "border-2 border-black",
                    "rounded-md"
                  )}
                >
                  <div
                    className={cls(
                      "flex flex-col gap-[12px]",
                      "min-w-[64%] h-[60%]"
                    )}
                  >
                    <p className="text-[48px]">
                      <b>{data.data[i].key}</b>
                    </p>
                    <p
                      className={cls(
                        "flex justify-center items-center",
                        "w-full h-[50%]",
                        "border-2 border-black",
                        "text-[32px]",
                        "p[12px]"
                      )}
                    >
                      {data.data[i].content}
                    </p>
                  </div>
                  <p
                    className={cls(
                      "absolute bottom-[4px] right-[8px]",
                      "text-[12px]"
                    )}
                  >
                    <b>{props.length - i}</b>
                  </p>
                </div>
              </a.div>
            </a.div>
          ))}
        </>
      )}
    </div>
  );
};
export default DeckBox;
