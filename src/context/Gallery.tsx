import { graphql, useStaticQuery } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";
import React, { ReactNode, createContext, useContext } from "react";
import { ImageItem } from "types/pageData";

const GalleryContext = createContext<{
  getImage: (k: string) => {
    imageItem?: ImageItem;
    gatsbyImage?: IGatsbyImageData;
  };
}>({ getImage: (k: string) => ({}) });

type Props = {
  children: ReactNode;
  images: ImageItem[];
};
export const Gallery = ({ children, images = [] }: Props) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(tif)|(tiff)|(webp)|(jpeg)/" }
          absolutePath: { regex: "/img/" }
        }
      ) {
        edges {
          node {
            name
            childImageSharp {
              gatsbyImageData(width: 800)
            }
          }
        }
      }
    }
  `);

  const getImage = (searchKey: string = "") => {
    const imageItem = images.find(
      ({ key }: ImageItem) =>
        key.trim().toLowerCase() === searchKey.trim().toLowerCase()
    ) ?? { key: "", image: "" };
    console.log("🚀 ~ getImage ~ imageItem:", imageItem);

    const gatsbyImage = data.allFile.edges.find(
      (e: { node: { name: string; childImageSharp: unknown } }) =>
        imageItem.image.includes(e.node.name)
    )?.node?.childImageSharp?.gatsbyImageData;
    console.log("🚀 ~ getImage ~ gatsbyImage:", gatsbyImage);
    return {
      imageItem,
      gatsbyImage,
    };
  };

  return (
    <GalleryContext.Provider value={{ getImage }}>
      {children}
    </GalleryContext.Provider>
  );
};

export const useGallery = () => useContext(GalleryContext);
