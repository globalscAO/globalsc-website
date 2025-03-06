import type { Metadata } from "next";
import Events from "./containers/Events";

export const metadata: Metadata = {
  title: "Eventos Corporativos | Global Services Corporation",
  description:
    "Participe dos eventos exclusivos da Global Services Corporation e conecte-se com os principais líderes empresariais de Angola.",
  keywords: [
    "eventos corporativos",
    "networking empresarial",
    "consultoria Angola",
    "eventos empresariais",
    "parcerias estratégicas",
  ],
  openGraph: {
    title: "Eventos Corporativos | Global Services Corporation",
    description:
      "Descubra eventos de alto nível organizados pela Global Services Corporation e expanda sua rede de contatos.",
    url: "https://globalsc.ao/events",
    type: "website",
    images: [
      {
        url: "/url-events-img.jpg",
        width: 1200,
        height: 630,
        alt: "Eventos Corporativos - Global Services Corporation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@globalservices",
    title: "Eventos Corporativos | Global Services Corporation",
    description:
      "Amplie seu networking e participe de eventos estratégicos em Angola.",
    images: ["/url-events-img.jpg"],
  },
  alternates: {
    canonical: "https://globalsc.ao/events",
  },
};

export default function Page() {
  return <Events />;
}
