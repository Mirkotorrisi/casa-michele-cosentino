import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "components/Image";
import { Pagination, Navigation, EffectCreative } from "swiper/modules";
import { PaginationOptions } from "swiper/types";
import { getSvgIcon } from "resources/getSvgIcon";

const images = [
  "servizi-image-1",
  "servizi-image-2",
  "servizi-image-3",
  "servizi-image-4",
];

type Props = {
  className?: string;
};

const CarouselMini = ({ className }: Props) => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const customPagination = (slides: number): PaginationOptions => ({
    clickable: true,
    bulletClass: "bullet-inactive",
    bulletActiveClass: "bullet-active",
    bulletElement: "button",
    el: ".pagination-container",
    dynamicBullets: true,
  });

  return (
    <div className="w-full h-full flex items-center justify-center ">
      <Swiper
        // spaceBetween={20}
        slidesPerView={1}
        centeredSlides
        loop
        style={{
          padding: "1.5rem",
          // @ts-ignore
          "--swiper-wrapper-transition-timing-function":
            "cubic-bezier(.5, -0.01,0,1.01)",
        }}
        onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex + 1)}
        spaceBetween={20}
        speed={1000}
        modules={[Pagination, Navigation, EffectCreative]}
        pagination={customPagination(images.length)}
        navigation={{
          nextEl: ".button-next",
          prevEl: ".button-prev",
        }}
        effect="creative"
        creativeEffect={{
          prev: {
            // will set `translateZ(-400px)` on previous slides
            translate: ["150%", 0, 0],
          },
          next: {
            // will set `translateX(100%)` on next slides
            translate: ["150%", 0, 0],
          },
        }}
      >
        {images.map((imageKey, index) => (
          <SwiperSlide key={index}>
            <Image imageKey={imageKey} />
          </SwiperSlide>
        ))}

        <div className="flex justify-between items-center mt-4">
          <span className="text-[#A3A3A3] text-lg not-italic font-semibold leading-7">
            <span className="text-[#F97316]">{currentSlide}</span>/
            {images.length}
          </span>
          <div className="flex justify-end items-center">
            <div className="button-prev flex-1 hover:cursor-pointer">
              {getSvgIcon("arrow-left")}
            </div>
            <div className="pagination-container min-w-[150px] flex justify-center items-center"></div>
            <div className="button-next flex-1 hover:cursor-pointer">
              {getSvgIcon("arrow-right")}
            </div>
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default CarouselMini;