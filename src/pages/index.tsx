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

const IndexPage: React.FC<PageProps<{ homePageData: PageData }>> = ({
  data,
}) => {
  const images = getImages(data.homePageData);
  const servicesCards = getListItems(data.homePageData, "services-cards");

  const translate = useTranslate(data.homePageData);

  const { isMobile, isMounted } = useIsMobile();
  const iframeWidth = isMobile ? "320" : "500";

  return (
    <Gallery images={images ?? []}>
      <Navbar currentPage="home" />
      <main className="relative lg:pt-0">
        <section className="gap-8 items-center">
          <h2 className="md:text-4xl lg:text-6xl">{translate("hero-title")}</h2>
          <p className="max-w-[600px]">{translate("hero-subtitle")}</p>
          <a href="" className="button-ghost mt-2  ">
            {translate("discover-more")} {getSvgIcon("arrow-down")}
          </a>
          <Image imageKey="hero-image" className="mt-2 lg:mt-8 hero-image" />
        </section>
        <section className="gap-8 items-center md:grid md:grid-cols-2 md:gap-20 lg:gap-40">
          <div className="flex flex-col gap-8">
            <h2 className="heading-2 md:text-left md:text-4xl lg:text-6xl">
              {translate("second-section-heading")}
            </h2>
            <p className="md:text-left max-w-[600px]">
              {translate("second-section-sub")}
            </p>
            <a
              href="/chi-siamo"
              className="button-solid mt-2 mx-auto md:mx-0 md:mr-auto"
            >
              {translate("second-section-cta")}
            </a>
          </div>
          <Image imageKey="home-2" className="" />
        </section>
        <div className="blue-section">
          <section className="gap-8 items-center md:gap-16">
            <div className="flex flex-col items-center gap-8">
              <h2 className="heading-2 md:text-4xl lg:text-6xl">
                {translate("our-services")}
              </h2>
              <p>{translate("our-services-description")}</p>
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
                    content: "body-3",
                  }}
                />
              ))}
            </div>
          </section>
        </div>
        <section className="items-center gap-6">
          <div className="flex flex-col items-center gap-4 max-w-[800px]">
            <h2 className="heading-2">{translate("fourth-section-title")}</h2>
            <p className="">{translate("fourth-section-subtitle")}</p>
            <a href="/la-struttura" className="button-solid mt-2 mx-auto ">
              {translate("fourth-section-cta")}
            </a>
          </div>
        </section>
        <Carousel />
        <section className="gap-8 items-center md:grid md:grid-cols-2 md:gap-20 lg:gap-40">
          <div className="flex flex-col gap-8">
            <h2 className="heading-2 md:text-left md:text-4xl lg:text-6xl">
              {translate("fifth-section-title")}
            </h2>
            <p className="md:text-left max-w-[600px]">
              {translate("fifth-section-subtitle")}
            </p>
            <a
              href="/eventi"
              className="button-solid mt-2 mx-auto md:mx-0 md:mr-auto"
            >
              {translate("fifth-section-cta")}
            </a>
          </div>
          <Image imageKey="home-3" className="" />
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
