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
import ContactUs from "components/ContactUs";
import CarouselMini from "components/CarouselMini";
import Hero from "components/Hero";
import OurServices from "components/OurServices.tsx";
import SectionHeadings from "components/SectionHeadings";

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
      <main className="relative lg:pt-0">
        <Hero
          title={translate("hero-title")}
          subtitle={translate("hero-subtitle")}
          link="/"
          linkText={translate("discover-more")}
        />
        <section className="gap-8 md:grid md:grid-cols-2 md:gap-20 lg:gap-40">
          <SectionHeadings
            goesToLeft
            title={translate("second-section-heading")}
            subtitle={translate("second-section-sub")}
          />
          <CarouselMini />
        </section>
        <section className="pb-8 lg:pb-16">
          <SectionHeadings
            title={translate("carousel-title")}
            subtitle={translate("fourth-section-subtitle")}
          />
        </section>
        <Carousel />
        <section className="gap-8 md:grid md:grid-cols-2 md:gap-20 lg:gap-40">
          <SectionHeadings
            goesToLeft
            title={translate("fourth-section-title")}
            subtitle={translate("fourth-section-subtitle")}
          />
          <CarouselMini />
        </section>
        <OurServices
          title={translate("our-services")}
          subtitle={translate("our-services-description")}
          link="/servizi"
          linkText={translate("our-services-cta")}
          servicesCards={servicesCards}
        />
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
