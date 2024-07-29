"use client";
import { IconGithub, IconWishket } from "@/components";
import { useSpring, a } from "@react-spring/web";
import { cls } from "hsh-utils-string";
import { useState, type FC } from "react";

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  const [footerHover, setFooterHover] = useState(false);

  const footerSpringProps = useSpring({
    width: footerHover ? 884 : 100,
    config: { tension: 0, friction: 0 },
  });
  const footerTextSpringProps = useSpring({
    rotate: footerHover ? "360deg" : "0deg",
  });

  const footerTapSpringProps = useSpring({
    width: footerHover ? 760 : 0,
    opacity: footerHover ? 1 : 0,
    config: { tension: 0, friction: 0 },
  });
  return (
    <footer
      className={cls("absolute left-[70px] bottom-[40px]", "w-full", "z-[10]")}
      onMouseOver={() => setFooterHover(true)}
      onMouseLeave={() => setFooterHover(false)}
    >
      <div className="pb-[12px]">
        <a.div
          className={cls(
            "flex items-center gap-[20px]",
            "h-[100px]",
            "bg-primary",
            "rounded-full",
            "shadow-lg",
            "transition-all duration-300",
            "overflow-hidden",
            "p-[10px]"
          )}
          style={footerSpringProps}
        >
          <div>
            <a.div
              className={cls(
                "flex justify-center items-center",
                "w-[80px] h-[80px]",
                "bg-accent rounded-full",
                "shadow-lg"
              )}
              style={footerTextSpringProps}
            >
              <b>더보기</b>
            </a.div>
          </div>
          <a.div
            className={cls(
              "flex justify-around gap-[20px]",
              "bg-accent",
              "h-full",
              "rounded-full",
              "transition-all duration-500",
              "p-[20px]"
            )}
            style={footerTapSpringProps}
          >
            <div className={cls("flex gap-[20px]", "max-w-full")}>
              <IconGithub />
              <IconWishket />
              {/* TODO:Notin Icon 생성 - Notion 이력서? 연결 */}
              {/* <NextPageButton /> */}
            </div>
          </a.div>
        </a.div>
      </div>
    </footer>
  );
};
export default Footer;
