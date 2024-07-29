import { cls } from "hsh-utils-string";
import Link from "next/link";
import type { FC } from "react";

interface WishketProps {}

const Wishket: FC<WishketProps> = ({}) => {
  return (
    <Link href={"https://www.wishket.com/partners/p/kf9999/"} target="_blink">
      <div
        className={cls(
          "flex justify-center items-center",
          "w-full h-full",
          "relative",
          "group"
        )}
      >
        <svg
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={cls(
            "w-[44px] h-[44px]",
            "cursor-pointer",
            "transition-all",
            "group-hover:scale-150"
          )}
        >
          <g id="GNB">
            <path
              id="Vector"
              d="M11.2035 5.44616L8.85058 6.75673L8.81816 6.9996L5.93262 8.6447V11.6783C5.93262 12.0128 6.33557 12.3244 6.33557 12.3244C6.74779 12.5581 7.25265 12.5581 7.66487 12.3244L11.3378 10.2302C11.75 9.99651 12.0001 9.56118 12.0001 9.09377V4.90543C12.0001 4.74963 11.9723 4.60299 11.9168 4.46094C11.7917 5.11164 11.4768 5.26744 11.1988 5.44616H11.2035Z"
              fill="#0055B8"
              className="group-hover:fill-primary-dark"
            />
            <path
              id="Vector_2"
              d="M6.09441 11.6599V5.27659L3.66741 3.83771C3.22277 3.51236 2.66233 3.76897 2.66233 3.76897C2.25011 4.00268 2 4.43801 2 4.90541V9.09376C2 9.56116 2.25474 9.99649 2.66233 10.2302L6.33526 12.3244C6.44642 12.3885 6.56685 12.4343 6.68727 12.4618C6.33989 12.3564 6.08978 12.0357 6.08978 11.6599H6.09441Z"
              fill="#00A7E1"
              className="group-hover:fill-primary"
            />
            <path
              id="Vector_3"
              d="M3.37068 3.89317L8.82218 7.00006L11.5456 5.44662C11.8745 5.25874 12.0273 4.88298 11.9486 4.53471C11.8513 4.21853 11.6382 3.939 11.3418 3.76945L7.66425 1.67528C7.25203 1.44157 6.74718 1.44157 6.33496 1.67528L2.66203 3.76945C2.55087 3.8336 2.4536 3.9115 2.3656 4.00315C2.63424 3.76028 3.0372 3.70529 3.36605 3.89317H3.37068Z"
              fill="#00B551"
              className="group-hover:fill-primary-light"
            />
          </g>
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
          <b>Wishket</b>
          <b>구경하기</b>
        </div>
      </div>
    </Link>
  );
};
export default Wishket;
