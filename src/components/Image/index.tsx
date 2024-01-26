import Floating from "components/Floating";
import { useGallery } from "context/Gallery";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { FloatingType } from "resources/floatingsData";
import { ImageItem } from "types/pageData";

type Props = {
  imageData?: ImageItem;
  imageKey?: string;
  className?: string;
  hasShadow?: boolean;
  isHero?: boolean;
  width?: number;
  height?: number;
  floatings?: FloatingType[];
};
const Image = ({
  imageData,
  imageKey = "",
  className,
  hasShadow = false,
  isHero = false,
  width,
  height,
  floatings = [],
}: Props) => {
  const { getImageSrc } = useGallery();

  const image = imageData ?? getImageSrc(imageKey);
  return (
    <div className="relative w-full flex max-w-2xl lg:max-w-6xl">
      <StaticImage
        src={image.image}
        width={width ?? 1120}
        height={height ?? 630}
        loading={isHero ? "eager" : "lazy"}
        className={`${className ?? ""} ${
          hasShadow ? "shadow-xl" : ""
        } aspect-video w-full h-full object-cover z-10 mx-auto`}
        alt={image.description ?? image.key}
      />
      {floatings?.map((f, index) => (
        <Floating
          key={f.key + image.key + index}
          keyName={f.key}
          style={f.style}
        />
      ))}
    </div>
  );
};

export default Image;
