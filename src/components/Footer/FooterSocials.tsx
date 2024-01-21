import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FACEBOOK, VAT } from "resources";

type Props = {
  changeLayout?: boolean;
};
const FooterSocials = ({ changeLayout = false }: Props) => {
  return (
    <div
      className={`flex ${
        changeLayout ? "justify-between" : "flex-col lg:flex-row"
      } items-center lg:justify-between gap-6 py-8 lg:py-10 border-t-neutral-200 border-t border-solid`}
    >
      <div className="flex flex-col gap-2 items-start">
        <p className="text-neutral-400 text-sm not-italic font-semibold leading-5">
          Casa Michele Cosentino © 2024
        </p>
        <p className="text-neutral-400 text-sm not-italic font-semibold leading-5">
          Partita IVA: {VAT}
        </p>
      </div>
      <a href={FACEBOOK} className="text-neutral-400 text-lg">
        <FaFacebook size={24} />
      </a>
    </div>
  );
};

export default FooterSocials;
