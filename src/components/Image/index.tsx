import Floating from "components/Floating";
import { useGallery } from "context/Gallery";
import { GatsbyImage } from "gatsby-plugin-image";
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
  const { getImage } = useGallery();

  const { imageItem, gatsbyImage } = getImage(imageKey);

  const props = {
    width: width ?? 112,
    height: height ?? 63,
    loading: (isHero ? "eager" : "lazy") as "eager" | "lazy",
    className: `${className ?? ""} ${
      hasShadow ? "shadow-xl" : ""
    } aspect-video w-full h-full object-cover z-10 mx-auto`,
    alt: imageItem?.description ?? imageItem?.key ?? "",
  };
  return (
    <div className="relative w-full flex max-w-2xl lg:max-w-6xl">
      {imageData ? (
        <img src={imageData.image} {...props} />
      ) : (
        gatsbyImage && <GatsbyImage image={gatsbyImage} {...props} />
      )}
      {floatings?.map((f, index) => (
        <Floating
          key={f.key + imageItem?.key + index}
          keyName={f.key}
          style={f.style}
        />
      ))}
    </div>
  );
};

export default Image;
