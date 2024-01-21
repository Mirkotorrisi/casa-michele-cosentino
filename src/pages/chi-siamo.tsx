import * as React from "react";
import { graphql, type HeadFC, type PageProps } from "gatsby";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import { Gallery } from "context/Gallery";
import Image from "components/Image";
import ContactUs from "components/ContactUs";
import useTranslate from "hooks/useTranslate";
import { PageData } from "types/pageData";
import { getImages, getListItems } from "helpers";
import Hero from "components/Hero";
import SectionHeadings from "components/SectionHeadings";
import useScrollToTop from "hooks/useScrollToTop";
import useScrollToRef from "hooks/useScrollToRef";
import {
  whoWeAreHeroFloatings,
  whoWeAreSecondFloatings,
  whoWeAreThirdFloatings,
} from "resources/floatingsData";

const WhoWeArePage: React.FC<PageProps<{ whoWeArePageData: PageData }>> = ({
  data,
}) => {
  const images = getImages(data.whoWeArePageData);

  const translate = useTranslate(data.whoWeArePageData);

  const { ref, scrollToSection } = useScrollToRef();

  useScrollToTop();

  return (
    <Gallery images={images ?? []}>
      <Navbar currentPage="chi-siamo" />
      <main className="relative pt-[104px]">
        <Hero
          title={translate("hero-title")}
          subtitle={translate("hero-subtitle")}
          onCtaClick={scrollToSection}
          ctaText={translate("discover-more")}
          floatings={whoWeAreHeroFloatings}
        />
        <section
          className="md:grid md:grid-cols-2 gap-2 md:gap-20 lg:gap-40"
          ref={ref}
        >
          <SectionHeadings
            goesToLeft
            title={translate("our-mission")}
            subtitle={translate("our-mission-sub")}
          />
          <Image
            imageKey="chi-siamo-1"
            className="mt-6"
            hasShadow
            width={560}
            height={315}
            floatings={whoWeAreSecondFloatings}
          />
        </section>
        <div className="blue-section">
          <section className="md:grid md:grid-cols-2 gap-2 md:gap-20 lg:gap-40">
            <SectionHeadings
              goesToLeft
              title={translate("our-vision")}
              subtitle={translate("our-vision-sub")}
            />
            <Image
              imageKey="chi-siamo-2"
              className="mt-6 md:mt-0 md:order-[-1]"
              hasShadow
              width={560}
              height={315}
              floatings={whoWeAreThirdFloatings}
            />
          </section>
        </div>
        <ContactUs
          title={translate("contact-title")}
          subtitle={translate("contact-subtitle")}
          contactCards={getListItems(data.whoWeArePageData, "contact-cards")}
        />
      </main>
      <Footer />
    </Gallery>
  );
};

export const Head: HeadFC = () => (
  <title>Chi Siamo | Casa Michele Cosentino</title>
);

export const query = graphql`
  query WhoWeArePageQuery {
    whoWeArePageData: allMarkdownRemark(
      filter: { frontmatter: { pageKey: { in: ["chi-siamo", "contattaci"] } } }
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

export default WhoWeArePage;
