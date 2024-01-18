import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FACEBOOK } from "resources";

type Props = {
  changeLayout?: boolean;
};
const FooterSocials = ({ changeLayout = false }: Props) => {
  return (
    <div
      className={`flex ${
        changeLayout ? "justify-between" : "flex-col lg:flex-row"
      } items-center lg:justify-between gap-6 py-8 px-6 lg:px-20 lg:py-10 border-t-[#E5E5E5] border-t border-solid`}
    >
      <p className="text-[#A3A3A3] text-sm not-italic font-semibold leading-5">
        Casa Michele Cosentino © 2024
      </p>
      <a href={FACEBOOK} className="text-[#A3A3A3] text-lg">
        <FaFacebook size={24} />
      </a>
    </div>
  );
};

export default FooterSocials;
