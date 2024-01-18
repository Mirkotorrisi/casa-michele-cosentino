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
import { getImages, getListItems } from "helpers";
import { getSvgIcon } from "resources/getSvgIcon";

const EventsPage: React.FC<PageProps<{ eventsPageData: PageData }>> = ({
  data,
}) => {
  const images = getImages(data.eventsPageData);
  const eventCards = getListItems(data.eventsPageData, "events-cards");

  const translate = useTranslate(data.eventsPageData);

  return (
    <Gallery images={images ?? []}>
      <Navbar currentPage="eventi" />
      <main className="relative pt-[104px] lg:pt-0">
        <section className="gap-8 items-center">
          <h2 className="md:text-4xl lg:text-6xl">{translate("hero-title")}</h2>
          <p className="max-w-[600px]">{translate("hero-subtitle")}</p>
          <a href="" className="button-ghost mt-2">
            {translate("discover-more")} {getSvgIcon("arrow-down")}
          </a>
          <Image imageKey="hero-image" className="hero-image" />
        </section>
        <section className="gap-8 lg:gap-16 ">
          <div className="flex flex-col md:justify-center gap-2 lg:gap-6">
            <h2 className="heading-2">{translate("yearly-events")}</h2>
            <p className="body-2">{translate("yearly-events-sub")}</p>
          </div>
          <div className="flex flex-col gap-8 md:grid md:grid-cols-3 lg:gap-y-16">
            {eventCards?.map((c) => (
              <Card
                key={c.title}
                image={
                  <img
                    src={c.image}
                    className="image-card rounded-md"
                    alt={c.text}
                  />
                }
                title={c.title}
                text={c.text}
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
              <h2 className="heading-2 md:text-left">
                {translate("associations-title")}
              </h2>
              <p className="md:text-left">
                {translate("associations-subtitle")}
              </p>
            </div>
            <Image imageKey="eventi-2" className="mt-6 md:mt-0" />
          </section>
        </div>
        <section className="gap-3">
          <h2 className="heading-2">{translate("our-events-moments")}</h2>
          <p className="body-1">{translate("our-events-moments-sub")}</p>
        </section>
        <Carousel className="mb-8 md:mb-10 lg:mb-20" />
        <ContactUs
          title={translate("contact-title")}
          subtitle={translate("contact-subtitle")}
          contactCards={getListItems(data.eventsPageData, "contact-cards")}
        />
      </main>
      <Footer />
    </Gallery>
  );
};

export const Head: HeadFC = () => (
  <title>Eventi | Casa Michele Cosentino</title>
);

export const query = graphql`
  query EventsPageQuery {
    eventsPageData: allMarkdownRemark(
      filter: { frontmatter: { pageKey: { in: ["eventi", "contattaci"] } } }
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
              title
              links {
                linkURL
              }
            }
            listKey
          }
        }
      }
    }
  }
`;

export default EventsPage;
