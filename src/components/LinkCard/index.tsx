import React, { ReactNode } from "react";

type Props = {
  image: ReactNode;
  text: string;
  link: string;
  value: string;
};

const LinkCard = ({ image, text, link, value }: Props) => (
  <div className="flex flex-col gap-6 items-center">
    {image}
    <span className="bold">{text}</span>
    <a href={link} target="_blank">
      {value}
    </a>
  </div>
);

export default LinkCard;
