import * as React from "react";
import { ADDRESS, VAT, PRIVACY_URL, FACEBOOK } from "resources";
import "./index.scss";

import { StaticImage } from "gatsby-plugin-image";
import routes from "components/Navbar/routes";
import { FaFacebook } from "react-icons/fa";

const Footer = () => (
  <footer className="flex flex-col">
    <div className="px-6 py-8 lg:px-20 lg:py-10 border-t-[#E5E5E5] border-t border-solid flex flex-col lg:flex-row items-center lg:justify-between">
      <StaticImage
        src="../../images/logo.jpg"
        alt="logo"
        className="w-[97px] h-16 shrink-0 mb-8 lg:mb-0"
      />
      <div className="flex flex-col md:flex-row items-center gap-6">
        {routes.map((r) => (
          <a
            href={r.href}
            className="text-[#404040] text-base not-italic font-semibold leading-6"
          >
            {r.label}
          </a>
        ))}
      </div>
    </div>
    <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-6 py-8 px-6 lg:px-20 lg:py-10 border-t-[#E5E5E5] border-t border-solid ">
      <p className="text-[#A3A3A3] text-sm not-italic font-semibold leading-5">
        {" "}
        Casa Michele Cosentino © 2024
      </p>
      <a href={FACEBOOK} className="text-[#A3A3A3] text-lg">
        <FaFacebook size={24} />
      </a>
    </div>
  </footer>
);

export default Footer;
