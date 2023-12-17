import { useVocabulary } from "context/Vocabulary";
import React from "react";

const Hero = ({}) => {
  const { translate } = useVocabulary();
  return (
    <section className="w-full bg-red-500 max-h-[682.50px] px-28 py-20  bg-opacity-95 flex-col justify-center items-center gap-20 inline-flex">
      <div className="h-72 flex-col justify-center items-center gap-12 flex">
        <div className="self-stretch h-72 flex-col justify-center items-center gap-4 flex">
          <h1 className="self-stretch text-center text-gray-900 text-6xl font-bold font-['Inter'] leading-[84px]">
            {translate("hero-heading")}
          </h1>
          <div className="self-stretch text-center text-gray-500 text-xl font-normal font-['Inter'] tracking-tight" />
          <a className="cta" href={"/"}>
            {translate("hero-cta")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
