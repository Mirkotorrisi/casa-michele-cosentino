import React from "react";
import { SectionProps } from "types/home";

const WhoWeAre = ({
  heading,
  body,
  callToActions,
  headerImage,
}: SectionProps) => {
  return (
    <section className="w-full h-96 px-28 py-20 bg-white flex-col justify-start items-center gap-20 inline-flex">
      <div className="h-48 flex-col justify-center items-center gap-12 flex">
        <div className="self-stretch h-48 flex-col justify-start items-center gap-4 flex">
          <h2 className="self-stretch text-center text-gray-900 text-6xl font-bold font-['Inter'] leading-10">
            {heading}
          </h2>
          <div
            className="self-stretch text-center text-gray-500 text-xl font-normal font-['Inter'] tracking-tight"
            dangerouslySetInnerHTML={{ __html: body }}
          />
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
