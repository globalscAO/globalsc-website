import type { Metadata } from "next";
import RegistrationForm from "./container/RegistrationForm";

export const metadata: Metadata = {
  title: "Registro | Academia - Global Services Corporation",
  description:
    "Inscreva-se no curso exclusivo da Global Academy e impulsione sua carreira com treinamentos de alto nível.",
  openGraph: {
    title: "Registro | Academia - Global Services Corporation",
    description:
      "Garanta sua vaga nos cursos da Academy e desenvolva novas habilidades para se destacar no mercado angolano.",
    url: "https://globalsc.ao/academy/registro",
    type: "website",
    images: [
      {
        url: "https://globalsc.ao/images/academy-registration.jpeg",
        width: 1200,
        height: 630,
        alt: "Registro - Academy | Global Services Corporation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@globalservicescorporation",
    title: "Registro | Academia - Global Services Corporation",
    description:
      "Inscreva-se nos treinamentos exclusivos da Global Services Corporation Academy.",
    images: ["https://globalsc.ao/images/academy-registration.jpeg"],
  },
  alternates: {
    canonical: "https://globalsc.ao/academy/registro",
  },
};

export default function Page() {
  return (
    <>
      <head>
        <meta
          name="keywords"
          content="inscrição em curso, treinamento profissional, Academy Global Services, capacitação Angola, desenvolvimento empresarial"
        />
      </head>
      <RegistrationForm />
    </>
  );
}
