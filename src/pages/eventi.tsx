import * as React from "react";
import { graphql, type HeadFC, type PageProps } from "gatsby";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import { Gallery } from "context/Gallery";
import Image from "components/Image";
import ContactUs from "components/ContactUs";
import Card from "components/Card";
import Carousel from "components/Carousel";
import useTranslate from "hooks/useTranslate";
import { PageData } from "types/pageData";

const eventCards = [
  {
    image: <Image className="image-card" imageKey="caregiving" />,
    text: "Complemese",
    value: "Una festa mensile per tutti gli ospiti che festeggiano nel mese.",
  },
  {
    image: <Image className="image-card" imageKey="caregiving" />,
    text: "Festa della Mamma e del Papà",
    value: "Celebrazioni dedicate per onorare i genitori.",
  },
  {
    image: <Image className="image-card" imageKey="caregiving" />,
    text: "Festa d’Estate",
    value: "Un evento all'insegna del divertimento e del relax estivo.",
  },
  {
    image: <Image className="image-card" imageKey="caregiving" />,
    text: "Festa di Vendemmia",
    value: "Una giornata per celebrare la natura e le tradizioni.",
  },
  {
    image: <Image className="image-card" imageKey="caregiving" />,
    text: "Festa di Natale e Befana",
    value: "Magici momenti invernali di festa e allegria.",
  },
  {
    image: <Image className="image-card" imageKey="caregiving" />,
    text: "Festa di Carnevale",
    value: "Colori e maschere per un divertimento senza età.",
  },
];

const EventsPage: React.FC<PageProps<{ eventsPageData: PageData }>> = ({
  data,
}) => {
  const images = data.eventsPageData.edges.find(
    (edge) => !!edge.node.frontmatter.images?.length
  )?.node.frontmatter.images;

  const translate = useTranslate(data.eventsPageData);

  return (
    <Gallery images={images ?? []}>
      <Navbar />
      <main className="relative">
        <section className="gap-8 items-center">
          <h2 className="md:text-4xl lg:text-6xl">
            Celebrazioni e momenti di convivialità
          </h2>
          <p className="max-w-[600px]">
            Un calendario ricco di eventi per favorire la socializzazione e
            condividere momenti felici insieme.
          </p>
          <Image imageKey="caregiving" className="" />
        </section>
        <section className="gap-8 lg:gap-16 ">
          <div className="flex flex-col md:justify-center gap-2 lg:gap-6">
            <h2>Eventi durante l’anno</h2>
            <p className="body-2">
              Da celebrazioni tradizionali a incontri culturali, ogni evento è
              un'occasione speciale per riunire la nostra comunità
            </p>
          </div>
          <div className="flex flex-col gap-8 md:grid md:grid-cols-3 lg:gap-y-16">
            {eventCards.map((c) => (
              <Card
                image={c.image}
                text={c.text}
                value={c.value}
                classNames={{
                  title: "bold",
                  content: "body-3",
                }}
              />
            ))}
          </div>
        </section>
        <div className="blue-section">
          <section className="md:grid md:grid-cols-2 gap-2 md:gap-20 ">
            <div className="flex flex-col md:justify-center gap-2 lg:gap-6">
              <h2 className="md:text-left">
                Incontri con Associazioni Culturali
              </h2>
              <p className="md:text-left">
                Collaborazioni con entità locali per arricchire la vita sociale
                e culturale dei nostri ospiti.
              </p>
            </div>
            <Image imageKey="caregiving" className="mt-6 md:mt-0" />
          </section>
        </div>
        <section className="gap-3">
          <h2>I Momenti dei Nostri Eventi</h2>
          <p className="body-1">
            Scorri la galleria per vedere i momenti felici e le celebrazioni
            nella nostra casa.
          </p>
        </section>
        <Carousel className="mb-8 md:mb-10 lg:mb-20" />
        <ContactUs />
      </main>
      <Footer />
    </Gallery>
  );
};

export const Head: HeadFC = () => (
  <title>Eventi | Casa Michele Cosentino</title>
);

export const query = graphql`
  query HomePageQuery {
    eventsPageData: allMarkdownRemark(
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

export default EventsPage;
