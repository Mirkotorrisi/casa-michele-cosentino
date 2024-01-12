import * as React from "react";
import { graphql, type HeadFC, type PageProps } from "gatsby";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import { Gallery } from "context/Gallery";
import Image from "components/Image";
import ContactUs from "components/ContactUs";
import Card from "components/Card";
import { PageData } from "types/pageData";
import useTranslate from "hooks/useTranslate";
import { getSvgIcon } from "resources/getSvgIcon";
import { getImages, getListItems } from "helpers";

const ServicesPage: React.FC<PageProps<{ servicesPageData: PageData }>> = ({
  data,
}) => {
  console.log("🚀 ~ data:", data);
  const images = getImages(data.servicesPageData);
  const servicesCards = getListItems(data.servicesPageData, "services-cards");
  const dailyLifeCards = getListItems(
    data.servicesPageData,
    "daily-life-cards"
  );

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
          <Image imageKey="servizi-image-1" className="mt-2" />
        </section>
        <div className="flex flex-col lg:grid lg:grid-cols-2">
          <Image imageKey="servizi-image-2" className="p-20" />

          <section className="gap-16">
            <h2 className="lg:text-left">{translate("body-wellness")}</h2>
            <div className="flex flex-col gap-8 md:grid md:grid-cols-2">
              {servicesCards?.map((card) => (
                <Card
                  title={card.title}
                  text={card.text}
                  image={getSvgIcon(card.title)}
                  key={card.title}
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
          <Image imageKey="servizi-image-3" className="mt-6" />
        </section>
        <div className="blue-section">
          <section className="gap-8">
            <h2>{translate("daily-life-title")}</h2>
            <Image imageKey="servizi-image-4" />
            <div className="flex flex-col md:flex-row gap-8">
              {dailyLifeCards?.map((card) => (
                <Card
                  title={card.title}
                  text={card.text}
                  image={getSvgIcon(card.title)}
                  key={card.title}
                  invertColors
                />
              ))}
            </div>
          </section>
        </div>
        <ContactUs
          title={translate("contact-title")}
          subtitle={translate("contact-subtitle")}
          contactCards={getListItems(data.servicesPageData, "contact-cards")}
        />
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
      filter: { frontmatter: { pageKey: { in: ["servizi", "contattaci"] } } }
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
            listKey
            listItem {
              text
              title
              image
              links {
                linkText
                linkURL
              }
            }
          }
        }
      }
    }
  }
`;

export default ServicesPage;
