import usePageMenu from "@/shared/usePageMenu";
import { cls } from "hsh-utils-string";
import type { FC } from "react";

interface ArrowRightProps {
  addStyleBox?: string;
  addStyleArrow?: string;
  arrowCnt: number;
  ping?: true;
}

const ArrowRight: FC<ArrowRightProps> = ({
  arrowCnt,
  addStyleBox,
  addStyleArrow,
  ping,
}) => {
  const { hoverSections } = usePageMenu();
  return hoverSections.length > 5 ? (
    <i className={cls(addStyleBox ?? "")}>
      {Array.from({ length: arrowCnt }).map((_, idx) => {
        return (
          <svg
            key={`ArrowRight${arrowCnt}_${idx}`}
            className={cls(addStyleArrow ?? "")}
            width="12"
            height="12"
            viewBox="0 0 12 12"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 2l4 4-4 4"
              stroke="white"
              strokeWidth="1"
              fill="none"
              className={cls(
                "",
                ping
                  ? cls(
                      idx === 0
                        ? "animate-cusPing1"
                        : idx === 1
                        ? "animate-cusPing2"
                        : idx === 2
                        ? "animate-cusPing3"
                        : idx === 3
                        ? "animate-cusPing4"
                        : "",
                      ""
                    )
                  : ""
              )}
            />
          </svg>
        );
      })}
    </i>
  ) : (
    <></>
  );
};
export default ArrowRight;
