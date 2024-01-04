import SectionHeading from "components/SectionHeading";
import Image from "components/Image";
import React from "react";

const WhoWeAre = ({}) => {
  return (
    <section className="w-full  px-28 py-20 bg-white flex flex-col justify-start items-center gap-20 relative">
      <SectionHeading title={{ text: "second-section-heading" }} />
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 w-full  h-96 max-w-6xl bg-orange-500">
        <Image imageKey="caregiving" />

        <div className="flex flex-col">
          <SectionHeading
            subtitle={{ text: "caregiving-description" }}
            cta={{
              label: "hero-cta",
              href: "/",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
