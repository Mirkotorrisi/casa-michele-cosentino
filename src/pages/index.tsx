import * as React from "react";
import { graphql, type HeadFC, type PageProps } from "gatsby";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import Hero from "components/Hero";
import WhoWeAre from "components/WhoWeAre";
import OurServices from "components/OurServices";
import { HomePageData, SECTION_KEYS, SectionProps } from "types/home";
import Carousel from "components/Carousel";

const IndexPage: React.FC<PageProps<HomePageData>> = ({ data }) => {
  console.log("🚀 ~ file: index.tsx:11 ~ data:", data);
  const props: Record<string, SectionProps> = data.homePageData.edges.reduce(
    (acc, { node: { frontmatter, html } }) => ({
      ...acc,
      [frontmatter.sectionKey]: { ...frontmatter, body: html },
    }),
    {}
  );
  return (
    <>
      <Navbar />
      <main className="relative">
        <Hero {...(props[SECTION_KEYS.HERO] || {})} />
        <WhoWeAre {...(props[SECTION_KEYS.WHO_WE_ARE] || {})} />
        <OurServices {...(props[SECTION_KEYS.OUR_SERVICES] || {})} />
        <Carousel {...(props[SECTION_KEYS.OUR_SERVICES] || {})} />
      </main>
      <Footer />
    </>
  );
};

export const Head: HeadFC = () => <title>Casa Cosentino</title>;

export const query = graphql`
  query HomePageQuery {
    homePageData: allMarkdownRemark(
      filter: { frontmatter: { pageKey: { eq: "home" } } }
    ) {
      edges {
        node {
          frontmatter {
            headerImage {
              image
              imageAlt
            }
            callToActions {
              firstCTA {
                heading
                subHeading
                linkType
                linkURL
              }
              secondCTA {
                heading
                subHeading
                linkType
                linkURL
              }
            }
            pageKey
            sectionKey
            heading
          }
          html
        }
      }
    }
  }
`;

export default IndexPage;
