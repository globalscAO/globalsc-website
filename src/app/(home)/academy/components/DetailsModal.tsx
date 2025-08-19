import Image from "next/image";
import React from "react";

interface DetalhesProps {
  product: any;
  handleClose: () => void;
  handleClick: () => void;
}

const Detalhes: React.FC<DetalhesProps> = ({
  product,
  handleClose,
  handleClick,
}) => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-70 flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl shadow-2xl w-4/6 max-lg:w-11/12 lg:h-[80vh] text-[#11005A] flex max-lg:flex-col">
        <div className="lg:w-1/2">
          <Image
            src={product.coverImg}
            width={1000}
            height={1000}
            alt="Course Cover Img"
            className="w-full object-cover h-full lg:rounded-l-2xl max-lg:rounded-t-2xl"
          />
        </div>

        <div className="lg:w-1/2 flex flex-col justify-between lg:p-8 max-lg:px-4 max-lg:py-6 gap-4">
          <div className="flex flex-col gap-4">
            <h2 className="lg:text-2xl font-semibold">
              {product.title.toUpperCase()}
            </h2>

            <div className="flex max-lg:flex-col justify-between text-sm w-9/12 gap-1">
              <div className="flex items-center">
                <span className="font-semibold">Carga Horária: </span>{" "}
                <span className="ml-1">{product.cargaHoraria}</span>
              </div>

              <div className="flex items-center">
                <span className="font-semibold">Certificação:</span>{" "}
                <span className="ml-1">{product.certificacao}</span>
              </div>
            </div>
            <p className="max-lg:text-sm">{product.description}</p>
          </div>

          <div className="w-full flex items-center gap-2">
            <button
              onClick={handleClick}
              className="primary-btn w-full">
              Inscrever-se
            </button>

            <button
              onClick={handleClose}
              className="secondary-btn w-full ">
              Fechar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detalhes;
