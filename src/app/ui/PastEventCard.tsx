"use client"

import React, { ReactNode, useState } from "react";
import { IoIosPlayCircle } from "react-icons/io";
import { MediaType } from "../types/MediaType";
import { transformarTextoComLinks } from "../utils/textoEmLinks";
import Image from "next/image";

interface PastEventCardProps {
  imgSrc: string;
  mediaSrc: MediaType[];
  title: string;
  description: ReactNode;
}

function adicionarReticencias(texto: string): string {
  const limite = 120;
  const linhas = texto.split("\n");
  let textoFinal = "";

  for (let linha of linhas) {
    if (textoFinal.length + linha.length > limite) {
      textoFinal += linha.slice(0, limite - textoFinal.length) + "...";
      break;
    }
    textoFinal += linha + "\n";
  }

  return textoFinal.trim();
}

const PastEventCard: React.FC<PastEventCardProps> = ({
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

  return (
    <div>
      <div className="flex h-64 w-full bg-white rounded-xl shadow-md max-lg:hidden">
        <Image
          src={imgSrc}
          alt={title}
          className="object-cover min-w-72 rounded-l-xl max-xl:w-64"
        />

        <div className="flex flex-col p-8 w-full h-full justify-between ">
          <h1 className="text-[#11005A] text-xl font-semibold max-xl:text-base">
            {title.toUpperCase()}
          </h1>

          <p className="text-[#676565] max-xl:text-sm ">
            {typeof description === "string"
              ? adicionarReticencias(description)
              : description}
          </p>

          <button
            onClick={handleOpenModal}
            className="text-[#11005A] font-semibold w-fit hover:text-[#FF9800] max-xl:text-sm">
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

            <div>
              <div className="selected-media selected-media lg:h-[400px]">
                {selectedMedia.type === "video" ? (
                  <video
                    controls
                    className="w-full h-full max-lg:h-72 rounded-xl">
                    <source
                      src={selectedMedia.src}
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <Image
                    src={selectedMedia.src}
                    alt="Selected"
                    className="w-full h-full object-contain max-lg:h-72 bg-black rounded-xl"
                  />
                )}
              </div>

              <div className="media-thumbnails flex mt-4 overflow-x-auto max-w-full">
                {mediaSrc.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setSelectedMedia(item)}
                    className={`thumbnail cursor-pointer min-w-24 w-24 h-24 mr-2 border ${
                      selectedMedia.id === item.id
                        ? "border-blue-500 border-2 rounded-lg"
                        : "border-none"
                    }`}>
                    {item.type === "video" ? (
                      <div className="bg-[#0000005a] w-full h-full flex justify-center items-center rounded-md">
                        <span className="text-white">
                          <IoIosPlayCircle />
                        </span>
                      </div>
                    ) : (
                      <Image
                        src={item.src}
                        alt={`Thumbnail ${item.id}`}
                        className="w-44 h-full object-cover  rounded-md"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <p className="max-lg:text-center whitespace-pre-line">
              {typeof description === "string"
                ? transformarTextoComLinks(description)
                : description}
            </p>
          </div>

          <button
            onClick={handleCloseModal}
            className="absolute bottom-14 max-lg:bottom-8 w-fit h-fit py-2 px-28 bg-[#FF9800] hover:bg-white hover:text-[#FF9800] hover:border border-[#FF9800] rounded-md font-semibold text-white transition-colors duration-150">
            Fechar
          </button>
        </div>
      )}
    </div>
  );
};

export default PastEventCard;
