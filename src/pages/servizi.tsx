import * as React from "react";
import { graphql, type HeadFC, type PageProps } from "gatsby";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import { HomePageData } from "types/home";
import { Vocabulary } from "context/Vocabulary";
import { Gallery } from "context/Gallery";
import Image from "components/Image";
import ContactUs from "components/sections/ContactUs";
import Card from "components/Card";
import Email from "images/email.svg";

const servicesCards = [
  {
    image: <Email />,
    text: "Medica",
    value:
      "Medici qualificati per un monitoraggio costante della salute degli ospiti.",
  },
  {
    image: <Email />,
    text: "Infermieristica",
    value: "Infermieri esperti per una gestione attenta delle cure quotidiane.",
  },
  {
    image: <Email />,
    text: "Quotidiana",
    value:
      "Supporto nelle attività quotidiane per mantenere l'indipendenza e il benessere.",
  },
  {
    image: <Email />,
    text: "Riabilitativa",
    value:
      "Programmi di fisioterapia personalizzati per favorire la mobilità e la salute fisica.",
  },
];

const dailyLifeCards = [
  {
    image: <Email />,
    text: "Alimentazione",
    value:
      "Pasti equilibrati e gustosi, preparati in loco, per soddisfare ogni esigenza.",
  },
  {
    image: <Email />,
    text: "Attività",
    value:
      "Un ricco calendario di eventi e attività ricreative, inclusi accesso a Internet e biblioteca.",
  },
  {
    image: <Email />,
    text: "Cura personale",
    value:
      "Servizi di parrucchiere, barbiere e podologo e lavanderia personalizzata.",
  },
];

const ServicesPage: React.FC<PageProps<HomePageData>> = ({ data }) => {
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
          <section className="gap-6 items-center">
            <h2 className="md:text-4xl lg:text-6xl">Scopri i nostri servizi</h2>
            <p className="max-w-[600px]">
              Dall'assistenza sanitaria alle attività ricreative, ogni servizio
              è pensato per il benessere e la felicità dei nostri ospiti.
            </p>
            <a href="" className="button-ghost mt-2">
              Scopri di più
            </a>
            <Image imageKey="caregiving" className="mt-2" />
          </section>
          <div className="flex flex-col lg:grid lg:grid-cols-2">
            <Image imageKey="caregiving" className="p-20" />

            <section className="gap-16">
              <h2 className="lg:text-left">Benessere del corpo</h2>
              <div className="flex flex-col gap-8 md:grid md:grid-cols-2">
                {servicesCards.map((card) => (
                  <Card
                    {...card}
                    key={card.value}
                    classNames={{
                      card: "lg:items-start",
                      title: "lg:text-left",
                      content: "lg:text-left",
                    }}
                  />
                ))}
              </div>
            </section>
          </div>
          <section className="gap-2 md:grid md:grid-cols-2">
            <div className="flex flex-col gap-2 justify-center">
              <h2 className="md:text-left">Benessere dell’anima</h2>
              <p className="body-1 md:text-left">
                La nostra casa offre assistenza religiosa per rispondere alle
                diverse esigenze spirituali dei nostri ospiti. Momenti di
                riflessione e servizi comunitari sono disponibili per chi cerca
                serenità e conforto spirituale in un ambiente accogliente e
                rispettoso.
              </p>
            </div>
            <Image imageKey="caregiving" className="mt-6" />
          </section>
          <div className="blue-section">
            <section className="gap-8">
              <h2>Vita quotidiana e tempo libero</h2>
              <Image imageKey="caregiving" />
              <div className="flex flex-col md:flex-row gap-8">
                {dailyLifeCards.map((card) => (
                  <Card {...card} key={card.value} invertColors />
                ))}
              </div>
            </section>
          </div>
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

export default ServicesPage;
