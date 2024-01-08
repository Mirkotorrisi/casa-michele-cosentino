import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "components/Image";

const images = [
  "caregiving",
  "caregiving",
  "caregiving",
  "caregiving",
  "caregiving",
  "caregiving",
];

type Props = {
  className?: string;
};

const Carousel = ({ className }: Props) => {
  return (
    <Swiper
      className={className}
      spaceBetween={20}
      slidesPerView={1.4}
      centeredSlides
      loop
    >
      {images.map((imageKey, index) => (
        <SwiperSlide key={index}>
          <Image imageKey={imageKey} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
