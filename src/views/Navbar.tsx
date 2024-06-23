import { cls } from "hsh-utils-string";
import Image from "next/image";
import type { FC } from "react";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <nav
      className={cls(
        "flex items-center",
        "w-[1024px]",
        "shadow-lg",
        "py-3 px-2"
      )}
    >
      <div className={cls("relative", "w-[56px] h-[56px]", "rounded-full")}>
        <Image
          src={"/image/my-clay.png"}
          fill
          alt="hong"
          className={cls("rounded-full")}
        />
      </div>
      <div className={cls("flex gap-2", "shadow-lg")}>
        <p>nav 1</p>
        <p>nav 2sss</p>
      </div>
    </nav>
  );
};
export default Navbar;
