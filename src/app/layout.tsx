import type { Metadata } from "next";
import "./globals.css";
import { MainContainer, SideNavigation } from "@/views";
import { cls } from "hsh-utils-string";

export const metadata: Metadata = {
  title: "HONG",
  description: "Hons's world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={cls("flex items-center justify-center", "w-screen h-screen")}
      >
        <div
          className={cls(
            "flex justify-start items-start",
            "w-[1024px] h-[800px]"
          )}
        >
          <SideNavigation />
          <MainContainer>{children}</MainContainer>
        </div>
      </body>
    </html>
  );
}
