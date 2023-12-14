import React from "react";
import { SectionProps } from "types/home";

const Hero = ({ heading, body, callToActions, headerImage }: SectionProps) => {
  return (
    <section className="w-full bg-red-500 max-h-[682.50px] px-28 py-20  bg-opacity-95 flex-col justify-center items-center gap-20 inline-flex">
      <div className="h-72 flex-col justify-center items-center gap-12 flex">
        <div className="self-stretch h-72 flex-col justify-center items-center gap-4 flex">
          <h1 className="self-stretch text-center text-gray-900 text-6xl font-bold font-['Inter'] leading-[84px]">
            {heading}
          </h1>
          <div
            className="self-stretch text-center text-gray-500 text-xl font-normal font-['Inter'] tracking-tight"
            dangerouslySetInnerHTML={{ __html: body }}
          />
          <a className="cta" href={callToActions.firstCTA.linkURL}>
            {callToActions.firstCTA.heading}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
