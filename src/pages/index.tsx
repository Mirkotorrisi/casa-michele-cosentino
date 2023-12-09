import * as React from "react";
import { graphql, type HeadFC, type PageProps } from "gatsby";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import Hero from "components/Hero";
import WhoWeAre from "components/WhoWeAre";
import OurServices from "components/OurServices";

const IndexPage: React.FC<PageProps> = (data) => {
  console.log("🚀 ~ file: index.tsx:10 ~ data:", data);
  return (
    <main className="relative w-screen m-0 flex flex-col">
      <Navbar />
      <Hero />
      <WhoWeAre />
      <OurServices />
      <Footer />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Casa Cosentino</title>;

export const pageQuery = graphql`
  query HomePageQuery {
    allMarkdownRemark(
      filter: {
        frontmatter: { presenters: { elemMatch: { text: { ne: null } } } }
      }
      sort: { order: DESC, fields: frontmatter___date }
    ) {
      edges {
        node {
          frontmatter {
            title
          }
        }
      }
    }
    homePageData: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "home-page" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
