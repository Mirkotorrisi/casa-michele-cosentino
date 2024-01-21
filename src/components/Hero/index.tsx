import React from "react";
import { getSvgIcon } from "resources/getSvgIcon";
import Image from "components/Image";
import Floating from "components/Floating";
import { FloatingType } from "resources/floatingsData";

type Props = {
  title: string;
  subtitle: string;
  onCtaClick: VoidFunction;
  ctaText: string;
  floatings: FloatingType[];
};

const Hero = ({ title, subtitle, onCtaClick, ctaText, floatings }: Props) => {
  return (
    <section className="gap-6">
      <h2 className="md:text-4xl lg:text-6xl">{title}</h2>
      <p>{subtitle}</p>
      <button onClick={onCtaClick} className="button-ghost mt-2">
        {ctaText} {getSvgIcon("arrow-down")}
      </button>
      <Image
        imageKey="hero-image"
        className="mt-2 lg:mt-8 hero-image"
        hasShadow
        isHero
        floatings={floatings}
      />
    </section>
  );
};

export default Hero;
