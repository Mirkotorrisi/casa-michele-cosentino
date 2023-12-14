import React from "react";
import { SectionProps } from "types/home";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Carousel = ({
  heading,
  body,
  callToActions,
  headerImage,
}: SectionProps) => {
  return (
    <>
      <section className="w-full px-28 py-20 bg-blue-200 flex-col justify-start items-center gap-20 inline-flex">
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
      </section>

      <div className="w-full flex justify-center bg-blue-600">
        <Swiper spaceBetween={5} slidesPerView={5.5} loop>
          <SwiperSlide>
            <div className="border border-black w-[250px] h-[250px] bg-yellow-400">
              1
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border border-black w-[250px] h-[250px] bg-yellow-400">
              2
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border border-black w-[250px] h-[250px] bg-yellow-400">
              3
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border border-black w-[250px] h-[250px] bg-yellow-400">
              4
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border border-black w-[250px] h-[250px] bg-yellow-400">
              5
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border border-black w-[250px] h-[250px] bg-yellow-400">
              6
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Carousel;
