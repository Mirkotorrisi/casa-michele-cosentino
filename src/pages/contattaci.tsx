import ContactUs from "components/ContactUs";
import Footer from "components/Footer";
import HeadContent from "components/HeadContent";
import Navbar from "components/Navbar";
import { graphql, type HeadFC, type PageProps } from "gatsby";
import { getListItems } from "helpers";
import useScrollToTop from "hooks/useScrollToTop";
import useTranslate from "hooks/useTranslate";
import * as React from "react";
import { PageData } from "types/pageData";

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
          subtitle={translate("contact-p")}
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
