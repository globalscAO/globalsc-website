"use client";

import BannerLayout from "@/app/ui/Banner/BannerLayout";
// import HighlightsEvents from "../components/HighlightsEvents";
import Partners from "../components/Partners";
import PastEvents from "../components/PastEvents";
import SwiperGallery from "@/app/ui/SwiperGallery";
import { mediaItems } from "@/app/data/mediaItems";

const Blog: React.FC = () => {
  return (
    <section>
      <BannerLayout
        title={"Blog"}
        description={`Descubra todos os eventos promovidos pela Global Services Corporation, inspire-se nas edições anteriores e aproveite para fazer parte das próximas experiências!`}
      />

      <p className="text-center font-light w-2/3 mx-auto py-8 text-[#11005A] max-lg:hidden">
        A Global Academy organiza diversos eventos em nome da Global Services
        Corporation, incluindo o Business After Work, a Mesa Redonda com CEOs e
        outros encontros de destaque. Abaixo, você encontrará mais detalhes
        sobre alguns desses eventos:
      </p>
      <div className="px-24 max-lg:px-8 py-12 w-full flex justify-center">
        <SwiperGallery media={mediaItems} />
      </div>
      {/*<HighlightsEvents />*/}
      <PastEvents />
      <Partners />
    </section>
  );
};

export default Blog;
