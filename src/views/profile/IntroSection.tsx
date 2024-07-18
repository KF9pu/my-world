import { ArrowRight, ProfileSection } from "@/widgets";
import { cls } from "hsh-utils-string";
import type { FC } from "react";

interface IntroSectionProps {}

const IntroSection: FC<IntroSectionProps> = ({}) => {
  return (
    <ProfileSection id="intro" subHeading="소개" sectionIdx={0}>
      <div className={cls("w-full h-full", "")}>
        <header className="text-center border-b-2 pb-4">
          <h1 className="text-4xl font-bold">홍성화</h1>
          <p>Email: pushan45hsh@gamil.com</p>
          <p>Github: https://github.com/KF9pu</p>
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
