"use client";
import { PageEnum } from "@/constants/";
import { Profile } from "@/components";
import { cls } from "hsh-utils-string";
import type { NextPage } from "next";
import { usePage } from "@/libs";

const Page: NextPage = () => {
  const { pageNum } = usePage();

  return (
    <main className={cls("flex justify-center items-center", "w-full h-full")}>
      {PageEnum.Page.Profile === pageNum ? <Profile /> : <></>}
      {PageEnum.Page.World === pageNum ? "World" : <></>}
      {PageEnum.Page.Food === pageNum ? "Food" : <></>}
      {PageEnum.Page["?"] === pageNum ? "?" : <></>}
    </main>
  );
};

export default Page;
