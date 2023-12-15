import React from "react";
import { SectionProps } from "types/home";

const WhoWeAre = ({
  heading,
  body,
  callToActions,
  headerImage,
}: SectionProps) => {
  return (
    <section className="w-full  px-28 py-20 bg-white flex flex-col justify-start items-center gap-20 relative">
      <h2 className="self-stretch text-center text-gray-900 text-6xl font-bold font-['Inter'] leading-[84px]">
        Qua ci va un heading
      </h2>
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 w-full  h-96 max-w-6xl bg-orange-500">
        <img
          className="h-full max-w-xl"
          src="https://via.placeholder.com/68x56"
        />
        <div className="flex flex-col gap-8">
          <div className="w-96 h-28 font-normal font-['Ubuntu'] leading-normal" />
          <a href={"/"} className="cta">
            <span className="">{"Scopri di più"}</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
