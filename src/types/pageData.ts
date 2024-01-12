export type PageData = {
  edges: Array<{
    node: {
      frontmatter: {
        listItem: ListItem[] | null;
        terms: Terms[] | null;
        images: Images[] | null;
        pageKey: "home" | "feste-ed-eventi" | "servizi" | "chi-siamo";
        listKey: string;
      };
      html: string;
    };
  }>;
};

export type Terms = {
  key: string;
  label: string;
};
export type Images = {
  key: string;
  image: string;
  description?: string;
};

export type ListItem = {
  image: string;
  imageAlt: string;
  text: string;
  title: string;
  pageKey: string;
  sectionKey: string;
  heading: string;
  links: { linkText: string; linkURL: string }[];
};
