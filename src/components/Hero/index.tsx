import React from "react";
import { SectionProps } from "types/home";

const Hero = ({ heading, body, callToActions, headerImage }: SectionProps) => {
  return (
    <div className="w-full max-h-[682.50px] px-28 py-20 bg-white bg-opacity-95 flex-col justify-center items-center gap-20 inline-flex">
      <div className="h-72 flex-col justify-center items-center gap-12 flex">
        <div className="self-stretch h-72 flex-col justify-center items-center gap-4 flex">
          <div className="self-stretch text-center text-gray-900 text-6xl font-bold font-['Inter'] leading-[84px]">
            {heading}
          </div>
          <div
            className="self-stretch text-center text-gray-500 text-xl font-normal font-['Inter'] tracking-tight"
            dangerouslySetInnerHTML={{ __html: body }}
          />
          <a
            className="px-5 py-2.5 bg-gray-900 rounded-md justify-center items-center inline-flex text-white text-sm font-semibold font-['Inter'] leading-tight"
            href={callToActions.firstCTA.linkURL}
          >
            {callToActions.firstCTA.heading}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
