export type PageData = {
  edges: Array<{
    node: {
      frontmatter: {
        lists: List[] | null;
        terms: Terms[] | null;
        images: Images[] | null;
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

export type List = {
  image: string;
  imageAlt: string;
  text: string;
  pageKey: string;
  sectionKey: string;
  heading: string;
  callToActions: {
    firstCTA: {
      heading: string;
      subHeading: string;
      linkType: string;
      linkURL: string;
    };
    secondCTA: {
      heading: string;
      subHeading: string;
      linkType: string;
      linkURL: string;
    };
  };
};
