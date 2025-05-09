import { FaAngleDoubleRight } from "react-icons/fa";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { eventsData } from "../../events/images/events";
import PastEventCard from "@/app/ui/PastEventCard";
import PastEventCardVertical from "@/app/ui/PastEventCardVertical";

const PastEvents: React.FC = () => {
  return (
    <section className="py-7 flex flex-col mb-10 max-lg:mb-0 items-center">
      <div className="max-w-7xl max-lg:px-5 max-lg:py-7 max-lg:mb-0 w-full">
        <div className="border-b-4 max-lg:border-b-2 border-[#11005A] mb-6 max-lg:mb-4 pb-2 ">
          <h1 className="font-semibold text-3xl text-[#11005A] max-lg:text-base">
            Eventos
          </h1>
        </div>

        <div className="flex gap-9 max-lg:flex-col">
          <div className="w-2/3 max-lg:w-full flex lg:flex-col lg:gap-7 overflow-hidden h-screen max-lg:h-fit max-lg:pb-5 relative shadow-lg rounded-b-lg">
            {[...eventsData].reverse().map((event) => (
              <PastEventCard
                key={event.id}
                imgSrc={event.imgSrc}
                title={event.title}
                description={event.description}
                mediaSrc={event.mediaSrc.map((media, mediaIndex) => ({
                  id: mediaIndex,
                  type: media.type,
                  src: media.src,
                }))}
              />
            ))}

            <div className="w-full">
              <Swiper
                loop={true}
                autoplay={{
                  delay: 0,
                  disableOnInteraction: true,
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                    speed: 2000,
                  },
                  640: {
                    slidesPerView: 2,
                    speed: 3000,
                  },
                  1024: {
                    slidesPerView: 4,
                    speed: 3000,
                  },
                }}
                slidesPerView={4}
                spaceBetween={10}
                modules={[Autoplay]}
                className="w-full">
                {eventsData.map((event, index) => (
                  <div className="flex items-center justify-center w-full">
                    <SwiperSlide
                      key={index}
                      className="flex items-center justify-center w-full">
                      <PastEventCardVertical
                        key={event.id}
                        imgSrc={event.imgSrc}
                        title={event.title}
                        description={event.description}
                        mediaSrc={event.mediaSrc.map((media, mediaIndex) => ({
                          id: mediaIndex,
                          type: media.type,
                          src: media.src,
                        }))}
                      />
                    </SwiperSlide>
                  </div>
                ))}
              </Swiper>
            </div>

            <div className="max-lg: w-full h-20 max-xl:h-32 bg-gradient-to-t from-[#000000cb] to-transparent absolute bottom-0 left-0 flex justify-center items-center rounded-b-lg z-40">
              <a
                href="/events"
                className="bg-[#0056E1cd] hover:bg-white hover:text-[#0056E1] flex items-center justify-center px-5 py-2 gap-2 text-white font-semibold rounded-md transition-colors duration-200">
                Ver mais <FaAngleDoubleRight />
              </a>
            </div>
          </div>

          <div className="w-1/3 flex flex-col max-lg:w-full">
            <div className="flex flex-col gap-2 h-full max-lg:h-screen">
              <h1 className="font-semibold text-3xl text-[#11005A] max-lg:text-base">
                Feed
              </h1>

              <iframe
                src="https://www.linkedin.com/embed/feed/update/urn:li:share:7325814509942521857"
                className="w-full h-full rounded-xl"
                title="Publicação incorporada"></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PastEvents;
