import * as React from "react";
import { graphql, type HeadFC, type PageProps } from "gatsby";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import { Gallery } from "context/Gallery";
import useTranslate from "hooks/useTranslate";
import { PageData } from "types/pageData";

const IndexPage: React.FC<PageProps<{ homePageData: PageData }>> = ({
  data,
}) => {
  const images = data.homePageData.edges.find(
    (edge) => !!edge.node.frontmatter.images?.length
  )?.node.frontmatter.images;

  const translate = useTranslate(data.homePageData);

  return (
    <Gallery images={images ?? []}>
      <Navbar />
      <main className="relative">
        <iframe
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fcasamichelecosentino&tabs=timeline&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false&appId=73794053396"
          width="340"
          height="500"
          title="Pagina Facebook - Casa Mons Michele Cosentino"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
      </main>
      <Footer />
    </Gallery>
  );
};

export const Head: HeadFC = () => <title>Home | Casa Michele Cosentino</title>;

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
