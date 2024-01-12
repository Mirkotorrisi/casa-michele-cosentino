import React from "react";
import Address from "images/address.svg";
import Phone from "images/phone.svg";
import Email from "images/email.svg";
import "./index.scss";
import Card from "components/LinkCard";

const contactCards = [
  {
    image: <Email />,
    title: "Email",
    text: "admin@casamichelecosentino.it",
    link: "mailto:admin@casamichelecosentino.it",
  },
  {
    image: <Address />,
    title: "Indirizzo",
    text: "Via Marchese di Casalotto, 12, Aci Sant'Antonio (CT)",
    link: "https://www.google.com/maps/dir//Via+Marchese+di+Casalotto,+12,+95025+Aci+Sant'Antonio+CT/@37.6025031,15.0425008,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x1313feb337f0e3e7:0x3f299fe7bb953d49!2m2!1d15.1249018!2d37.6025317",
  },
  {
    image: <Phone />,
    title: "Telefono",
    text: "3407115868 / 3713939448",
    link: "tel:3407115868",
  },
];

type Props = {
  title: string;
  subtitle: string;
};

const ContactUs = ({ title, subtitle }: Props) => {
  return (
    <section className="gap-8 lg:gap-16 half-background items-center">
      <div className="flex flex-col gap-6 ">
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
      <div className="flex flex-col gap-8 md:grid md:grid-cols-3">
        {contactCards.map((card) => (
          <Card {...card} key={card.title} />
        ))}
      </div>
      <div className="m-auto w-full max-w-[960px]">
        <iframe src="https://www.google.com/maps/embed/v1/search?q=Casa+Michele+Cosentino,+Via+Marchese+di+Casalotto,+Aci+Sant'Antonio,+CT,+Italia&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe>
      </div>
    </section>
  );
};

export default ContactUs;
