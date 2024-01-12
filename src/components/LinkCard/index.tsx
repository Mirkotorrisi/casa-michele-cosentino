import React, { ReactNode } from "react";

type Props = {
  image: ReactNode;
  title: string;
  link: string;
  text: string;
};

const LinkCard = ({ image, title, link, text }: Props) => (
  <div className="flex flex-col gap-6 items-center">
    {image}
    <span className="bold">{title}</span>
    <a href={link} target="_blank">
      {text}
    </a>
  </div>
);

export default LinkCard;
