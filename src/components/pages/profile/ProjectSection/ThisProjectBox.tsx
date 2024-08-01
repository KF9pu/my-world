"use client";
import Loading from "@/components/shared/Loading";
import { I_thisProject } from "@/constants";
import { fetcher } from "@/libs";
import { cls } from "hsh-utils-string";
import { useEffect, useState, type FC } from "react";
import useSWR from "swr";

interface ThisProjectBoxProps {}

const ThisProjectBox: FC<ThisProjectBoxProps> = ({}) => {
  const { data, error, isLoading } = useSWR("/api/thisProject", fetcher);
  const [currentHoverIdx, setIdx] = useState(0);

  useEffect(() => {
    console.log("🚀 ~ useEffect ~ data:", data.data);
  }, [data]);

  if (error) return <div>error...</div>;

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div
          className={cls(
            "flex flex-col justify-around",
            "flex-shrink-0",
            "w-full h-full",
            ""
          )}
        >
          <h2 className="text-[36px]">
            <b>1. This</b>
          </h2>
          <div className={cls("flex gap-[12px]", "")}>
            <div
              className={cls(
                "flex flex-col justify-start gap-[20px]",
                "w-[30%] h-[500px]"
              )}
            >
              {data.data.map((items: I_thisProject, idx: number) => {
                return (
                  <div
                    key={`this_project_title_${idx}`}
                    className={cls(
                      "flex justify-center items-center",
                      "shadow-lg shadow-primary-dark-shadow",
                      "rounded-2xl",
                      "py-[4px]",
                      "cursor-pointer",
                      "group",
                      currentHoverIdx === idx
                        ? "bg-primary-dark text-primary-dark-contrast"
                        : cls("bg-primary ", "")
                    )}
                    onMouseOver={() => setIdx(idx)}
                  >
                    <p
                      className={cls("", "", "group-hover:animate-smallBounce")}
                    >
                      {items.key}
                    </p>
                  </div>
                );
              })}
            </div>
            <div
              className={cls(
                "flex",
                "relative",
                "w-full h-full",
                "overflow-hidden"
              )}
            >
              {data.data.map((items: I_thisProject, idx: number) => {
                return (
                  <div
                    key={`this_project_list_${idx}`}
                    className={cls(
                      "flex",
                      "absolute",
                      "w-full h-full",
                      "transition-all duration-1000",
                      "rounded-2xl",
                      "border-2 border-primary",
                      "p-[20px]",
                      currentHoverIdx === idx
                        ? "translate-x-0 opacity-100"
                        : "translate-x-full opacity-0"
                    )}
                  >
                    <div className={cls("flex flex-col gap-[16px]", "w-full")}>
                      {items.content.split(",").map((contents, contentsIdx) => {
                        return (
                          <div
                            key={`this_project_list_contents_${contentsIdx}`}
                            className={cls(
                              "flex justify-between",
                              "border-b-2 border-b-primary",
                              "leading-5"
                            )}
                          >
                            <p>
                              {contents.includes("/")
                                ? contents.split("/")[0]
                                : contents}
                            </p>
                            {contents.includes("/") ? (
                              <i className="text-[16px]">
                                ({contents.split("/")[1]})
                              </i>
                            ) : (
                              <></>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default ThisProjectBox;
