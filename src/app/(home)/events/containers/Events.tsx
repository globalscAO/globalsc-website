"use client"

import BannerLayout from "@/app/ui/Banner/BannerLayout";
import Statistics from "../components/Statistics";
import AllEvents from "../components/AllEvents";

export default function Events() {
  return (
    <section>
      <BannerLayout
        title={"Eventos"}
        description={
          "Veja todos os eventos realizados pela Global Services Corporation até ao momento."
        }
      />
      <Statistics />
      <AllEvents />
    </section>
  );
}
