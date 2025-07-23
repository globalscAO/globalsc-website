"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import Image from "next/image";

interface Props {
  title: string;
  description: string;
}

const carousselImages = [
  "https://global-services-corporation.github.io/images/baw-fev-2023/1.jpg",
  "https://global-services-corporation.github.io/images/baw-fev-2023/2.jpg",
  "https://global-services-corporation.github.io/images/baw-fev-2023/3.jpg",
  "https://global-services-corporation.github.io/images/baw-fev-2023/4.jpg",
  "https://global-services-corporation.github.io/images/baw-fev-2023/5.jpg",
  "https://global-services-corporation.github.io/images/baw-fev-2023/6.jpg",
  "https://global-services-corporation.github.io/images/baw-fev-2023/7.jpg",
  "https://global-services-corporation.github.io/images/baw-fev-2023/8.jpg",
];

const BannerLayout: React.FC<Props> = ({ title, description }) => {
  return (
    <section className="relative h-96 max-lg:h-80 w-full ">
      <div className="w-full h-full">
        <Swiper
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          speed={2000}
          loop
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[Autoplay, Navigation]}
          className="h-full">
          {carousselImages.map((image, index) => (
            <SwiperSlide key={index}>
              <Image
                src={image}
                alt="FIB"
                className="w-full h-full object-cover object-top"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center lg:px-24 max-lg:px-16 py-12 text-white gap-5 bg-gradient-to-t from-[#11005acc] to-[#11005a80] z-30">
        <h1 className="text-2xl max-lg:text-base">{title}</h1>

        <p className="max-lg:text-xs text-center">{description}</p>
      </div>
    </section>
  );
};

export default BannerLayout;
