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
import CarouselMini from "components/CarouselMini";

const ServicesPage: React.FC<PageProps<{ servicesPageData: PageData }>> = ({
  data,
}) => {
  const images = getImages(data.servicesPageData);
  const servicesCards = getListItems(data.servicesPageData, "services-cards");
  const dailyLifeCards = getListItems(
    data.servicesPageData,
    "daily-life-cards"
  );
  const spiritualityCards = getListItems(
    data.servicesPageData,
    "spirituality-cards"
  );

  const translate = useTranslate(data.servicesPageData);

  return (
    <Gallery images={images ?? []}>
      <Navbar currentPage="servizi" />
      <main className="relative lg:pt-0">
        <section className="gap-6 items-center">
          <h2 className="md:text-4xl lg:text-6xl">{translate("hero-title")}</h2>
          <p className="max-w-[600px]">{translate("hero-subtitle")}</p>
          <a href="" className="button-ghost mt-2 ">
            {translate("discover-more")} {getSvgIcon("arrow-down")}
          </a>
          <Image imageKey="hero-image" className="mt-2 lg:mt-8 hero-image" />
        </section>
        <div className="flex flex-col lg:grid lg:grid-cols-2">
          <section className="gap-16 ">
            <h2 className="lg:text-left heading-2">
              {translate("first-section-h2")}
            </h2>
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
          <div className="lg:order-[-1] lg:p-14">
            <CarouselMini />
          </div>
        </div>
        <div className="flex flex-col lg:grid lg:grid-cols-2">
          <section className="gap-2 md:grid md:grid-cols-2 md:p-0 lg:p-10 lg:flex lg:flex-col">
            <div className="flex flex-col gap-2 justify-center md:p-10 lg:pb-0">
              <h2 className="md:text-left heading-2">
                {translate("second-section-h2")}
              </h2>
              <p className="body-1 md:text-left">
                {translate("second-section-paragraph")}
              </p>
            </div>
            <div className="flex flex-col gap-4 divide-y md:p-10 lg:pt-0">
              {spiritualityCards.map(({ title, text }) => (
                <div className="flex flex-col gap-2 pt-4">
                  <p className="!text-left bold ">{title}</p>
                  <p className="!text-left body-3 ">{text}</p>
                </div>
              ))}
            </div>
          </section>
          <div className="lg:p-14">
            <CarouselMini />
          </div>
        </div>
        <div className="blue-section">
          <section className="gap-8 items-center">
            <h2 className="heading-2">{translate("daily-life-title")}</h2>
            <p>{translate("daily-life-sub")}</p>
            <Image
              imageKey="servizi-2"
              className="hero-image mx-auto my-10 lg:my-20"
            />
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
