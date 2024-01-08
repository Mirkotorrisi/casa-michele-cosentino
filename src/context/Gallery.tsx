import React, { ReactNode, createContext, useContext } from "react";
import { Images } from "types/pageData";

const GalleryContext = createContext<{
  getImageSrc: (k: string) => Images;
}>({ getImageSrc: (k: string) => ({ key: "", image: "" }) });

type Props = {
  children: ReactNode;
  images: Images[];
};
export const Gallery = ({ children, images = [] }: Props) => {
  const getImageSrc = (searchKey: string = "") =>
    images.find(
      ({ key }: Images) =>
        key.trim().toLowerCase() === searchKey.trim().toLowerCase()
    ) ?? { key: "", image: "" };
  return (
    <GalleryContext.Provider value={{ getImageSrc }}>
      {children}
    </GalleryContext.Provider>
  );
};

export const useGallery = () => useContext(GalleryContext);
