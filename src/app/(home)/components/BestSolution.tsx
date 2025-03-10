"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

interface Props {
  img: string;
  title: string;
  description: string;
}

const BestSolution: React.FC = () => {
  const SolutionCard: React.FC<Props> = ({ img, title, description }) => {
    return (
      <div className="flex items-center flex-col text-center bg-[#d8d8d833] shadow-sm shadow-[#0000003f] rounded-2xl p-6 w-72 text-[#11005a] gap-2 transition-all duration-200 h-64 justify-center">
        <img
          src={img}
          alt={title}
          className="w-10"
        />
        <div className="flex flex-col gap-2 ">
          <h2 className="font-semibold">{title}</h2>
          <p className="text-sm">{description}</p>
        </div>
      </div>
    );
  };

  const cardInfo = [
    {
      img: "/icons/home/certificate.svg",
      title: "Plataforma Certificada",
      description: `Isso garante que você está lidando com profissionais competentes e que seguem as melhores práticas do mercado.`,
    },
    {
      img: "/icons/home/24hours.svg",
      title: "Atendimento 24/7",
      description: `A tranquilidade de saber que sua mediadora está disponível a qualquer momento, oferecendo suporte 24 horas por dia, 7 dias por semana, é fundamental.`,
    },
    {
      img: "/icons/home/experience.svg",
      title: "Experiência Comprovada",
      description: `Com mais de 5 anos de experiência no setor, garantimos conhecimento prático para oferecer uma experiência única e eficiente para os clientes.`,
    },
    {
      img: "/icons/home/circle-friends.svg",
      title: "Parceiros de Confiança",
      description: ` Com uma ampla rede de parcerias com seguradoras respeitadas no mercado, a mediadora temos acesso a uma vasta gama de produtos.`,
    },
  ];

  return (
    <section className="bg-white lg:p-24 max-lg:p-12 flex justify-center">
      <div className="flex items-center flex-col gap-5 w-full max-w-7xl">
        <h1 className="text-3xl font-semibold text-[#11005a] max-lg:text-base max-lg:text-center">
          Porque somos a melhor solução para ti?
        </h1>
        <p className="text-[#11005a] text-center text-sm lg:w-2/3">
          Ao longo de 5 anos, a empresa já ajudou inúmeras companhias com
          seguros, tornando-se uma plataforma confiável e certificada. Isso
          garante que você está lidando com profissionais competentes e que
          seguem as melhores práticas do mercado.
        </p>
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          loop={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 1,
            },
            786: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          slidesPerView={3}
          modules={[Autoplay]}
          className="w-full relative py-5">
          {cardInfo.map((card, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center justify-center w-full py-2">
                <SolutionCard
                  img={card.img}
                  title={card.title}
                  description={card.description}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default BestSolution;
