import React from "react";
import Card from "./Card";
import { useVocabulary } from "context/Vocabulary";
import SectionHeading from "components/SectionHeading";

const OurServices = ({}) => {
  return (
    <section className="w-full px-28 py-20 bg-green-200 flex-col justify-start items-center gap-20 inline-flex">
      <div className="self-stretch  flex-col justify-center items-center gap-4 flex">
        <SectionHeading
          title={{ text: "our-services", tag: "h2" }}
          cta={{ label: "hero-cta", href: "/" }}
        />
      </div>
      <div className="flex justify-between w-full">
        <div className="flex-col justify-center items-start gap-7 inline-flex max-w-lg">
          <SectionHeading
            title={{ text: "caregiving-heading", tag: "h3" }}
            subtitle={{ text: "caregiving-description" }}
          />
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
          <SectionHeading
            title={{ text: "daily-services-heading", tag: "h3" }}
            subtitle={{ text: "daily-services-description" }}
          />
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
