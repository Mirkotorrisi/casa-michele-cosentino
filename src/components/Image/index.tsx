import { useGallery } from "context/Gallery";
import React from "react";

type Props = {
  imageKey: string;
  className?: string;
};
const Image = ({ imageKey, className }: Props) => {
  const { getImageSrc } = useGallery();

  const image = getImageSrc(imageKey);
  return (
    <img
      src={image.image}
      className={`${
        className ?? ""
      } aspect-video w-full h-full object-cover shadow-xl`}
      alt={image.key}
    />
  );
};

export default Image;
