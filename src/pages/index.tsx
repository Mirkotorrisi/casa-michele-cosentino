import * as React from "react";
import { graphql, type HeadFC, type PageProps } from "gatsby";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import Image from "components/Image";
import { Gallery } from "context/Gallery";
import useTranslate from "hooks/useTranslate";
import { PageData } from "types/pageData";
import { getImages, getListItems } from "helpers";
import Carousel from "components/Carousel";
import useIsMobile from "hooks/useIsMobile";
import ContactUs from "components/ContactUs";
import Hero from "components/Hero";
import OurServices from "components/OurServices.tsx";
import SectionHeadings from "components/SectionHeadings";
import useScrollToTop from "hooks/useScrollToTop";
import useScrollToRef from "hooks/useScrollToRef";
import {
  homeHeroFloatings,
  homeSecondFloatings,
  homeThirdFloatings,
} from "resources/floatingsData";

const IndexPage: React.FC<PageProps<{ homePageData: PageData }>> = ({
  data,
}) => {
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
            title={translate("second-section-heading")}
            subtitle={translate("second-section-sub")}
            link="/chi-siamo"
            linkText={translate("second-section-cta")}
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
          title={translate("our-services")}
          subtitle={translate("our-services-description")}
          link="/servizi"
          linkText={translate("our-services-cta")}
          servicesCards={servicesCards}
        />
        <section className="pb-8 lg:pb-16">
          <SectionHeadings
            title={translate("fourth-section-title")}
            subtitle={translate("fourth-section-subtitle")}
            link="/la-struttura"
            linkText={translate("fourth-section-cta")}
          />
        </section>
        <Carousel images={theBuildingCarousel} />

        <section className="gap-8 md:grid md:grid-cols-2 md:gap-20 lg:gap-40">
          <SectionHeadings
            goesToLeft
            title={translate("fifth-section-title")}
            subtitle={translate("fifth-section-subtitle")}
            link="/eventi"
            linkText={translate("fifth-section-cta")}
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
          title={translate("contact-title")}
          subtitle={translate("contact-subtitle")}
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

export const Head: HeadFC = () => <title>Home | Casa Michele Cosentino</title>;

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
