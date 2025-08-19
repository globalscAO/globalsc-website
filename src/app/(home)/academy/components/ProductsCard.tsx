import Image from "next/image";
import React from "react";

interface Props {
  id: number;
  img: string;
  title: string;
  description: string;
  handleClick: () => void;
  handleClickDetails?: () => void;
}

const ProductsCard: React.FC<Props> = ({
  img,
  title,
  description,
  handleClick,
  handleClickDetails,
}) => {
  function adicionarReticencias(texto: string): string {
    const limite = 350;
    if (texto.length > limite) {
      return texto.slice(0, limite) + "...";
    }
    return texto;
  }

  return (
    <div className="flex flex-col max-lg:w-72 w-80 shadow-md shadow-[#00000040] rounded-3xl">
      <Image
        width={1000}
        height={1000}
        src={img}
        alt=""
        className="h-64 object-cover w-full rounded-t-3xl"
      />
      <div className="p-6 flex flex-col gap-2 justify-between bg-white w-full h-72  rounded-b-3xl">
        <div className="flex flex-col gap-2 text-[#11005A]">
          <h1 className="font-semibold text-base max-lg:text-sm">
            {title.toUpperCase()}
          </h1>
          <p className="text-xs">{adicionarReticencias(description)}</p>
        </div>

        <div className="flex justify-end w-full gap-2">
          <button
            onClick={handleClick}
            className="primary-btn w-full">
            Inscrever-se
          </button>

          <button
            onClick={handleClickDetails}
            className="secondary-btn w-full">
            Ver detalhes
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
