import React from "react";

const Hero = () => {
  return (
    <div className="w-full max-h-[682.50px] px-28 py-20 bg-white bg-opacity-95 flex-col justify-center items-center gap-20 inline-flex">
      <div className="h-72 flex-col justify-center items-center gap-12 flex">
        <div className="self-stretch h-72 flex-col justify-center items-center gap-4 flex">
          <div className="self-stretch text-center text-gray-900 text-6xl font-bold font-['Inter'] leading-[84px]">
            Casa Mons. Michele Cosentino
          </div>
          <div className="self-stretch text-center text-gray-500 text-xl font-normal font-['Inter'] tracking-tight">
            At lacus vitae nulla sagittis scelerisque nisl. Pellentesque duis
            cursus vestibulum, facilisi ac, sed faucibus.
          </div>
          <div className="px-5 py-2.5 bg-gray-900 rounded-md justify-center items-center inline-flex">
            <div className="text-white text-sm font-semibold font-['Inter'] leading-tight">
              Scopri di più
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
