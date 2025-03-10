import { Autoplay, Navigation } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface Slide {
  src: string;
  alt: string;
  title: React.ReactNode;
  description: string;
}

const HomeCarousel: React.FC = () => {
  const slides: Slide[] = [
    {
      src: "https://global-services-corporation.github.io/images/baw-jan-2025/assets/banner-baw.png",
      alt: "Business After Work 2025 - Welcome Together",
      title: (
        <a
          href="https://businessafterwork.globalsc.ao"
          target="_blank">
          <div className="w-full h-full lg:px-44 max-lg:px-10 flex flex-col max-lg:items-center">
            <h1 className="text-2xl w-2/4 max-lg:w-full text-start max-lg:text-center max-lg:text-sm ">
              A Global Services Corporation tem o prazer de anunciar o primeiro
              evento do ano:{" "}
              <span className=" font-extrabold">
                Business After Work – Welcome Together
              </span>
            </h1>
            <p className="font-light max-lg:text-[10px] w-2/4 max-lg:w-full max-lg:text-center">
              O Welcome Together foi cuidadosamente planejado para proporcionar
              um ambiente descontraído e inspirador.
            </p>
          </div>
        </a>
      ),
      description: ``,
    },
    {
      src: "https://global-services-corporation.github.io/images/new-car.jpg",
      alt: "Acidente de carro",
      title: (
        <h1 className="text-3xl w-3/4 text-center max-lg:text-lg">
          Conectando você às melhores soluções de{" "}
          <span className="">proteção</span>, com{" "}
          <span className="">segurança</span> e{" "}
          <span className="">tranquilidade</span>.
        </h1>
      ),
      description: "Protegendo o que importa, com segurança e confiança.",
    },
    {
      src: "https://global-services-corporation.github.io/images/female-doctor.jpg",
      alt: "Apoio emocional",
      title: (
        <h1 className="text-3xl w-3/4 text-center max-lg:text-lg">
          Oferecendo suporte emocional com{" "}
          <span className="">cuidado</span> e{" "}
          <span className="">empatia</span>.
        </h1>
      ),
      description: "Apoio que você pode contar em todos os momentos.",
    },
    {
      src: "https://global-services-corporation.github.io/images/available-24.jpg",
      alt: "Atendimento 24h",
      title: (
        <h1 className="text-3xl w-3/4 text-center max-lg:text-lg">
          Atendimento 24 horas para sua{" "}
          <span className="">conveniência</span> e{" "}
          <span className="">tranquilidade</span>.
        </h1>
      ),
      description: "Estamos aqui quando você mais precisa.",
    },
    {
      src: "https://global-services-corporation.github.io/images/family-position.jpg",
      alt: "Segurança familiar",
      title: (
        <h1 className="text-3xl w-3/4 text-center max-lg:text-lg">
          Protegendo sua família com{" "}
          <span className="">segurança</span> e{" "}
          <span className="">amor</span>.
        </h1>
      ),
      description: "Cuidando do que é mais importante para você.",
    },
  ];

  return (
    <div className="relative">
      <button className="swiper-button-prev max-lg:hidden left-0 top-1/2">
        <FaChevronLeft className="text-white" />
      </button>{" "}

      <Swiper
        autoplay={{
          delay: 4500,
          disableOnInteraction: true,
        }}
        spaceBetween={0}
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Autoplay, Navigation]}
        className="h-96 relative">
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <img
              src={slide.src}
              alt={slide.alt}
              className="w-full h-full object-cover object-top"
            />
            <div className="bg-gradient-to-b from-[#11005A]/80 to-[#11005A]/50 h-full absolute top-0 left-0 w-full justify-center items-center text-white flex flex-col gap-3">
              {slide.title}
              <p className="font-light max-lg:text-xs">{slide.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button className="swiper-button-next max-lg:hidden right-0 top-1/2">
        <FaChevronRight className="text-white" />
      </button>
    </div>
  );
};

export default HomeCarousel;
