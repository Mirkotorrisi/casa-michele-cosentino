import Card from "components/Card";
import SectionHeadings from "components/SectionHeadings";
import React from "react";
import { getSvgIcon } from "resources/getSvgIcon";
import { ListItem } from "types/pageData";

type Props = {
  title: string;
  subtitle: string;
  link: string;
  linkText: string;
  servicesCards: ListItem[];
};

const OurServices = ({
  title,
  subtitle,
  link,
  linkText,
  servicesCards,
}: Props) => {
  return (
    <div className="blue-section">
      <section className="gap-8 md:gap-16">
        <SectionHeadings
          title={title}
          subtitle={subtitle}
          link={link}
          linkText={linkText}
        />
        <div className="flex flex-col gap-8 md:grid md:grid-cols-3 lg:gap-y-16">
          {servicesCards?.map((c) => (
            <Card
              key={c.title}
              image={getSvgIcon(c.links?.[0].linkText)}
              title={c.title}
              text={c.text}
              classNames={{
                content: "body-3",
              }}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default OurServices;
