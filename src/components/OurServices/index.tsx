import React from "react";

const OurServices = () => {
  return (
    <section className="w-full h-96 px-28 py-20 bg-white flex-col justify-start items-center gap-20 inline-flex">
      <div className="h-48 flex-col justify-end items-center gap-12 flex">
        <div className="self-stretch h-48 flex-col justify-center items-center gap-4 flex">
          <h2 className="self-stretch text-center text-gray-900 text-6xl font-bold font-['Inter'] leading-10">
            I nostri servizi
          </h2>
          <p className="self-stretch text-center text-gray-500 text-xl font-normal font-['Inter'] tracking-tight">
            At lacus vitae nulla sagittis scelerisque nisl. Pellentesque duis
            cursus vestibulum, facilisi ac, sed faucibus.
          </p>
          <div className="justify-start items-start gap-4 inline-flex">
            <div className="px-5 py-2.5 bg-gray-900 rounded-md justify-center items-center flex">
              <div className="text-white text-sm font-semibold font-['Inter'] leading-tight">
                Scopri di più
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="justify-start items-center gap-32 inline-flex">
        <div className="w-96 flex-col justify-start items-start gap-4 inline-flex">
          <div className="self-stretch rounded-md justify-start items-center gap-6 inline-flex">
            <div className="w-16 h-16 relative bg-gray-900 rounded-3xl" />
            <div className="w-96 flex-col justify-center items-start gap-2 inline-flex">
              <div className="self-stretch text-gray-900 text-xl font-semibold font-['Inter'] leading-loose">
                Servizio 1
              </div>
              <p className="self-stretch text-gray-500 text-base font-normal font-['Inter'] leading-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
                ipsum viverra etiam.
              </p>
            </div>
          </div>
          <div className="self-stretch h-px bg-gray-200" />
          <div className="self-stretch rounded-md justify-start items-center gap-6 inline-flex">
            <div className="w-16 h-16 relative bg-gray-900 rounded-3xl" />
            <div className="w-96 flex-col justify-center items-start gap-2 inline-flex">
              <div className="self-stretch text-gray-900 text-xl font-semibold font-['Inter'] leading-loose">
                Servizio 2
              </div>
              <div className="self-stretch text-gray-500 text-base font-normal font-['Inter'] leading-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
                ipsum viverra etiam.
              </div>
            </div>
          </div>
          <div className="self-stretch h-px bg-gray-200" />
          <div className="self-stretch rounded-md justify-start items-center gap-6 inline-flex">
            <div className="w-16 h-16 relative bg-gray-900 rounded-3xl" />
            <div className="w-96 flex-col justify-center items-start gap-2 inline-flex">
              <div className="self-stretch text-gray-900 text-xl font-semibold font-['Inter'] leading-loose">
                Servizio 3
              </div>
              <div className="self-stretch text-gray-500 text-base font-normal font-['Inter'] leading-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
                ipsum viverra etiam.
              </div>
            </div>
          </div>
        </div>
        <div className="w-96 h-96 relative rounded-md border-2 border-gray-900">
          <div className="w-96 h-96 left-0 top-0 absolute bg-white" />
        </div>
      </div>
      <div className="justify-start items-center gap-32 inline-flex">
        <div className="w-96 h-96 relative rounded-md border-2 border-gray-900">
          <div className="w-96 h-96 left-0 top-0 absolute bg-white" />
        </div>
        <div className="w-96 flex-col justify-start items-start gap-4 inline-flex">
          <div className="self-stretch rounded-md justify-start items-center gap-6 inline-flex">
            <div className="w-16 h-16 relative bg-gray-900 rounded-3xl" />
            <div className="w-96 flex-col justify-center items-start gap-2 inline-flex">
              <div className="self-stretch text-gray-900 text-xl font-semibold font-['Inter'] leading-loose">
                Servizio 4
              </div>
              <div className="self-stretch text-gray-500 text-base font-normal font-['Inter'] leading-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
                ipsum viverra etiam.
              </div>
            </div>
          </div>
          <div className="self-stretch h-px bg-gray-200" />
          <div className="self-stretch rounded-md justify-start items-center gap-6 inline-flex">
            <div className="w-16 h-16 relative bg-gray-900 rounded-3xl" />
            <div className="w-96 flex-col justify-center items-start gap-2 inline-flex">
              <div className="self-stretch text-gray-900 text-xl font-semibold font-['Inter'] leading-loose">
                Servizio 5
              </div>
              <div className="self-stretch text-gray-500 text-base font-normal font-['Inter'] leading-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
                ipsum viverra etiam.
              </div>
            </div>
          </div>
          <div className="self-stretch h-px bg-gray-200" />
          <div className="self-stretch rounded-md justify-start items-center gap-6 inline-flex">
            <div className="w-16 h-16 relative bg-gray-900 rounded-3xl" />
            <div className="w-96 flex-col justify-center items-start gap-2 inline-flex">
              <div className="self-stretch text-gray-900 text-xl font-semibold font-['Inter'] leading-loose">
                Servizio 6
              </div>
              <p className="self-stretch text-gray-500 text-base font-normal font-['Inter'] leading-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
                ipsum viverra etiam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
