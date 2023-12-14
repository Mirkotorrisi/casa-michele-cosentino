import React from "react";
import { SectionProps } from "types/home";
import Card from "./Card";

const OurServices = ({
  heading,
  body,
  callToActions,
  headerImage,
}: SectionProps) => {
  return (
    <section className="w-full px-28 py-20 bg-green-200 flex-col justify-start items-center gap-20 inline-flex">
      <div className="self-stretch  flex-col justify-center items-center gap-4 flex">
        <h2 className="self-stretch text-center text-gray-900 text-6xl font-bold font-['Inter'] leading-10">
          {heading}
        </h2>
        <div
          className="self-stretch text-center  text-xl font-normal font-['Inter'] tracking-tight"
          dangerouslySetInnerHTML={{ __html: body }}
        />
        <a
          className="px-5 py-2.5 bg-gray-900 rounded-md justify-center items-center inline-flex text-white text-sm font-semibold font-['Inter'] leading-tight"
          href={callToActions.firstCTA.linkURL}
        >
          {callToActions.firstCTA.heading}
        </a>
      </div>
      <div className="flex justify-between w-full">
        <div className="flex-col justify-center items-start gap-7 inline-flex max-w-lg">
          <h3 className="self-stretch text-gray-600 text-4xl font-bold font-['Ubuntu']">
            Assistenza e cura personale
          </h3>
          <p className="self-stretch text-gray-400 text-base font-normal font-['Ubuntu'] leading-normal">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim.
          </p>
          <div className="self-stretch justify-start items-start gap-4 inline-flex">
            <Card
              text="Assistenza medica e infermieristica"
              image="https://via.placeholder.com/56x46"
            />
            <Card
              text="Assistenza di base e riabiabilitativa"
              image="https://via.placeholder.com/56x46"
            />
            <Card
              text="Assistenza Religiosa e spirituale"
              image="https://via.placeholder.com/56x46"
            />
          </div>
        </div>
        <img
          className="w-full h-full max-w-md rounded-md"
          src="https://via.placeholder.com/68x56"
        />
      </div>
      <div className="flex justify-between w-full">
        <img
          className="w-full h-full max-w-md rounded-md"
          src="https://via.placeholder.com/68x56"
        />
        <div className="flex-col justify-center items-start gap-7 inline-flex max-w-lg">
          <h3 className="self-stretch text-gray-600 text-4xl font-bold font-['Ubuntu']">
            Comfort e servizi quotidiani
          </h3>
          <p className="self-stretch text-gray-400 text-base font-normal font-['Ubuntu'] leading-normal">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim.
          </p>
          <div className="self-stretch justify-start items-start gap-4 inline-flex">
            <Card
              text="Alimentazione Bilanciata e personale"
              image="https://via.placeholder.com/56x46"
            />
            <Card
              text="Attività Ricreative e Socializzazione"
              image="https://via.placeholder.com/56x46"
            />
            <Card
              text="Comfort Personale e Accessibilità"
              image="https://via.placeholder.com/56x46"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
