import * as React from "react";
import { graphql, type HeadFC, type PageProps } from "gatsby";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import Hero from "components/sections/Hero";
import WhoWeAre from "components/sections/WhoWeAre";
import OurServices from "components/sections/OurServices";
import { HomePageData } from "types/home";
import Carousel from "components/Carousel";
import { Vocabulary } from "context/Vocabulary";
import SpecialMoments from "components/sections/SpecialMoments";
import ContactUs from "components/sections/ContactUs";
import { Gallery } from "context/Gallery";

const IndexPage: React.FC<PageProps<HomePageData>> = ({ data }) => {
  const terms = data.homePageData.edges.find(
    (edge) => !!edge.node.frontmatter.terms?.length
  )?.node.frontmatter.terms;
  const images = data.homePageData.edges.find(
    (edge) => !!edge.node.frontmatter.images?.length
  )?.node.frontmatter.images;

  return (
    <Vocabulary terms={terms ?? []}>
      <Gallery images={images ?? []}>
        <Navbar />
        <main className="relative">
          <Hero />
          <WhoWeAre />
          <OurServices />
          <Carousel />
          <SpecialMoments />
          <ContactUs />
        </main>
        <Footer />
      </Gallery>
    </Vocabulary>
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
            pageKey
            terms {
              label
              key
            }
            images {
              key
              image
              description
            }
            listItem {
              text
              image
            }
            listKey
          }
        }
      }
    }
  }
`;

export default IndexPage;
