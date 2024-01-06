import React, { ReactNode } from "react";

type Props = {
  image: ReactNode;
  text: string;
  value: string;
  invertColors?: boolean;
  classNames?: {
    card?: string;
    textContainer?: string;
    title?: string;
    content?: string;
  };
};

const Card = ({ image, text, invertColors, value, classNames }: Props) => (
  <div className={`flex flex-col gap-4 items-center ${classNames?.card}`}>
    {image}
    <div className={`flex flex-col gap-2 ${classNames?.textContainer}`}>
      <span
        className={`${invertColors ? "bold-white" : "bold"} ${
          classNames?.title
        }`}
      >
        {text}
      </span>
      <p className={`body-3 ${classNames?.content}`}>{value}</p>
    </div>
  </div>
);

export default Card;
