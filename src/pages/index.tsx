import Carousel from "components/Carousel";
import ContactUs from "components/ContactUs";
import Footer from "components/Footer";
import HeadContent from "components/HeadContent";
import Hero from "components/Hero";
import Image from "components/Image";
import Navbar from "components/Navbar";
import OurServices from "components/OurServices.tsx";
import SectionHeadings from "components/SectionHeadings";
import { Gallery } from "context/Gallery";
import { graphql, type HeadFC, type PageProps } from "gatsby";
import { getImages, getListItems } from "helpers";
import useIsMobile from "hooks/useIsMobile";
import useScrollToRef from "hooks/useScrollToRef";
import useScrollToTop from "hooks/useScrollToTop";
import useTranslate from "hooks/useTranslate";
import * as React from "react";
import {
  homeHeroFloatings,
  homeSecondFloatings,
  homeThirdFloatings,
} from "resources/floatingsData";
import { PageData } from "types/pageData";

type PagePropsData = { homePageData: PageData };

const IndexPage: React.FC<PageProps<PagePropsData>> = ({ data }) => {
  const images = getImages(data.homePageData);
  const servicesCards = getListItems(data.homePageData, "services-cards");
  const theBuildingCarousel = getListItems(
    data.homePageData,
    "carousel-home-1"
  );

  const translate = useTranslate(data.homePageData);

  const { isMobile, isMounted } = useIsMobile();
  const iframeWidth = isMobile ? "320" : "500";

  const { ref, scrollToSection } = useScrollToRef();

  useScrollToTop();

  return (
    <Gallery images={images ?? []}>
      <Navbar currentPage="home" />
      <main className="relative pt-[104px]">
        <Hero
          title={translate("hero-title")}
          subtitle={translate("hero-subtitle")}
          onCtaClick={scrollToSection}
          ctaText={translate("discover-more")}
          floatings={homeHeroFloatings}
        />
        <section
          className="gap-8 md:grid md:grid-cols-2 md:gap-20 lg:gap-40"
          ref={ref}
        >
          <SectionHeadings
            goesToLeft
            title={translate("home-2-h")}
            subtitle={translate("home-2-p")}
            link="/chi-siamo"
            linkText={translate("home-2-cta")}
          />
          <Image
            imageKey="home-2"
            className="mx-auto"
            hasShadow
            width={560}
            height={315}
            floatings={homeSecondFloatings}
          />
        </section>
        <OurServices
          title={translate("home-3-h")}
          subtitle={translate("home-3-p")}
          link="/servizi"
          linkText={translate("home-3-cta")}
          servicesCards={servicesCards}
        />
        <section className="pb-8 lg:pb-16">
          <SectionHeadings
            title={translate("home-4-h")}
            subtitle={translate("home-4-p")}
            link="/la-struttura"
            linkText={translate("home-4-cta")}
          />
        </section>
        <Carousel images={theBuildingCarousel} />

        <section className="gap-8 md:grid md:grid-cols-2 md:gap-20 lg:gap-40">
          <SectionHeadings
            goesToLeft
            title={translate("home-5-h")}
            subtitle={translate("home-5-p")}
            link="/eventi"
            linkText={translate("home-5-cta")}
          />
          <Image
            imageKey="home-3"
            className=""
            hasShadow
            width={560}
            height={315}
            floatings={homeThirdFloatings}
          />
        </section>
        <ContactUs
          title={translate("contact-h")}
          subtitle={translate("contact-p")}
          contactCards={getListItems(data.homePageData, "contact-cards")}
        />

        {isMounted && (
          <div className="py-8 md:py-10 lg:py-20 mx-auto max-w-xs md:max-w-lg min-h-[700px]">
            <iframe
              className="facebook-iframe"
              src={`https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fcasamichelecosentino&tabs=timeline&width=${iframeWidth}&height=700&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false&appId=73794053396`}
              width={iframeWidth}
              height={700}
              title="Pagina Facebook - Casa Mons Michele Cosentino"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
          </div>
        )}
      </main>
      <Footer />
    </Gallery>
  );
};

export const Head: HeadFC = ({ data }) => (
  <HeadContent
    title="Home | Casa Michele Cosentino"
    data={(data as PagePropsData).homePageData}
    description="Home page dedicata alla casa di riposo Michele Cosentino, un luogo di cura e serenità dove i nostri ospiti possono sentirsi a casa."
  />
);

export const query = graphql`
  query HomePageQuery {
    homePageData: allMarkdownRemark(
      filter: { frontmatter: { pageKey: { in: ["home", "contattaci"] } } }
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

export default IndexPage;
