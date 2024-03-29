import Card from "components/Card";
import CarouselMini from "components/CarouselMini";
import ContactUs from "components/ContactUs";
import Footer from "components/Footer";
import HeadContent from "components/HeadContent";
import Hero from "components/Hero";
import Image from "components/Image";
import Navbar from "components/Navbar";
import SectionHeadings from "components/SectionHeadings";
import { Gallery } from "context/Gallery";
import { graphql, type HeadFC, type PageProps } from "gatsby";
import { getImages, getListItems } from "helpers";
import useScrollToRef from "hooks/useScrollToRef";
import useScrollToTop from "hooks/useScrollToTop";
import useTranslate from "hooks/useTranslate";
import * as React from "react";
import {
  servicesHeroFloatings,
  servicesSecondFloatings,
} from "resources/floatingsData";
import { getSvgIcon } from "resources/getSvgIcon";
import { PageData } from "types/pageData";

type PagePropsData = { servicesPageData: PageData };

const ServicesPage: React.FC<PageProps<PagePropsData>> = ({ data }) => {
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
  const servicesFirstCarousel = getListItems(
    data.servicesPageData,
    "carousel-servizi-1"
  );
  const servicesSecondCarousel = getListItems(
    data.servicesPageData,
    "carousel-servizi-2"
  );

  const translate = useTranslate(data.servicesPageData);
  const { ref, scrollToSection } = useScrollToRef();

  useScrollToTop();

  return (
    <Gallery images={images ?? []}>
      <Navbar currentPage="servizi" />
      <main className="relative pt-[104px]">
        <Hero
          title={translate("hero-title")}
          subtitle={translate("hero-subtitle")}
          onCtaClick={scrollToSection}
          ctaText={translate("discover-more")}
          floatings={servicesHeroFloatings}
        />
        <div className="flex flex-col lg:grid lg:grid-cols-2">
          <section className="gap-16 lg:items-start" ref={ref}>
            <h2 className="lg:text-left heading-2">
              {translate("servizi-2-h")}
            </h2>
            <div className="flex flex-col gap-8 md:grid md:grid-cols-2">
              {servicesCards?.map((card) => (
                <Card
                  title={card.title}
                  text={card.text}
                  image={getSvgIcon(card.links?.[0]?.linkText)}
                  key={card.title}
                  classNames={{
                    card: "lg:items-start",
                    title: "lg:text-left",
                    content: "body-3 lg:text-left",
                  }}
                />
              ))}
            </div>
          </section>
          <div className="lg:order-[-1] md:p-4 lg:p-14">
            <CarouselMini images={servicesFirstCarousel} />
          </div>
        </div>
        <div className="flex flex-col lg:grid lg:grid-cols-2">
          <section className="md:grid md:grid-cols-2 md:gap-x-20 md:p-10 lg:p-20 lg:flex lg:flex-col lg:items-start gap-6 lg:gap-8">
            <SectionHeadings
              goesToLeft
              title={translate("servizi-3-h")}
              subtitle={translate("servizi-3-p")}
            />
            <div className="flex flex-col gap-4 divide-y">
              {spiritualityCards.map(({ title, text }) => (
                <div className="flex flex-col gap-2 pt-4" key={title}>
                  <p className="md:!text-left bold">{title}</p>
                  <p className="md:!text-left body-3">{text}</p>
                </div>
              ))}
            </div>
          </section>
          <div className="md:p-4 lg:p-14">
            <CarouselMini images={servicesSecondCarousel} />
          </div>
        </div>
        <div className="blue-section">
          <section className="gap-8">
            <SectionHeadings
              title={translate("servizi-4-h")}
              subtitle={translate("servizi-4-p")}
            />
            <Image
              imageKey="servizi-2"
              className="hero-image mx-auto my-10 lg:my-20"
              hasShadow
              floatings={servicesSecondFloatings}
            />
            <div className="flex flex-col md:flex-row gap-8">
              {dailyLifeCards?.map((card) => (
                <Card
                  title={card.title}
                  text={card.text}
                  image={getSvgIcon(card.links?.[0]?.linkText)}
                  key={card.title}
                  classNames={{
                    content: "body-3",
                  }}
                />
              ))}
            </div>
          </section>
        </div>
        <ContactUs
          title={translate("contact-h")}
          subtitle={translate("contact-p")}
          contactCards={getListItems(data.servicesPageData, "contact-cards")}
        />
      </main>
      <Footer />
    </Gallery>
  );
};

export const Head: HeadFC = ({ data }) => (
  <HeadContent
    title="I nostri servizi | Casa Michele Cosentino"
    data={(data as PagePropsData).servicesPageData}
    description="Pagina che illustra tutti i servizi offerti agli ospiti della casa di riposo Michele Cosentino."
  />
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
                linkText
              }
            }
          }
        }
      }
    }
  }
`;

export default ServicesPage;
