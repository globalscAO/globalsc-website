import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Global Services Corporation - Excelência em Multiserviços",
  description:
    "A Global Services Corporation é uma empresa angolana de consultoria e prestação de serviços, conectando negócios a oportunidades estratégicas.",
  keywords: [
    "consultoria empresarial",
    "multiserviços Angola",
    "networking corporativo",
    "parcerias estratégicas",
    "negócios em Luanda",
  ],
  openGraph: {
    title: "Global Services Corporation - Excelência em Multiserviços",
    description:
      "A Global Services Corporation oferece soluções estratégicas para empresas que buscam inovação e crescimento no mercado angolano.",
    url: "https://globalsc.ao",
    type: "website",
    images: [
      {
        url: "https://globalsc.ao/url-globalsc-img.jpeg",
        width: 1200,
        height: 630,
        alt: "Global Services Corporation - Excelência em Multiserviços",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@globalservicescorporation",
    title: "Global Services Corporation - Excelência em Multiserviços",
    description:
      "Conectamos empresas a oportunidades estratégicas no mercado angolano.",
    images: ["https://globalsc.ao/url-globalsc-img.jpeg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-PT">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
      </head>
      <body className={`${interTight.variable} antialiased`}>
        {children}

        <Analytics />
      </body>
    </html>
  );
}
