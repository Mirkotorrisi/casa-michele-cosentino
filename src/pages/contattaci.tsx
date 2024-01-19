import * as React from "react";
import { graphql, type HeadFC, type PageProps } from "gatsby";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import useTranslate from "hooks/useTranslate";
import { PageData } from "types/pageData";
import { getListItems } from "helpers";
import ContactUs from "components/ContactUs";
import useScrollToTop from "hooks/useScrollToTop";

const ContactUsPage: React.FC<PageProps<{ contactUsPageData: PageData }>> = ({
  data,
}) => {
  const translate = useTranslate(data.contactUsPageData);

  useScrollToTop();

  return (
    <>
      <Navbar currentPage="eventi" />
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

export const Head: HeadFC = () => (
  <title>Contattaci | Casa Michele Cosentino</title>
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
