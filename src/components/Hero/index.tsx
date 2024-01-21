import React from "react";
import { getSvgIcon } from "resources/getSvgIcon";
import Image from "components/Image";
import Floating from "components/Floating";

type Props = {
  title: string;
  subtitle: string;
  onCtaClick: VoidFunction;
  ctaText: string;
  floatings?: {
    key: string;
    className: string;
    style: Record<string, string | number | undefined>;
  }[];
};

const Hero = ({ title, subtitle, onCtaClick, ctaText, floatings }: Props) => {
  return (
    <section className="gap-6">
      <h2 className="md:text-4xl lg:text-6xl">{title}</h2>
      <p>{subtitle}</p>
      <button onClick={onCtaClick} className="button-ghost mt-2">
        {ctaText} {getSvgIcon("arrow-down")}
      </button>
      <div className="relative w-full max-w-[1120px]">
        <Image
          imageKey="hero-image"
          className="mt-2 lg:mt-8 hero-image"
          hasShadow
          isHero
        />
        {floatings?.map((f) => (
          <Floating
            key={f.key + f.className}
            keyName={f.key}
            style={f.style}
            className={f.className}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
