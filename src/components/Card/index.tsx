import React, { ReactNode } from "react";

type Props = {
  image: ReactNode;
  title: string;
  text: string;
  classNames?: {
    card?: string;
    textContainer?: string;
    title?: string;
    content?: string;
  };
};

const Card = ({ image, title, text, classNames }: Props) => (
  <div className={`flex flex-col gap-4 items-center ${classNames?.card ?? ""}`}>
    {image}
    <div
      className={`flex flex-col gap-1 lg:gap-2 ${
        classNames?.textContainer ?? ""
      }`}
    >
      <span className={`bold ${classNames?.title ?? ""}`}>{title}</span>
      <p className={classNames?.content ?? ""}>{text}</p>
    </div>
  </div>
);

export default Card;
