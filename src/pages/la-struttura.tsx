import * as React from "react";
import { graphql, type HeadFC, type PageProps } from "gatsby";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import Image from "components/Image";
import { Gallery } from "context/Gallery";
import useTranslate from "hooks/useTranslate";
import { PageData } from "types/pageData";
import { getSvgIcon } from "resources/getSvgIcon";
import { getImages, getListItems } from "helpers";
import Card from "components/Card";
import Carousel from "components/Carousel";
import useIsMobile from "hooks/useIsMobile";
import ContactUs from "components/ContactUs";
import CarouselMini from "components/CarouselMini";

const TheBuildingPage: React.FC<
  PageProps<{ theBuildingPageData: PageData }>
> = ({ data }) => {
  const images = getImages(data.theBuildingPageData);
  const servicesCards = getListItems(
    data.theBuildingPageData,
    "services-cards"
  );

  const translate = useTranslate(data.theBuildingPageData);

  return (
    <Gallery images={images ?? []}>
      <Navbar currentPage="la-struttura" />
      <main className="relative pt-[104px] lg:pt-0">
        <section className="gap-8 items-center">
          <h2 className="md:text-4xl lg:text-6xl">{translate("hero-title")}</h2>
          <p className="max-w-[600px]">{translate("hero-subtitle")}</p>
          <a href="" className="button-ghost mt-2 ">
            {translate("discover-more")} {getSvgIcon("arrow-down")}
          </a>
          <Image imageKey="hero-image" className="hero-image" />
        </section>
        <section className="gap-8 items-center md:grid md:grid-cols-2 md:gap-20 lg:gap-40">
          <div className="flex flex-col gap-8">
            <h2 className="heading-2 md:text-left md:text-4xl lg:text-6xl">
              {translate("second-section-heading")}
            </h2>
            <p className="md:text-left max-w-[600px]">
              {translate("second-section-sub")}
            </p>
          </div>
          <CarouselMini />
        </section>
        <section className="items-center gap-6">
          <div className="flex flex-col items-center gap-4 max-w-[800px]">
            <h2 className="heading-2">{translate("fourth-section-title")}</h2>
            <p className="">{translate("fourth-section-subtitle")}</p>
          </div>
        </section>
        <Carousel />
        <section className="gap-8 items-center md:grid md:grid-cols-2 md:gap-20 lg:gap-40">
          <div className="flex flex-col gap-8">
            <h2 className="heading-2 md:text-left md:text-4xl lg:text-6xl">
              {translate("fourth-section-title")}
            </h2>
            <p className="md:text-left max-w-[600px]">
              {translate("fourth-section-subtitle")}
            </p>
          </div>
          <CarouselMini />
        </section>
        <div className="blue-section">
          <section className="gap-8 items-center md:gap-16">
            <div className="flex flex-col items-center gap-8">
              <h2 className="heading-2 md:text-4xl lg:text-6xl">
                {translate("our-services")}
              </h2>
              <p className="max-w-[800px]">
                {translate("our-services-description")}
              </p>
              <a href="/servizi" className="button-solid-blue mt-2">
                {translate("our-services-cta")}
              </a>
            </div>
            <div className="flex flex-col gap-8 md:grid md:grid-cols-3 lg:gap-y-16">
              {servicesCards?.map((c) => (
                <Card
                  key={c.title}
                  invertColors
                  image={
                    <img
                      src={c.image}
                      className="aspect-square rounded-md"
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
        </div>
        <ContactUs
          title={translate("contact-title")}
          subtitle={translate("contact-subtitle")}
          contactCards={getListItems(data.theBuildingPageData, "contact-cards")}
        />
      </main>
      <Footer />
    </Gallery>
  );
};

export const Head: HeadFC = () => (
  <title>La struttura | Casa Michele Cosentino</title>
);

export const query = graphql`
  query TheBuildingPageQuery {
    theBuildingPageData: allMarkdownRemark(
      filter: {
        frontmatter: { pageKey: { in: ["la-struttura", "contattaci"] } }
      }
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

export default TheBuildingPage;
