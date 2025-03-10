"use client";

import { MediaType } from "@/app/types/MediaType";
import React, { useState } from "react";
import { IoIosPlayCircle } from "react-icons/io";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";

const mediaItems: MediaType[] = [
  {
    id: 1,
    type: "image",
    src: "https://global-services-corporation.github.io/images/baw-jan-2025/1.jpg",
  },
  {
    id: 2,
    type: "image",
    src: "https://global-services-corporation.github.io/images/baw-jan-2025/2.jpg",
  },
  {
    id: 3,
    type: "image",
    src: "https://global-services-corporation.github.io/images/baw-jan-2025/3.jpg",
  },
  {
    id: 4,
    type: "image",
    src: "https://global-services-corporation.github.io/images/baw-jan-2025/4.jpg",
  },
  {
    id: 5,
    type: "image",
    src: "https://global-services-corporation.github.io/images/baw-jan-2025/5.jpg",
  },
  {
    id: 6,
    type: "image",
    src: "https://global-services-corporation.github.io/images/baw-jan-2025/6.jpg",
  },
  {
    id: 7,
    type: "image",
    src: "https://global-services-corporation.github.io/images/baw-jan-2025/7.jpg",
  },
  {
    id: 8,
    type: "image",
    src: "https://global-services-corporation.github.io/images/baw-jan-2025/8.jpg",
  },
  {
    id: 9,
    type: "image",
    src: "https://global-services-corporation.github.io/images/baw-jan-2025/9.jpg",
  },
  {
    id: 10,
    type: "image",
    src: "https://global-services-corporation.github.io/images/baw-jan-2025/10.jpg",
  },
  {
    id: 11,
    type: "image",
    src: "https://global-services-corporation.github.io/images/baw-jan-2025/11.jpg",
  },
  {
    id: 12,
    type: "image",
    src: "https://global-services-corporation.github.io/images/baw-jan-2025/12.jpg",
  },
  {
    id: 13,
    type: "image",
    src: "https://global-services-corporation.github.io/images/baw-jan-2025/13.jpg",
  },
  {
    id: 14,
    type: "image",
    src: "https://global-services-corporation.github.io/images/baw-jan-2025/14.jpg",
  },
  {
    id: 15,
    type: "image",
    src: "https://global-services-corporation.github.io/images/baw-jan-2025/15.jpg",
  },
  {
    id: 16,
    type: "image",
    src: "https://global-services-corporation.github.io/images/baw-jan-2025/16.jpg",
  },
];

const HighlightsEvents: React.FC = () => {
  const [selectedMedia, setSelectedMedia] = useState<MediaType>(mediaItems[0]);

  return (
    <section className="lg:px-24 max-lg:px-5 max-lg:py-7 mb-10 max-lg:mb-0 flex gap-9 justify-center">
      <div className="w-full flex flex-col gap-5 max-lg:w-full max-w-7xl">
        <div>
          <div className="selected-media">
            {selectedMedia.type === "video" ? (
              <video
                controls
                className="w-full h-[450px] max-lg:h-72 rounded-xl bg-black">
                <source
                  src={selectedMedia.src}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img
                src={selectedMedia.src}
                alt="Selected"
                className="w-full h-[450px] max-lg:h-72 object-contain bg-black rounded-xl"
              />
            )}
          </div>

          <div className="media-thumbnails flex mt-4 overflow-x-auto max-w-full">
            {mediaItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedMedia(item)}
                className={`thumbnail cursor-pointer min-w-24 w-24 h-24 mr-2 border ${
                  selectedMedia.id === item.id
                    ? "border-blue-500 border-2 rounded-lg"
                    : "border-gray-300"
                }`}>
                {item.type === "video" ? (
                  <div className="w-full h-full flex justify-center items-center rounded-md relative">
                    <span className="rounded-md text-white bg-[#00000079] absolute w-full h-full flex items-center justify-center">
                      <IoIosPlayCircle />
                    </span>
                    <video
                      src={item.src}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <img
                    src={item.src}
                    alt={`Thumbnail ${item.id}`}
                    className="w-full h-full object-cover bg-black rounded-md"
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6 max-lg:items-center max-lg:text-center">
          <h1 className="text-3xl font-semibold text-[#11005A] max-lg:text-base">
            Welcome Together – O Primeiro Encontro de 2025
          </h1>

          <p className="text-sm">
            A Global Services Corporation teve o prazer de anunciar o primeiro
            evento do ano: Business After Work – Welcome Together. Este encontro
            exclusivo foi realizado em 06 de Fevereiro de 2025, marcando o
            início de um ano repleto de novas oportunidades, conexões valiosas e
            colaboração estratégica. O Welcome Together foi cuidadosamente
            planejado para proporcionar um ambiente descontraído e inspirador,
            onde líderes, profissionais e parceiros puderam fortalecer
            relacionamentos, trocar ideias inovadoras e explorar novas
            possibilidades de negócios.
          </p>

          <a
            href="https://businessafterwork.globalsc.ao"
            target="_blank"
            className="py-2 px-28 bg-[#0056E1] hover:bg-white hover:text-[#0056E1] rounded-md w-fit max-lg:w-full font-semibold text-white transition-colors duration-200 flex
			 justify-center items-center">
            Participar
          </a>
        </div>
      </div>
    </section>
  );
};

export default HighlightsEvents;
