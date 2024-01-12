import { PageData, Terms } from "types/pageData";

const useTranslate = (pageData: PageData) => {
  // merging edges, each edge represents a "pageKey query", because our query is based on 2 different keys
  const terms = pageData.edges.reduce(
    (acc: Terms[], curr) => [...acc, ...(curr.node?.frontmatter?.terms || [])],
    []
  );

  const translate = (searchKey: string = "") =>
    terms?.find(({ key }: Terms) => key.trim().toLowerCase() === searchKey)
      ?.label ?? searchKey;

  return translate;
};

export default useTranslate;
