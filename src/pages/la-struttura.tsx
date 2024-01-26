import Carousel from "components/Carousel";
import CarouselMini from "components/CarouselMini";
import ContactUs from "components/ContactUs";
import Footer from "components/Footer";
import HeadContent from "components/HeadContent";
import Hero from "components/Hero";
import Navbar from "components/Navbar";
import OurServices from "components/OurServices.tsx";
import SectionHeadings from "components/SectionHeadings";
import { Gallery } from "context/Gallery";
import { graphql, type HeadFC, type PageProps } from "gatsby";
import { getImages, getListItems } from "helpers";
import useScrollToRef from "hooks/useScrollToRef";
import useScrollToTop from "hooks/useScrollToTop";
import useTranslate from "hooks/useTranslate";
import * as React from "react";
import { theBuildingHeroFloatings } from "resources/floatingsData";
import { PageData } from "types/pageData";

type PagePropsData = { theBuildingPageData: PageData };

const TheBuildingPage: React.FC<PageProps<PagePropsData>> = ({ data }) => {
  const images = getImages(data.theBuildingPageData);
  const servicesCards = getListItems(
    data.theBuildingPageData,
    "services-cards"
  );
  const theBuildingFirstCarousel = getListItems(
    data.theBuildingPageData,
    "carousel-la-struttura-1"
  );
  const theBuildingSecondCarousel = getListItems(
    data.theBuildingPageData,
    "carousel-la-struttura-2"
  );
  const theBuildingThirdCarousel = getListItems(
    data.theBuildingPageData,
    "carousel-la-struttura-3"
  );

  const translate = useTranslate(data.theBuildingPageData);
  const { ref, scrollToSection } = useScrollToRef();

  useScrollToTop();

  return (
    <Gallery images={images ?? []}>
      <Navbar currentPage="la-struttura" />
      <main className="relative pt-[104px]">
        <Hero
          title={translate("hero-title")}
          subtitle={translate("hero-subtitle")}
          onCtaClick={scrollToSection}
          ctaText={translate("discover-more")}
          floatings={theBuildingHeroFloatings}
        />
        <section
          className="gap-8 md:grid md:grid-cols-2 md:gap-20 lg:gap-40"
          ref={ref}
        >
          <SectionHeadings
            goesToLeft
            title={translate("la-struttura-2-h")}
            subtitle={translate("la-struttura-2-p")}
          />
          <CarouselMini images={theBuildingFirstCarousel} />
        </section>
        <section className="pb-8 lg:pb-16">
          <SectionHeadings
            title={translate("la-struttura-3-h")}
            subtitle={translate("la-struttura-3-p")}
          />
        </section>
        <Carousel images={theBuildingSecondCarousel} />
        <section className="gap-8 md:grid md:grid-cols-2 md:gap-20 lg:gap-40">
          <SectionHeadings
            goesToLeft
            title={translate("la-struttura-4-h")}
            subtitle={translate("la-struttura-4-p")}
          />
          <CarouselMini images={theBuildingThirdCarousel} />
        </section>
        <OurServices
          title={translate("our-services")}
          subtitle={translate("our-services-description")}
          link="/servizi"
          linkText={translate("our-services-cta")}
          servicesCards={servicesCards}
        />
        <ContactUs
          title={translate("contact-h")}
          subtitle={translate("contact-p")}
          contactCards={getListItems(data.theBuildingPageData, "contact-cards")}
        />
      </main>
      <Footer />
    </Gallery>
  );
};

export const Head: HeadFC = ({ data }) => (
  <HeadContent
    title="La struttura | Casa Michele Cosentino"
    data={(data as PagePropsData).theBuildingPageData}
    description="L'accogliente struttura, moderna e immersa nel verde, in cui gli ospiti della casa di riposo Michele Cosentino trascorrono le loro giornate."
  />
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

export default TheBuildingPage;
