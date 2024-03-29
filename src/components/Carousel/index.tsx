import Image from "components/Image";
import useIsMobile from "hooks/useIsMobile";
import React from "react";
import { getSvgIcon } from "resources/getSvgIcon";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ListItem } from "types/pageData";

type Props = {
  className?: string;
  images: ListItem[];
};

const Carousel = ({ className, images = [] }: Props) => {
  const { isMobile, isMounted } = useIsMobile();
  return (
    isMounted && (
      <Swiper
        className={className}
        spaceBetween={16}
        slidesPerView={isMobile ? 1.2 : 1.8}
        centeredSlides
        loop
        autoplay
        navigation={{
          nextEl: ".button-next",
          prevEl: ".button-prev",
        }}
        modules={[Navigation, Autoplay]}
      >
        {images.map((listItem, index) => (
          <SwiperSlide key={index}>
            <Image
              imageData={{
                key: listItem.title,
                image: listItem.image,
                description: listItem.title,
              }}
              className="rounded-xl lg:rounded-3xl"
            />
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
