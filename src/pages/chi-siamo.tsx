import * as React from "react";
import { graphql, type HeadFC, type PageProps } from "gatsby";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import { HomePageData } from "types/home";
import { Gallery } from "context/Gallery";
import Image from "components/Image";
import ContactUs from "components/ContactUs";
import useTranslate from "hooks/useTranslate";

const WhoWeArePage: React.FC<PageProps<HomePageData>> = ({ data }) => {
  const images = data.homePageData.edges.find(
    (edge) => !!edge.node.frontmatter.images?.length
  )?.node.frontmatter.images;

  const translate = useTranslate(data.homePageData);

  return (
    <Gallery images={images ?? []}>
      <Navbar />
      <main className="relative">
        <section className="gap-8 items-center">
          <h2 className="md:text-4xl lg:text-6xl">Scopri la nostra storia</h2>
          <p className="max-w-[600px]">
            La Casa di Riposo 'Mons. Michele Cosentino' è più di una struttura
            assistenziale: è un ambiente familiare e accogliente, dove
            professionalità, cura e rispetto si uniscono per offrire una vita
            serena agli anziani.
          </p>
          <a href="" className="button-ghost">
            Scopri di più
          </a>
          <Image imageKey="caregiving" className="" />
        </section>
        <section className="md:grid md:grid-cols-2 gap-2 md:gap-20 lg:gap-40">
          <div className="flex flex-col md:justify-center gap-2 lg:gap-6">
            <h2 className="md:text-left">La nostra missione</h2>
            <p className="md:text-left">
              Fornire assistenza e supporto di alta qualità agli anziani,
              garantendo loro dignità, indipendenza e una vita ricca di momenti
              felici e sereni.
            </p>
          </div>
          <Image imageKey="caregiving" className="mt-6" />
        </section>
        <div className="blue-section">
          <section className="md:grid md:grid-cols-2 gap-2 md:gap-20 lg:gap-40">
            <div className="flex flex-col md:justify-center gap-2 lg:gap-6">
              <h2 className="md:text-left">La nostra visione</h2>
              <p className="md:text-left">
                Essere riconosciuti come un punto di riferimento nell'assistenza
                agli anziani, un luogo dove ogni ospite si sente valorizzato, e
                parte di una famiglia.
              </p>
            </div>
            <Image imageKey="caregiving" className="mt-6 md:order-[-1]" />
          </section>
        </div>
        <ContactUs />
      </main>
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

export default WhoWeArePage;
