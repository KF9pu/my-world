import { ArrowRight, IconGithub, ProfileSection } from "@/widgets";
import { cls } from "hsh-utils-string";
import type { FC } from "react";

interface IntroSectionProps {}

const infos = [
  { 이름: "" },
  { 나이: "" },
  { 생년월일: "" },
  { 취미: "" },
  { 특기: "" },
  { MBTI: "" },
  { 혈액형: "" },
];

const IntroSection: FC<IntroSectionProps> = ({}) => {
  return (
    <ProfileSection id="intro" subHeading="소개" sectionIdx={0}>
      <div className={cls("", "w-full h-full", "")}>
        <header
          className={cls(
            "flex flex-col gap-[12px]",
            "rounded-2xl",
            "shadow-lg",
            "p-[12px]",
            "bg-accent"
          )}
        >
          <div>
            <div
              className={cls("flex justify-between items-center gap-[8px]", "")}
            >
              <div className="flex items-end gap-[4px]">
                <h1
                  className={cls(
                    "text-[36px] text-shadow-lg",
                    "cursor-pointer"
                  )}
                >
                  <b className="">홍성화</b>
                </h1>
              </div>
              <div
                className={cls(
                  "min-w-[120px]",
                  "p-[12px]",
                  "bg-primary-light",
                  "rounded-2xl",
                  "shadow-lg"
                )}
              >
                <IconGithub />
              </div>
            </div>
            <div className="w-fit">
              <div
                className={cls(
                  "w-fit",
                  "border border-primary-dark",
                  "p-[8px]"
                )}
              >
                <div
                  className={cls(
                    "flex flex-col gap-0",
                    // "absolute right-0 bottom-0",
                    "w-max",
                    "border border-primary-dark rounded-2xl",
                    "p-[8px]",
                    "text-primary-dark leading-5"
                  )}
                >
                  <b className={cls("")}>남자</b>
                  <p className="text-[20px]">(1992.02.15)</p>
                </div>
              </div>
              <hr className={cls("w-[100%] h-[2px]", "bg-primary-dark")} />
            </div>
          </div>
        </header>

        <section className="mt-8">
          <h2 className="text-2xl font-bold border-b-2 pb-2 mb-4">Summary</h2>
          <p>
            Experienced software developer with a strong background in web
            development and project management.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-bold border-b-2 pb-2 mb-4">
            Experience
          </h2>
          <div className="mb-4">
            <h3 className="font-bold text-xl">
              Software Developer at XYZ Company
            </h3>
            <p className="italic text-gray-600">January 2020 - Present</p>
            <p>
              Developed and maintained web applications using HTML, CSS, and
              JavaScript.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-xl">Web Developer at ABC Inc.</h3>
            <p className="italic text-gray-600">June 2016 - December 2019</p>
            <p>
              Worked on various client projects, building responsive websites
              and web applications.
            </p>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-bold border-b-2 pb-2 mb-4">Education</h2>
          <div>
            <h3 className="font-bold text-xl">
              Bachelor of Science in Computer Science
            </h3>
            <p className="italic text-gray-600">
              University of Somewhere, 2012 - 2016
            </p>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-bold border-b-2 pb-2 mb-4">Skills</h2>
          <ul className="list-disc list-inside">
            <li>
              <span className="font-bold">Programming Languages:</span>{" "}
              JavaScript, Python, Java
            </li>
            <li>
              <span className="font-bold">Web Technologies:</span> HTML, CSS,
              React, Node.js
            </li>
            <li>
              <span className="font-bold">Tools:</span> Git, Docker, Jenkins
            </li>
          </ul>
        </section>
      </div>
    </ProfileSection>
  );
};
export default IntroSection;
