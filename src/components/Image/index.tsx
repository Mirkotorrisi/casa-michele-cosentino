import { useGallery } from "context/Gallery";
import React from "react";

type Props = {
  imageKey: string;
  className?: string;
  hasShadow?: boolean;
};
const Image = ({ imageKey, className, hasShadow = false }: Props) => {
  const { getImageSrc } = useGallery();

  const image = getImageSrc(imageKey);
  console.log("🚀 ~ Image ~ image:", image);
  return (
    <img
      src={image.image}
      className={`${className ?? ""} ${
        hasShadow ? "shadow-xl" : ""
      } aspect-video w-full h-full object-cover `}
      alt={image.description ?? image.key}
    />
  );
};

export default Image;
