"use client";
import { PageEnum } from "@/constants/enums";
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
      {PageEnum.Page.FoodMap === pageNum ? "FoodMap" : <></>}
      {PageEnum.Page["?"] === pageNum ? "?" : <></>}
    </main>
  );
};

export default Page;
