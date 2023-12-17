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

const IndexPage: React.FC<PageProps<HomePageData>> = ({ data }) => {
  console.log("🚀 ~ file: index.tsx:13 ~ data:", data);
  const terms = data.homePageData.edges.find(
    (edge) => !!edge.node.frontmatter.terms?.length
  )?.node.frontmatter.terms;
  console.log("🚀 ~ file: index.tsx:16 ~ terms:", terms);

  return (
    <Vocabulary terms={terms ?? []}>
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
            lsit {
              text
              image
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
