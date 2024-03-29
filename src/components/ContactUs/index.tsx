import LinkCard from "components/LinkCard";
import React from "react";
import { getSvgIcon } from "resources/getSvgIcon";
import { ListItem } from "types/pageData";
import "./index.scss";

type Props = {
  title: string;
  subtitle: string;
  contactCards: ListItem[];
  isContactPage?: boolean;
};

const ContactUs = ({
  title,
  subtitle,
  contactCards,
  isContactPage = false,
}: Props) => {
  return (
    <section className="gap-8 lg:gap-16 half-background">
      <div className="flex flex-col gap-6  max-w-[800px]">
        <h2 className={isContactPage ? "" : "heading-2"}>{title}</h2>
        <p>{subtitle}</p>
      </div>
      <div className="flex flex-col gap-8 md:grid md:grid-cols-3">
        {contactCards.map((card) => (
          <LinkCard
            text={card.text}
            title={card.title}
            link={card.links?.[0]?.linkURL}
            image={getSvgIcon(card.links?.[0].linkText)}
            key={card.title}
          />
        ))}
      </div>
      <div className="m-auto w-full max-w-[960px]">
        <iframe
          title="google maps - casa michele cosentino"
          src="https://www.google.com/maps/embed/v1/search?q=Casa+Michele+Cosentino,+Via+Marchese+di+Casalotto,+Aci+Sant'Antonio,+CT,+Italia&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactUs;
