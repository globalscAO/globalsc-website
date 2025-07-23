"use client";

import React, { ReactNode, useState } from "react";
import { IoIosPlayCircle } from "react-icons/io";
import { MediaType } from "../types/MediaType";
import { transformarTextoComLinks } from "../utils/textoEmLinks";
import SwiperGallery from "./SwiperGallery";
import Image from "next/image";

interface PastEventCardProps {
  imgSrc: string;
  mediaSrc: MediaType[];
  title: string;
  description: string | ReactNode;
}

const PastEventCardVertical: React.FC<PastEventCardProps> = ({
  imgSrc,
  mediaSrc,
  title,
  description,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState<MediaType>(mediaSrc[0]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  function adicionarReticencias(texto: string): string {
    const limite = 120;
    if (texto.length > limite) {
      return texto.slice(0, limite) + "...";
    }
    return texto;
  }

  return (
    <div className="w-full">
      <div className="flex flex-col min-h-96 h-[525px] w-full bg-white rounded-xl shadow-md">
        <Image
          src={imgSrc}
          alt={title}
          className="object-cover w-full rounded-xl h-64"
        />

        <div className="flex flex-col p-5 w-full h-60 justify-between gap-2">
          <div className="flex flex-col w-full h-full gap-2">
            <h1 className="text-[#11005A] font-semibold text-base">
              {title.toUpperCase()}
            </h1>

            <p className="text-[#676565] text-sm">
              {typeof description === "string"
                ? adicionarReticencias(description)
                : description}
            </p>
          </div>
          <button
            onClick={handleOpenModal}
            className="text-[#11005A] font-semibold w-fit hover:text-[#0056E1] text-sm cursor-pointer">
            Saiba mais...
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 py-2">
          <div className="relative lg:max-h-[90vh] max-lg:h-screen max-lg:w-full w-2/3 flex flex-col gap-5 bg-white lg:p-12 max-lg:p-5 rounded-lg overflow-y-auto lg:pb-24 max-lg:pb-24">
            <h1 className="text-3xl font-semibold text-[#11005A] max-lg:text-base max-lg:text-center">
              {title.toUpperCase()}
            </h1>

            <div className="w-full">
              <SwiperGallery media={mediaSrc} />
            </div>

            <p className="max-lg:text-center whitespace-pre-line">
              {typeof description === "string"
                ? transformarTextoComLinks(description)
                : description}
            </p>
          </div>

          <button
            onClick={handleCloseModal}
            className="absolute z-50 cursor-pointer bottom-14 max-lg:bottom-8 w-fit h-fit py-2 px-28 bg-[#0056E1] hover:bg-white hover:text-[#0056E1] hover:border border-[#0056E1] rounded-md font-semibold text-white transition-colors duration-150">
            Fechar
          </button>
        </div>
      )}
    </div>
  );
};

export default PastEventCardVertical;
