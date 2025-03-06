import type { Metadata } from "next";
import Blog from "./container/Blog";

export const metadata: Metadata = {
  title: "Blog | Global Services Corporation",
  keywords: "Blog, Global Services Corporation",
  description:
    "Acompanhe as últimas novidades, insights e tendências do mercado empresarial angolano no Blog da Global Services Corporation.",
  openGraph: {
    title: "Blog | Global Services Corporation",
    description:
      "Descubra conteúdos exclusivos sobre negócios, inovação e estratégias empresariais no Blog da Global Services Corporation.",
    url: "https://globalsc.ao/blog",
    type: "website",
    images: [
      {
        url: "https://globalsc.ao/images/blog-banner.jpeg",
        width: 1200,
        height: 630,
        alt: "Blog - Global Services Corporation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@globalservicescorporation",
    title: "Blog | Global Services Corporation",
    description:
      "Fique atualizado com as últimas tendências do setor empresarial angolano.",
    images: ["https://globalsc.ao/images/blog-banner.jpeg"],
  },
  alternates: {
    canonical: "https://globalsc.ao/blog",
  },
};

export default function Page() {
  return (
    <>
      <Blog />
    </>
  );
}
