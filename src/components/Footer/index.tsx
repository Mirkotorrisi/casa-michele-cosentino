import * as React from "react";

import cartaDeiServizi from "assets/carta-dei-servizi.pdf";
import routes from "components/Navbar/routes";
import { StaticImage } from "gatsby-plugin-image";
import FooterSocials from "./FooterSocials";

const Footer = () => (
  <footer className="px-6 lg:px-20 flex flex-col">
    <div className="py-8  lg:py-10  flex flex-col lg:flex-row items-center lg:justify-between">
      <StaticImage
        src="../../images/logo.jpg"
        alt="logo"
        className="w-[97px] h-16 shrink-0 mb-8 lg:mb-0"
      />
      <div className="flex flex-col md:flex-row items-center gap-6">
        {routes.map((r) => (
          <a
            href={r.href}
            key={r.label}
            className="text-neutral-700 text-base not-italic font-semibold leading-6"
          >
            {r.label}
          </a>
        ))}
        <a
          href={cartaDeiServizi}
          rel="noreferrer"
          target="_blank"
          className="text-neutral-700 text-base not-italic font-semibold leading-6"
        >
          Carta dei servizi
        </a>
        <a
          href="bilancio-sociale.pdf"
          rel="noreferrer"
          target="_blank"
          className="text-neutral-700 text-base not-italic font-semibold leading-6"
        >
          Bilancio sociale
        </a>
      </div>
    </div>
    <FooterSocials />
  </footer>
);

export default Footer;
