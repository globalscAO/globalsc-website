import type { Metadata } from "next";
import Academy from "./container/Academy";

export const metadata: Metadata = {
  title: "Academia | Global Services Corporation",
  description:
    "A Global Academy oferece cursos e treinamentos exclusivos para profissionais que buscam excelência no mercado angolano.",
  openGraph: {
    title: "Academia | Global Services Corporation",
    description:
      "Cursos e treinamentos exclusivos para profissionais que desejam se destacar no mercado empresarial angolano.",
    url: "https://globalsc.ao/academy",
    type: "website",
    images: [
      {
        url: "https://globalsc.ao/images/academy-banner.jpeg",
        width: 1200,
        height: 630,
        alt: "Academy - Global Services Corporation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@globalservicescorporation",
    title: "Academy | Global Services Corporation",
    description:
      "Capacite-se com cursos exclusivos para profissionais e líderes empresariais.",
    images: ["https://globalsc.ao/images/academy-banner.jpeg"],
  },
  alternates: {
    canonical: "https://globalsc.ao/academy",
  },
};

export default function Page() {
  return (
    <>
      <head>
        <meta
          name="keywords"
          content="treinamentos empresariais, cursos corporativos, desenvolvimento profissional, capacitação Angola, liderança e inovação"
        />
      </head>
      <Academy />
    </>
  );
}
