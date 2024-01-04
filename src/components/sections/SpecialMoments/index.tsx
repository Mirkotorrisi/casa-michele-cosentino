import SectionHeading from "components/SectionHeading";
import { useVocabulary } from "context/Vocabulary";
import Image from "components/Image";
import React from "react";

const SpecialMoments = ({ specialMomentsList = [] }) => {
  const { translate } = useVocabulary();
  return (
    <section className="w-full  px-28 py-20 bg-white flex flex-col justify-start items-center gap-20 relative">
      <SectionHeading
        title={{ text: "socialization-heading" }}
        subtitle={{ text: "socialization-description" }}
        cta={{
          href: "/feste-ed-eventi",
          label: "socialization-cta",
        }}
      />
      <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-4 w-full  h-96 max-w-6xl bg-orange-500">
        <Image imageKey="socializing" className="" />

        <ul className="">
          {specialMomentsList.map((moment, index) => (
            <li key={`momentlist-${index}`}>{translate(moment)}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SpecialMoments;
