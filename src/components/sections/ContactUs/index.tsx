import SectionHeading from "components/SectionHeading";
import { useVocabulary } from "context/Vocabulary";
import React from "react";

const ContactUs = ({}) => {
  const { translate } = useVocabulary();
  return (
    <section className="w-full  px-28 py-20 bg-white flex flex-col justify-start items-center gap-20 relative">
      <SectionHeading title={{ text: "contact-us-heading" }} />
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 w-full  h-96 max-w-6xl bg-orange-500">
        <img
          className="h-full max-w-xl"
          src="https://via.placeholder.com/68x56"
        />
        <div className="flex flex-col">
          <SectionHeading
            title={{ text: "contact-us-subheading" }}
            subtitle={{ text: "contact-us-description" }}
          />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
