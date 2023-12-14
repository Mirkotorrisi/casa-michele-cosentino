import * as React from "react";
import {
  PHONE_NUMBER,
  GOOGLE,
  FACEBOOK,
  WHATSAPP,
  INSTAGRAM,
  EMAIL,
  ADDRESS,
  VAT,
  PRIVACY_URL,
} from "resources";
import "./index.scss";

import { FaGoogle } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => (
  <footer className="py-10 bg-amber-300">
    <div className="footer__columns flex justify-between align-center lg:w-1/2  m-auto ">
      <a href={GOOGLE}>
        <i className="fab fa-google" />
        <FaGoogle />
      </a>

      <a href={PHONE_NUMBER}>
        <FaPhoneAlt />
      </a>

      <a href={EMAIL}>
        <FaEnvelope />
      </a>
      <a href={WHATSAPP}>
        <FaWhatsapp />
      </a>
      <a href={FACEBOOK}>
        <FaFacebook />
      </a>
      <a href={INSTAGRAM}>
        <FaInstagram />
      </a>
    </div>
    <div className="footer__credits mt-10 pt-10">
      <p>Casa Michele Cosentino</p>
      <p>P.Iva {VAT}</p>
      <p>{ADDRESS}</p>
      <a href={PRIVACY_URL} className="privacyPolicy">
        Privacy policy
      </a>
    </div>
  </footer>
);

export default Footer;
