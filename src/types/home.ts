export enum SECTION_KEYS {
  HERO = "hero",
  WHO_WE_ARE = "whoWeAre",
  OUR_SERVICES = "ourServices",
  FIND_US = "findUs",
  THE_BUILDING = "theBuilding",
  EVENTS = "events",
}

export type HomePageData = {
  homePageData: {
    edges: Array<{
      node: {
        frontmatter: SectionProps;
        html: string;
      };
    }>;
  };
};

export type SectionProps = {
  headerImage: {
    image: string;
    imageAlt: string;
  };
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
  pageKey: string;
  sectionKey: string;
  heading: string;
  body: string;
};
