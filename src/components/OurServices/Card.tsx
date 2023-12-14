import React from "react";

type Props = {
  text: string;
  image: string;
};
const Card = ({ text, image }: Props) => {
  return (
    <div className="self-stretch h-24 flex-col justify-start items-start gap-2 flex">
      <img className="w-14 h-12 " src={image} />

      <div className="self-stretch text-gray-600 text-base font-normal font-['Ubuntu'] leading-normal">
        {text}
      </div>
    </div>
  );
};

export default Card;
