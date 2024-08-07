import { cls } from "hsh-utils-string";
import Link from "next/link";
import type { FC } from "react";

interface GithubProps {}

const Github: FC<GithubProps> = ({}) => {
  return (
    <Link href={"https://github.com/KF9pu/my-world"} target="_blink">
      <div
        className={cls(
          "flex justify-center items-center",
          "w-full h-full",
          "relative",
          "group"
        )}
      >
        <svg
          className={cls(
            "w-[36px] h-[36px]",
            "cursor-pointer",
            "transition-all",
            "text-black group-hover:text-primary-dark group-hover:scale-150"
          )}
          viewBox="0 0 16 16"
          version="1.1"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="fill-current"
            fillRule="evenodd"
            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
          ></path>
        </svg>
        <div
          className={cls(
            "flex flex-col justify-center items-center",
            "absolute left-0 top-[4px]",
            "w-full h-full",
            "text-black text-base leading-3",
            "opacity-0 group-hover:opacity-100 transition-opacity"
          )}
        >
          <b>GitHub</b>
          <b className="whitespace-nowrap">구경하기</b>
        </div>
      </div>
    </Link>
  );
};
export default Github;
