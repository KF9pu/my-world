import { cls } from "hsh-utils-string";
import type { FC } from "react";

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = ({}) => {
  return (
    <aside
      className={cls("flex flex-col", "w-[500px]", "shadow-lg", "p-[32px]")}
    >
      Sidebar
    </aside>
  );
};
export default Sidebar;
