"use client"

import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function Partners() {
  const cardInfo = [
    { img: "/icons/home/partners/aec.svg" },
    { img: "/icons/home/partners/aecipa.svg" },
    { img: "/icons/home/partners/aes.svg" },
    { img: "/icons/home/partners/sta_seguros.svg" },
    { img: "/icons/home/partners/tda.svg" },
  ];

  return (
    <section className="flex flex-col items-center gap-10 max-lg:px-5 py-10 max-lg:mx-0 rounded-xl lg:mb-10 justify-center lg:h-80 w-full">
      <p className="text-3xl font-semibold text-[#11005a] max-lg:text-base">
        Parceiros
      </p>

      <div className="h-fit flex flex-col items-center w-full max-w-7xl">
        <Swiper
          loop={true}
          allowTouchMove={false}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              speed: 2000,
            },
            640: {
              slidesPerView: 2,
              speed: 3000,
            },
            1024: {
              slidesPerView: 4,
              speed: 3000,
            },
          }}
          slidesPerView={4}
          spaceBetween={10}
          speed={1000}
          modules={[Autoplay]}
          className="partners relative w-full">
          {cardInfo.map((card, index) => (
            <SwiperSlide
              key={index}>
              <div className="w-full flex items-center justify-center">
                <img
                  src={card.img}
                  className="w-24 object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
