import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "components/Image";
import { getSvgIcon } from "resources/getSvgIcon";
import { Navigation } from "swiper/modules";
import useIsMobile from "hooks/useIsMobile";

const images = [
  "hero-image",
  "hero-image",
  "hero-image",
  "hero-image",
  "hero-image",
  "hero-image",
];

type Props = {
  className?: string;
};

const Carousel = ({ className }: Props) => {
  const { isMobile, isMounted } = useIsMobile();
  return (
    isMounted && (
      <Swiper
        className={className}
        spaceBetween={16}
        slidesPerView={isMobile ? 1.2 : 1.8}
        centeredSlides
        loop
        navigation={{
          nextEl: ".button-next",
          prevEl: ".button-prev",
        }}
        modules={[Navigation]}
      >
        {images.map((imageKey, index) => (
          <SwiperSlide key={index}>
            <Image imageKey={imageKey} className="rounded-xl lg:rounded-3xl" />
          </SwiperSlide>
        ))}
        <div className="px-6 md:px-10 lg:px-20 flex justify-end items-center mt-4">
          <div className="flex gap-8 items-center">
            <button className="button-prev hover:cursor-pointer">
              {getSvgIcon("arrow-left")}
            </button>
            <button className="button-next flex-1 hover:cursor-pointer">
              {getSvgIcon("arrow-right")}
            </button>
          </div>
        </div>
      </Swiper>
    )
  );
};

export default Carousel;
