"use client";
import { usePathname } from "next/navigation";
import { useEffect, type FC } from "react";

interface NavProps {}

const Index: FC<NavProps> = ({}) => {
  const pathname = usePathname();
  console.log("🚀 ~ pathname:", pathname);

  return <></>;
};
export default Index;
