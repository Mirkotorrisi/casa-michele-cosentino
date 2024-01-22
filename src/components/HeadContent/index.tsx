import React from "react";
import { PageData } from "types/pageData";

type Props = {
  title: string;
  data: PageData;
  description: string;
};

const HeadContent = ({ title, data, description }: Props) => {
  const images = data.edges.find(
    (edge) => !!edge.node.frontmatter.images?.length
  )?.node.frontmatter.images;
  const ogImage =
    images?.find((image) => image.key === "hero-image")?.image ??
    images?.[0]?.image;
  return (
    <>
      <title>{title}</title>
      <meta lang="it-IT" />
      <meta property="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={ogImage} />
    </>
  );
};

export default HeadContent;
