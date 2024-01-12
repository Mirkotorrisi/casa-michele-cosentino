import * as React from "react";
import { graphql, type HeadFC, type PageProps } from "gatsby";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import { Gallery } from "context/Gallery";
import Image from "components/Image";
import ContactUs from "components/ContactUs";
import useTranslate from "hooks/useTranslate";
import { PageData } from "types/pageData";
import { getImages } from "helpers";

const WhoWeArePage: React.FC<PageProps<{ whoWeArePageData: PageData }>> = ({
  data,
}) => {
  const images = getImages(data.whoWeArePageData);

  const translate = useTranslate(data.whoWeArePageData);

  return (
    <Gallery images={images ?? []}>
      <Navbar />
      <main className="relative">
        <section className="gap-8 items-center">
          <h2 className="md:text-4xl lg:text-6xl">{translate("hero-title")}</h2>
          <p className="max-w-[600px]">{translate("hero-subtitle")}</p>
          <a href="" className="button-ghost">
            {translate("discover-more")}
          </a>
          <Image imageKey="caregiving" className="" />
        </section>
        <section className="md:grid md:grid-cols-2 gap-2 md:gap-20 lg:gap-40">
          <div className="flex flex-col md:justify-center gap-2 lg:gap-6">
            <h2 className="md:text-left">{translate("our-mission")}</h2>
            <p className="md:text-left">{translate("our-mission-sub")}</p>
          </div>
          <Image imageKey="caregiving" className="mt-6" />
        </section>
        <div className="blue-section">
          <section className="md:grid md:grid-cols-2 gap-2 md:gap-20 lg:gap-40">
            <div className="flex flex-col md:justify-center gap-2 lg:gap-6">
              <h2 className="md:text-left">{translate("our-vision")}</h2>
              <p className="md:text-left">{translate("our-vision-sub")}</p>
            </div>
            <Image imageKey="caregiving" className="mt-6 md:order-[-1]" />
          </section>
        </div>
        <ContactUs
          title={translate("contact-title")}
          subtitle={translate("contact-subtitle")}
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
          }
        }
      }
    }
  }
`;

export default WhoWeArePage;
