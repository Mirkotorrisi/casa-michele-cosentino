import { ImageItem, PageData } from "types/pageData";

export const getImages = (pageData: PageData) =>
  pageData.edges.reduce(
    (acc: ImageItem[], curr) => [
      ...acc,
      ...(curr.node?.frontmatter?.images || []),
    ],
    []
  );

export const getListItems = (pageData: PageData, listKey: string) =>
  pageData.edges.find((edge) => edge.node.frontmatter.listKey === listKey)?.node
    ?.frontmatter?.listItem ?? [];
