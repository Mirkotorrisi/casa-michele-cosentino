import * as React from "react";
import { graphql, type HeadFC, type PageProps } from "gatsby";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import { HomePageData } from "types/home";
import { Gallery } from "context/Gallery";
import useTranslate from "hooks/useTranslate";

const IndexPage: React.FC<PageProps<HomePageData>> = ({ data }) => {
  const images = data.homePageData.edges.find(
    (edge) => !!edge.node.frontmatter.images?.length
  )?.node.frontmatter.images;

  const translate = useTranslate(data.homePageData);

  return (
    <Gallery images={images ?? []}>
      <Navbar />
      <main className="relative"></main>
      <Footer />
    </Gallery>
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
