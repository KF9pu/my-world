"use client";
import { cls } from "hsh-utils-string";
import { type FC, type ReactNode } from "react";

const left = {
  bg: `linear-gradient(120deg, #96fbc4 0%, #f9f586 100%)`,
  justifySelf: "end",
};

interface MainContainerProps {
  children: ReactNode;
}

const MainContainer: FC<MainContainerProps> = ({ children }) => {
  return (
    <div
      className={cls(
        "flex flex-col items-end gap-2",
        "w-full h-full",
        "p-[20px]",
        "rounded-r-2xl",
        "shadow-lg shadow-primary-dark-shadow",
        "bg-primary-light",
        "select-none"
      )}
    >
      <div
        className={cls(
          "flex",
          "bg-primary",
          "w-full h-full",
          "rounded-2xl",
          "p-[20px]"
        )}
      >
        {children}
      </div>
    </div>
  );
};
export default MainContainer;
