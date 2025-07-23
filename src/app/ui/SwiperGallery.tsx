import React, { useState } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { MediaType } from "../types/MediaType";
import Image from "next/image";

export default function SwiperGallery({ media }: { media: Array<MediaType> }) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

  return (
    <div className="w-full max-w-7xl">
      <Swiper
        spaceBetween={10}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="h-96 max-lg:h-72 relative rounded-xl mb-2 bg-black my-auto">
        <button className="swiper-button-prev max-lg:hidden left-0 top-1/2">
          <FaChevronLeft className="text-white" />
        </button>
        {media.map((item, index) => (
          <SwiperSlide key={index}>
            {item.type === "video" ? (
              <video
                controls
                className="w-full h-[450px] max-lg:h-72">
                <source
                  src={item.src}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            ) : (
              <Image
                src={item.src}
                alt="Selected"
                className="w-full h-[450px] max-lg:h-72 object-contain bg-black rounded-xl"
              />
            )}
          </SwiperSlide>
        ))}
        <button className="swiper-button-next max-lg:hidden right-0 top-1/2">
          <FaChevronRight className="text-white" />
        </button>
      </Swiper>

      <Swiper
        onSwiper={(swiper) => setThumbsSwiper(swiper)}
        spaceBetween={10}
        slidesPerView={5}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Thumbs]}
        breakpoints={{
          350: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
          1280: {
            slidesPerView: 5,
          },
        }}
        className="h-36 w-full">
        {media.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center items-center w-full h-full py-2">
              {item.type === "video" ? (
                <video className="rounded-xl h-full object-cover w-full shadow">
                  <source
                    src={item.src}
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <Image
                  src={item.src}
                  alt="Selected"
                  className="rounded-xl h-full object-cover w-full shadow"
                />
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
