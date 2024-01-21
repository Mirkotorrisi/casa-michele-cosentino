import * as React from "react";
import { graphql, type HeadFC, type PageProps } from "gatsby";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import useTranslate from "hooks/useTranslate";
import { PageData } from "types/pageData";
import { getListItems } from "helpers";
import ContactUs from "components/ContactUs";
import useScrollToTop from "hooks/useScrollToTop";
import HeadContent from "components/HeadContent";

type PagePropsData = { contactUsPageData: PageData };
const ContactUsPage: React.FC<PageProps<PagePropsData>> = ({ data }) => {
  const translate = useTranslate(data.contactUsPageData);

  useScrollToTop();

  return (
    <>
      <Navbar currentPage="contattaci" />
      <main className="relative pt-[104px]">
        <ContactUs
          title={translate("contact-page-title")}
          isContactPage
          subtitle={translate("contact-subtitle")}
          contactCards={getListItems(data.contactUsPageData, "contact-cards")}
        />
      </main>
      <Footer />
    </>
  );
};

export const Head: HeadFC = ({ data }) => (
  <HeadContent
    title="Contattaci | Casa Michele Cosentino"
    data={(data as PagePropsData).contactUsPageData}
    description="Pagina contente i contatti utili per poter comunicare con l'amministrazione della casa di riposo Michele Cosentino"
  />
);

export const query = graphql`
  query contactUsPageQuery {
    contactUsPageData: allMarkdownRemark(
      filter: { frontmatter: { pageKey: { eq: "contattaci" } } }
    ) {
      edges {
        node {
          frontmatter {
            pageKey
            terms {
              label
              key
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

export default ContactUsPage;
