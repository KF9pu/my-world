// FlipImage.tsx
import { FC } from "react";
import { useSpring, a } from "@react-spring/web";
import Image from "next/image";
import usePage from "@/shared/store/usePage";
import { cls } from "hsh-utils-string";

interface FlipImageProps {}

const images = [
  "/images/my-poto.jpg",
  "/images/my-clay.png",
  "/images/logo-Gellery.png",
  "/images/logo-comunity.png",
];

const FlipImage: FC<FlipImageProps> = ({}) => {
  const { pageNum } = usePage();

  const { transform, opacity } = useSpring({
    opacity: pageNum % 2 === 0 ? 1 : 0,
    transform: `perspective(600px) rotateY(${pageNum % 2 === 0 ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  return (
    <div
      className={cls(
        "relative w-[160px] h-[160px]",
        "rounded-full",
        "m-[10px]"
      )}
    >
      <a.div
        className={cls("absolute w-full h-full", "rounded-full")}
        style={{
          opacity: opacity.to((o) => 1 - o),
          transform,
        }}
      >
        <Image
          src={images[pageNum]}
          fill
          alt="hong"
          className="rounded-full w-full h-full z-20"
        />
      </a.div>
      <a.div
        className={cls("absolute w-full h-full", "rounded-full")}
        style={{
          opacity,
          transform,
          rotateY: "180deg",
        }}
      >
        <Image
          src={images[pageNum]}
          fill
          alt="hong"
          className="rounded-full w-full h-full z-20"
        />
      </a.div>
    </div>
  );
};

export default FlipImage;
