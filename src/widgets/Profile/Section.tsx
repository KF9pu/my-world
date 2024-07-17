import { cls } from "hsh-utils-string";
import type { FC, HTMLAttributes, ReactNode } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  subheading: string;
}

const Section: FC<SectionProps> = ({ children, subheading, ...props }) => {
  return (
    <section
      {...props}
      className={cls("w-full h-full", "absolute", "bg-primary-dark")}
    >
      <header>
        <b>
          <em>{subheading}</em>
        </b>
      </header>
      <hr />
      {children}
    </section>
  );
};
export default Section;
