import { PageData, Terms } from "types/pageData";

const useTranslate = (data: PageData) => {
  const terms = data.edges.find((edge) => !!edge.node.frontmatter.terms?.length)
    ?.node.frontmatter.terms;

  const translate = (searchKey: string = "") =>
    terms?.find(({ key }: Terms) => key.trim().toLowerCase() === searchKey)
      ?.label ?? searchKey;

  return translate;
};

export default useTranslate;
