import React from "react";

const WhoWeAre = () => {
  return (
    <section className="w-full h-96 px-28 py-20 bg-white flex-col justify-start items-center gap-20 inline-flex">
      <div className="h-48 flex-col justify-center items-center gap-12 flex">
        <div className="self-stretch h-48 flex-col justify-start items-center gap-4 flex">
          <h2 className="self-stretch text-center text-gray-900 text-6xl font-bold font-['Inter'] leading-10">
            Chi siamo
          </h2>
          <p className="self-stretch text-center text-gray-500 text-xl font-normal font-['Inter'] tracking-tight">
            At lacus vitae nulla sagittis scelerisque nisl. Pellentesque duis
            cursus vestibulum, facilisi ac, sed faucibus.
          </p>
          <div className="justify-center items-center gap-4 inline-flex">
            <div className="px-5 py-2.5 bg-gray-900 rounded-md justify-center items-center flex">
              <div className="text-white text-sm font-semibold font-['Inter'] leading-tight">
                Scopri di più
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
