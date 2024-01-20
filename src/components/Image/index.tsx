import { useGallery } from "context/Gallery";
import React from "react";
import { ImageItem } from "types/pageData";

type Props = {
  imageData?: ImageItem;
  imageKey?: string;
  className?: string;
  hasShadow?: boolean;
};
const Image = ({
  imageData,
  imageKey = "",
  className,
  hasShadow = false,
}: Props) => {
  const { getImageSrc } = useGallery();

  const image = imageData ?? getImageSrc(imageKey);
  return (
    <img
      src={image.image}
      width={1120}
      height={630}
      className={`${className ?? ""} ${
        hasShadow ? "shadow-xl" : ""
      } aspect-video w-full h-full object-cover `}
      alt={image.description ?? image.key}
    />
  );
};

export default Image;
