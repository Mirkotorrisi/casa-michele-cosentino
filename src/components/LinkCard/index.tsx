import React, { ReactNode } from "react";

type Props = {
  image: ReactNode;
  title: string;
  link: string;
  text: string;
};

const LinkCard = ({ image, title, link, text }: Props) => (
  <div className="flex flex-col gap-4 items-center">
    <span className="bold flex gap-2">
      {image} {title}
    </span>
    <a className="contact-us flex flex-col" href={link} target="_blank">
      {text?.split?.("/")?.map((t) => (
        <span>{t}</span>
      ))}
    </a>
  </div>
);

export default LinkCard;
