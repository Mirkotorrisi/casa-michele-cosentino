import { useGallery } from "context/Gallery";
import React from "react";
import { ImageItem } from "types/pageData";

type Props = {
  imageData?: ImageItem;
  imageKey?: string;
  className?: string;
  hasShadow?: boolean;
  isHero?: boolean;
  width?: number;
  height?: number;
};
const Image = ({
  imageData,
  imageKey = "",
  className,
  hasShadow = false,
  isHero = false,
  width,
  height,
}: Props) => {
  const { getImageSrc } = useGallery();

  const image = imageData ?? getImageSrc(imageKey);
  return (
    <img
      src={image.image}
      width={width ?? 1120}
      height={height ?? 630}
      loading={isHero ? "eager" : "lazy"}
      className={`${className ?? ""} ${
        hasShadow ? "shadow-xl" : ""
      } aspect-video w-full h-full object-cover `}
      alt={image.description ?? image.key}
    />
  );
};

export default Image;
