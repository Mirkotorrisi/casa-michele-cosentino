export type HomePageData = {
  homePageData: {
    edges: Array<{
      node: {
        frontmatter: {
          lists: List[] | null;
          terms: Terms[] | null;
        };
        html: string;
      };
    }>;
  };
};

export type Terms = {
  key: string;
  label: string;
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
