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
import Hero from "components/Hero";
import SectionHeadings from "components/SectionHeadings";
import useScrollToTop from "hooks/useScrollToTop";
import useScrollToRef from "hooks/useScrollToRef";
import {
  eventsHeroFloatings,
  eventsSecondFloatings,
} from "resources/floatingsData";
import HeadContent from "components/HeadContent";

type PagePropsData = { eventsPageData: PageData };

const EventsPage: React.FC<PageProps<PagePropsData>> = ({ data }) => {
  const images = getImages(data.eventsPageData);
  const eventCards = getListItems(data.eventsPageData, "events-cards");
  const eventCarousel = getListItems(data.eventsPageData, "carousel-eventi-1");

  const translate = useTranslate(data.eventsPageData);
  const { ref, scrollToSection } = useScrollToRef();

  useScrollToTop();

  return (
    <Gallery images={images ?? []}>
      <Navbar currentPage="eventi" />
      <main className="relative pt-[104px]">
        <Hero
          title={translate("hero-title")}
          subtitle={translate("hero-subtitle")}
          onCtaClick={scrollToSection}
          ctaText={translate("discover-more")}
          floatings={eventsHeroFloatings}
        />
        <section className="gap-8 lg:gap-16" ref={ref}>
          <SectionHeadings
            title={translate("eventi-2-h")}
            subtitle={translate("eventi-2-p")}
          />
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
                  content: "body-3",
                }}
              />
            ))}
          </div>
        </section>
        <div className="blue-section">
          <section className="md:grid md:grid-cols-2 gap-2 md:gap-20 ">
            <SectionHeadings
              goesToLeft
              title={translate("eventi-3-h")}
              subtitle={translate("eventi-3-p")}
            />
            <Image
              imageKey="eventi-2"
              className="mt-6 md:mt-0"
              hasShadow
              width={560}
              height={315}
              floatings={eventsSecondFloatings}
            />
          </section>
        </div>
        <section className="pb-8 lg:pb-16">
          <SectionHeadings
            title={translate("eventi-4-h")}
            subtitle={translate("eventi-4-p")}
          />
        </section>
        <Carousel className="mb-8 md:mb-10 lg:mb-20" images={eventCarousel} />
        <ContactUs
          title={translate("contact-h")}
          subtitle={translate("contact-p")}
          contactCards={getListItems(data.eventsPageData, "contact-cards")}
        />
      </main>
      <Footer />
    </Gallery>
  );
};

export const Head: HeadFC = ({ data }) => (
  <HeadContent
    title="Feste ed eventi | Casa Michele Cosentino"
    data={(data as PagePropsData).eventsPageData}
    description="Le feste e gli eventi che allietano le giornate degli ospiti della casa di riposo Michele Cosentino."
  />
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
                linkText
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
