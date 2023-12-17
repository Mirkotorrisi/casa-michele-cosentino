import { useVocabulary } from "context/Vocabulary";
import React from "react";

const WhoWeAre = ({}) => {
  const { translate } = useVocabulary();
  return (
    <section className="w-full  px-28 py-20 bg-white flex flex-col justify-start items-center gap-20 relative">
      <h2 className="self-stretch text-center text-gray-900 text-6xl font-bold font-['Inter'] leading-[84px]">
        {translate("second-section--heading")}
      </h2>
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 w-full  h-96 max-w-6xl bg-orange-500">
        <img
          className="h-full max-w-xl"
          src="https://via.placeholder.com/68x56"
        />

        <a href={"/"} className="cta">
          <span className="">{translate("hero-cta")}</span>
        </a>
      </div>
    </section>
  );
};

export default WhoWeAre;
