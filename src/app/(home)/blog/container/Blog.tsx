"use client";

import BannerLayout from "@/app/ui/Banner/BannerLayout";
// import HighlightsEvents from "../components/HighlightsEvents";
import Partners from "../components/Partners";
import PastEvents from "../components/PastEvents";
import SwiperGallery from "@/app/ui/SwiperGallery";
import { mediaItems } from "@/app/data/mediaItems";

const Blog: React.FC = () => {
  return (
    <section className="flex flex-col w-full gap-4 items-center">
      <BannerLayout
        title={"Blog"}
        description={`Descubra todos os eventos promovidos pela Global Services Corporation, inspire-se nas edições anteriores e aproveite para fazer parte das próximas experiências!`}
      />

      <div className="max-w-5xl w-full flex flex-col gap-4 py-8">
        <div className="w-full flex justify-center">
          <SwiperGallery media={mediaItems} />
        </div>

        <div className="flex flex-col gap-4 max-lg:items-center max-lg:text-center">
          <h1 className="text-3xl font-semibold text-[#11005A] max-lg:text-base">
            FÓRUM SOBRE: O IMPACTO DO SECTOR FINANCEIRO NO CONTEÚDO LOCAL
          </h1>

          <p className="text-sm">
            O Fórum sobre O Impacto do Setor Financeiro no Conteúdo Local é um
            desdobramento do debate realizado durante a 5ª Plenária da 4ª Edição
            da Mesa Redonda com CEOs. O encontro reuniu alguns dos principais
            intervenientes da banca e do conteúdo local angolano, tendo como
            tema: Como a Tecnologia pode Promover a Integração da Cadeia de
            Valor do Mercado Financeiro e da Indústria de Petróleo e Gás? O
            Fórum sobre o Impacto do Sector Financeiro no Conteúdo Local, será
            uma oportunidade para discutir, fomentar e dinamizar boas práticas
            entre o sector financeiro e as empresas do conteúdo local angolano.
           
          </p>

          <a
            href="https://conteudolocal.globalsc.ao"
            target="_blank"
            className="py-2 px-28 bg-[#c9741f] border border-[#c9741f] hover:bg-white hover:text-[#c9741f] rounded-md w-fit max-lg:w-full font-semibold text-white transition-colors duration-200 flex
			 justify-center items-center">
            Participar
          </a>
        </div>

        {/*
        <HighlightsEvents />
      */}

        <PastEvents />
        <Partners />
      </div>
    </section>
  );
};

export default Blog;
