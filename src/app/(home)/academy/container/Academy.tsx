"use client";

import BannerLayout from "@/app/ui/Banner/BannerLayout";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { CiFilter } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import Detalhes from "../components/DetailsModal";
import ProductsCard from "../components/ProductsCard";
import { productsInfo } from "../data/productsInfo";

export default function Academy() {
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
  const [isOpenDetails, setOpenDetails] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCargaHoraria, setFilterCargaHoraria] = useState("");
  const [filterCertificacao, setFilterCertificacao] = useState("");

  const router = useRouter();

  const handleClick = (product: any) => {
    setSelectedProduct(product);
    setOpenDetails(true);
  };

  const handleClose = () => {
    setOpenDetails(false);
    setSelectedProduct(null);
  };

  const filteredProducts = productsInfo.filter((product) => {
    return (
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterCargaHoraria
        ? product.cargaHoraria === filterCargaHoraria
        : true) &&
      (filterCertificacao ? product.certificacao === filterCertificacao : true)
    );
  });

  return (
    <section className="flex flex-col items-center">
      <BannerLayout
        title={"Academia"}
        description={"Desfrute das nossas formações empresariais."}
      />

      <div className="max-w-7xl">
        <p className="text-center font-light w-2/3 mx-auto py-8 text-[#11005A] max-lg:hidden">
          A Global Academy oferece uma ampla variedade de formações e cursos em
          nome da Global Services Corporation.
        </p>

        <div className="max-lg:p-5 flex flex-col items-center gap-12">
          <div className="flex justify-between gap-10 h-9 max-lg:gap-2 w-full">
            <div className="w-4/5 bg-gray-100 rounded-md py-1 px-5 flex justify-between items-center gap-2">
              <input
                type="text"
                id="search"
                className="outline-none w-full bg-transparent"
                placeholder="Pesquisar curso"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <IoIosSearch className="text-[#666666]" />
            </div>

            <div className="relative w-1/5">
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="w-full h-full bg-gray-100 rounded-md flex justify-center items-center gap-1 group hover:text-white hover:bg-[#11005A]">
                <CiFilter className="group-hover:text-white" />
                <span className="max-lg:hidden">Filtrar</span>
              </button>

              {isFilterOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg p-3">
                  <div className="mb-2">
                    <label className="text-sm">Carga Horária</label>
                    <select
                      className="w-full border rounded p-1"
                      value={filterCargaHoraria}
                      onChange={(e) => setFilterCargaHoraria(e.target.value)}>
                      <option value="">Todas</option>
                      <option value="10h">10h</option>
                      <option value="12h">12h</option>
                      <option value="15h">15h</option>
                      <option value="22h">22h</option>
                      <option value="30h">30h</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm">Certificação</label>
                    <select
                      className="w-full border rounded p-1"
                      value={filterCertificacao}
                      onChange={(e) => setFilterCertificacao(e.target.value)}>
                      <option value="">Todas</option>
                      <option value="INEFOP">INEFOP</option>
                    </select>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="pb-20 grid grid-cols-3 max-xl:grid-cols-3 max-lg:grid-cols-1 gap-10 max-lg:px-5 w-full">
            {filteredProducts.map((product, index) => (
              <div
                className="flex justify-center items-center"
                key={index}>
                <ProductsCard
                  img={product.coverImg}
                  title={product.title}
                  description={product.description}
                  id={product.id}
                  handleClick={() => router.push("/academy/registration")}
                  handleClickDetails={() => handleClick(product)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {isOpenDetails && selectedProduct && (
        <Detalhes
          product={selectedProduct}
          handleClose={handleClose}
          handleClick={() => router.push("/academy/registration")}
        />
      )}
    </section>
  );
}
