import * as React from "react";
import { graphql, type HeadFC, type PageProps } from "gatsby";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import { Gallery } from "context/Gallery";
import Image from "components/Image";
import ContactUs from "components/ContactUs";
import Card from "components/Card";
import Email from "images/email.svg";
import { PageData } from "types/pageData";
import useTranslate from "hooks/useTranslate";

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

const ServicesPage: React.FC<PageProps<{ servicesPageData: PageData }>> = ({
  data,
}) => {
  const images = data.servicesPageData.edges.find(
    (edge) => !!edge.node.frontmatter.images?.length
  )?.node.frontmatter.images;

  const translate = useTranslate(data.servicesPageData);

  return (
    <Gallery images={images ?? []}>
      <Navbar />
      <main className="relative">
        <section className="gap-6 items-center">
          <h2 className="md:text-4xl lg:text-6xl">{translate("hero-title")}</h2>
          <p className="max-w-[600px]">{translate("hero-subtitle")}</p>
          <a href="" className="button-ghost mt-2">
            {translate("discover-more")}
          </a>
          <Image imageKey="caregiving" className="mt-2" />
        </section>
        <div className="flex flex-col lg:grid lg:grid-cols-2">
          <Image imageKey="caregiving" className="p-20" />

          <section className="gap-16">
            <h2 className="lg:text-left">{translate("body-wellness")}</h2>
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
            <h2 className="md:text-left">{translate("soul-wellness")}</h2>
            <p className="body-1 md:text-left">
              {translate("soul-wellness-sub")}
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
  );
};

export const Head: HeadFC = () => (
  <title>Servizi | Casa Michele Cosentino</title>
);

export const query = graphql`
  query ServicesPageQuery {
    servicesPageData: allMarkdownRemark(
      filter: { frontmatter: { pageKey: { eq: "servizi" } } }
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
