import React from "react";

type Props = {
  title?: string;
  subtitle?: string;
  link?: string;
  linkText?: string;
  goesToLeft?: boolean;
};

const SectionHeadings = ({
  title,
  subtitle,
  link,
  linkText,
  goesToLeft,
}: Props) => {
  return (
    <div className="flex flex-col justify-center">
      {!!title && (
        <h2 className={`heading-2 ${goesToLeft ? "md:text-left" : ""}`}>
          {title}
        </h2>
      )}
      {!!subtitle && (
        <p className={`mt-2 lg:mt-4 ${goesToLeft ? "md:text-left" : ""}`}>
          {subtitle}
        </p>
      )}
      {!!link && !!linkText && (
        <a
          href={link}
          className={`button-solid mx-auto mt-6 ${
            goesToLeft ? "md:mx-0 md:mr-auto" : ""
          }`}
        >
          {linkText}
        </a>
      )}
    </div>
  );
};

export default SectionHeadings;
