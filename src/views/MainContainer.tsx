import { cls } from "hsh-utils-string";
import type { FC, ReactNode } from "react";

interface MainContainerProps {
  children: ReactNode;
}

const MainContainer: FC<MainContainerProps> = ({ children }) => {
  return (
    <div
      className={cls(
        "flex flex-col gap-2",
        "w-full h-full",
        "p-[20px]",
        "rounded-r-2xl",
        "shadow-lg shadow-primary-dark-shadow",
        "bg-primary-light"
      )}
    >
      {children}
    </div>
  );
};
export default MainContainer;
