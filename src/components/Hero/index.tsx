import React from "react";
import { getSvgIcon } from "resources/getSvgIcon";
import Image from "components/Image";

type Props = {
  title: string;
  subtitle: string;
  link: string;
  linkText: string;
};

const Hero = ({ title, subtitle, link, linkText }: Props) => {
  return (
    <section className="gap-6">
      <h2 className="md:text-4xl lg:text-6xl">{title}</h2>
      <p>{subtitle}</p>
      <a href={link} className="button-ghost mt-2">
        {linkText} {getSvgIcon("arrow-down")}
      </a>
      <Image imageKey="hero-image" className="mt-2 lg:mt-8 hero-image" />
    </section>
  );
};

export default Hero;
