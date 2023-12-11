import React, { ReactNode } from "react";
import { graphql } from "gatsby";

import Navbar from "components/Navbar";
import Footer from "components/Footer";

type Props = {
  footerData: any;
  navbarData: any;
  children: ReactNode;
};

const TemplateWrapper = ({
  footerData = null,
  navbarData = null,
  children,
}: Props) => (
  <div>
    <Navbar />
    <main>{children}</main>
    <Footer />
  </div>
);

// export const query = graphql`
//   fragment LayoutFragment on Query {
//     footerData: allMarkdownRemark(
//       filter: { frontmatter: { layoutKey: { eq: "footer" } } }
//     ) {
//       edges {
//         node {
//           id
//           frontmatter {
//             logoImage {
//               image
//               imageAlt
//               tagline
//             }
//             socialLinks {
//               image
//               imageAlt
//               label
//               linkURL
//             }
//           }
//         }
//       }
//     }
//     navbarData: allMarkdownRemark(
//       filter: { frontmatter: { layoutKey: { eq: "navbar" } } }
//     ) {
//       edges {
//         node {
//           id
//           frontmatter {
//             logoImage {
//               image
//               imageAlt
//             }
//             menuItems {
//               label
//               linkType
//               linkURL
//             }
//           }
//         }
//       }
//     }
//   }
// `;

export default TemplateWrapper;
