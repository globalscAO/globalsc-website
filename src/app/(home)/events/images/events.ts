import { ReactNode } from "react";
import { MediaType } from "../../../types/MediaType";

export interface Event {
  id: number;
  imgSrc: string;
  mediaSrc: MediaType[];
  title: string;
  description: ReactNode;
  date: Date;
}

export const eventsData: Event[] = [
  {
    id: 1,
    imgSrc:
      "https://global-services-corporation.github.io/images/seminario-sme/3.jpeg",
    mediaSrc: [
      {
        id: 1,
        type: "image",
        src: "https://global-services-corporation.github.io/images/seminario-sme/1.jpeg",
      },
      {
        id: 2,
        type: "image",
        src: "https://global-services-corporation.github.io/images/seminario-sme/2.jpeg",
      },
      {
        id: 3,
        type: "image",
        src: "https://global-services-corporation.github.io/images/seminario-sme/3.jpeg",
      },
      {
        id: 4,
        type: "image",
        src: "https://global-services-corporation.github.io/images/seminario-sme/4.jpeg",
      },
      {
        id: 5,
        type: "image",
        src: "https://global-services-corporation.github.io/images/seminario-sme/5.jpeg",
      },
      {
        id: 6,
        type: "image",
        src: "https://global-services-corporation.github.io/images/seminario-sme/6.jpeg",
      },
      {
        id: 7,
        type: "image",
        src: "https://global-services-corporation.github.io/images/seminario-sme/7.jpeg",
      },
      {
        id: 8,
        type: "image",
        src: "https://global-services-corporation.github.io/images/seminario-sme/8.jpeg",
      },
    ],
    title:
      "SEMINÁRIO PARA OS EFECTIVOS DO SME ALUSIVO AO 45º ANIVERSÁRIO - 15 DE ABRIL DE 2021",
    description: `Chefia e liderança: Desafios na gestão de equipas modernas.Em sede das comemorações alusivas ao 45º aniversário do Serviços de Migração e Estrangeiros - SME, ofereceu sessões de Formação e Treinamentos para os efectivos.`,
    date: new Date("2021-04-15"),
  },
  {
    id: 2,
    imgSrc:
      "https://global-services-corporation.github.io/images/forum-sme/11.jpeg",
    mediaSrc: [
      {
        id: 1,
        type: "image",
        src: "https://global-services-corporation.github.io/images/forum-sme/1.jpeg",
      },
      {
        id: 2,
        type: "image",
        src: "https://global-services-corporation.github.io/images/forum-sme/2.jpeg",
      },
      {
        id: 3,
        type: "image",
        src: "https://global-services-corporation.github.io/images/forum-sme/3.jpeg",
      },
      {
        id: 4,
        type: "image",
        src: "https://global-services-corporation.github.io/images/forum-sme/4.jpeg",
      },
      {
        id: 5,
        type: "image",
        src: "https://global-services-corporation.github.io/images/forum-sme/5.jpeg",
      },
      {
        id: 6,
        type: "image",
        src: "https://global-services-corporation.github.io/images/forum-sme/6.jpeg",
      },
      {
        id: 7,
        type: "image",
        src: "https://global-services-corporation.github.io/images/forum-sme/7.jpeg",
      },
      {
        id: 8,
        type: "image",
        src: "https://global-services-corporation.github.io/images/forum-sme/8.jpeg",
      },
      {
        id: 9,
        type: "image",
        src: "https://global-services-corporation.github.io/images/forum-sme/9.jpeg",
      },
      {
        id: 10,
        type: "image",
        src: "https://global-services-corporation.github.io/images/forum-sme/10.jpeg",
      },
      {
        id: 11,
        type: "image",
        src: "https://global-services-corporation.github.io/images/forum-sme/11.jpeg",
      },
      {
        id: 12,
        type: "image",
        src: "https://global-services-corporation.github.io/images/forum-sme/12.jpeg",
      },
      {
        id: 13,
        type: "image",
        src: "https://global-services-corporation.github.io/images/forum-sme/13.jpeg",
      },
      {
        id: 14,
        type: "image",
        src: "https://global-services-corporation.github.io/images/forum-sme/14.jpeg",
      },
      {
        id: 15,
        type: "image",
        src: "https://global-services-corporation.github.io/images/forum-sme/15.jpeg",
      },
      {
        id: 16,
        type: "image",
        src: "https://global-services-corporation.github.io/images/forum-sme/16.jpeg",
      },
      {
        id: 17,
        type: "image",
        src: "https://global-services-corporation.github.io/images/forum-sme/17.jpeg",
      },
      {
        id: 18,
        type: "image",
        src: "https://global-services-corporation.github.io/images/forum-sme/18.jpeg",
      },
      {
        id: 19,
        type: "image",
        src: "https://global-services-corporation.github.io/images/forum-sme/19.jpeg",
      },
      {
        id: 20,
        type: "image",
        src: "https://global-services-corporation.github.io/images/forum-sme/20.jpeg",
      },
      {
        id: 21,
        type: "image",
        src: "https://global-services-corporation.github.io/images/forum-sme/21.jpeg",
      },
      {
        id: 22,
        type: "image",
        src: "https://global-services-corporation.github.io/images/forum-sme/22.jpeg",
      },
      {
        id: 23,
        type: "image",
        src: "https://global-services-corporation.github.io/images/forum-sme/23.jpeg",
      },
      {
        id: 24,
        type: "image",
        src: "https://global-services-corporation.github.io/images/forum-sme/24.jpeg",
      },
      {
        id: 25,
        type: "image",
        src: "https://global-services-corporation.github.io/images/forum-sme/25.jpeg",
      },
      {
        id: 26,
        type: "image",
        src: "https://global-services-corporation.github.io/images/forum-sme/26.jpeg",
      },
    ],
    title: "Iº FÓRUM DO SME SOBRE EDUCAÇÃO PATRIOTICA - 9 DE NOVEMBRO DE 2022",
    description: `Principios e Valores como Factor de Coesão e Manuntenção das Organizações.Servem como base para a cultura organizacional, orientando comportamentos, decisões e estratégias.`,
    date: new Date("2022-11-09"),
  },
  {
    id: 3,
    imgSrc:
      "https://global-services-corporation.github.io/images/forum-pna/2.jpeg",
    mediaSrc: [
      {
        id: 1,
        type: "image",
        src: "https://global-services-corporation.github.io/images/forum-pna/1.jpeg",
      },
      {
        id: 2,
        type: "image",
        src: "https://global-services-corporation.github.io/images/forum-pna/2.jpeg",
      },
      {
        id: 3,
        type: "image",
        src: "https://global-services-corporation.github.io/images/forum-pna/3.jpeg",
      },
      {
        id: 4,
        type: "image",
        src: "https://global-services-corporation.github.io/images/forum-pna/4.jpeg",
      },
      {
        id: 5,
        type: "image",
        src: "https://global-services-corporation.github.io/images/forum-pna/5.jpeg",
      },
      {
        id: 6,
        type: "image",
        src: "https://global-services-corporation.github.io/images/forum-pna/6.jpeg",
      },
    ],
    title:
      "Iº FÓRUM SOBRE LIDERANÇA E DESENVOLVIMENTO DE PESSOAS DA PNA - 14 DE FEVEREIRO DE 2023",
    description: `Transformar o Efectivo em equipas de Alta Performance PNA, 47 anos.`,
    date: new Date("2023-02-14"),
  },
  {
    id: 4,
    imgSrc:
      "https://global-services-corporation.github.io/images/baw-fev-2023/10.jpg",
    mediaSrc: [
      {
        id: 1,
        type: "image",
        src: "https://global-services-corporation.github.io/images/baw-fev-2023/1.jpg",
      },
      {
        id: 2,
        type: "image",
        src: "https://global-services-corporation.github.io/images/baw-fev-2023/2.jpg",
      },
      {
        id: 3,
        type: "image",
        src: "https://global-services-corporation.github.io/images/baw-fev-2023/3.jpg",
      },
      {
        id: 4,
        type: "image",
        src: "https://global-services-corporation.github.io/images/baw-fev-2023/4.jpg",
      },
      {
        id: 5,
        type: "image",
        src: "https://global-services-corporation.github.io/images/baw-fev-2023/5.jpg",
      },
      {
        id: 6,
        type: "image",
        src: "https://global-services-corporation.github.io/images/baw-fev-2023/6.jpg",
      },
      {
        id: 7,
        type: "image",
        src: "https://global-services-corporation.github.io/images/baw-fev-2023/7.jpg",
      },
      {
        id: 8,
        type: "image",
        src: "https://global-services-corporation.github.io/images/baw-fev-2023/8.jpg",
      },
      {
        id: 9,
        type: "image",
        src: "https://global-services-corporation.github.io/images/baw-fev-2023/9.jpg",
      },
      {
        id: 10,
        type: "image",
        src: "https://global-services-corporation.github.io/images/baw-fev-2023/10.jpg",
      },
      {
        id: 11,
        type: "image",
        src: "https://global-services-corporation.github.io/images/baw-fev-2023/11.jpg",
      },
      {
        id: 12,
        type: "image",
        src: "https://global-services-corporation.github.io/images/baw-fev-2023/12.jpg",
      },
      {
        id: 13,
        type: "image",
        src: "https://global-services-corporation.github.io/images/baw-fev-2023/13.jpg",
      },
      {
        id: 14,
        type: "image",
        src: "https://global-services-corporation.github.io/images/baw-fev-2023/14.jpg",
      },
      {
        id: 15,
        type: "image",
        src: "https://global-services-corporation.github.io/images/baw-fev-2023/15.jpg",
      },
      {
        id: 16,
        type: "image",
        src: "https://global-services-corporation.github.io/images/baw-fev-2023/16.jpg",
      },
      {
        id: 17,
        type: "image",
        src: "https://global-services-corporation.github.io/images/baw-fev-2023/17.jpg",
      },
      {
        id: 18,
        type: "image",
        src: "https://global-services-corporation.github.io/images/baw-fev-2023/18.jpg",
      },
      {
        id: 19,
        type: "image",
        src: "https://global-services-corporation.github.io/images/baw-fev-2023/19.jpg",
      },
      {
        id: 20,
        type: "image",
        src: "https://global-services-corporation.github.io/images/baw-fev-2023/20.jpg",
      },
      {
        id: 21,
        type: "image",
        src: "https://global-services-corporation.github.io/images/baw-fev-2023/21.jpg",
      },
      {
        id: 22,
        type: "image",
        src: "https://global-services-corporation.github.io/images/baw-fev-2023/22.jpg",
      },
      {
        id: 23,
        type: "image",
        src: "https://global-services-corporation.github.io/images/baw-fev-2023/23.jpg",
      },
      {
        id: 24,
        type: "image",
        src: "https://global-services-corporation.github.io/images/baw-fev-2023/24.jpg",
      },
      {
        id: 25,
        type: "image",
        src: "https://global-services-corporation.github.io/images/baw-fev-2023/25.jpg",
      },
      {
        id: 26,
        type: "image",
        src: "https://global-services-corporation.github.io/images/baw-fev-2023/26.jpg",
      },
      {
        id: 27,
        type: "image",
        src: "https://global-services-corporation.github.io/images/baw-fev-2023/27.jpg",
      },
      {
        id: 28,
        type: "image",
        src: "https://global-services-corporation.github.io/images/baw-fev-2023/28.jpg",
      },
    ],
    title: "BUSINESS AFTER WORK - 15 DE FEVEREIRO DE 2023",
    description: ``,
    date: new Date("2023-02-15"),
  },
  {
    id: 5,
    imgSrc:
      "https://global-services-corporation.github.io/images/responsabilidade-social-viana/10.jpg",
    mediaSrc: [
      {
        id: 1,
        type: "image",
        src: "https://global-services-corporation.github.io/images/responsabilidade-social-viana/1.jpg",
      },
      {
        id: 2,
        type: "image",
        src: "https://global-services-corporation.github.io/images/responsabilidade-social-viana/2.jpg",
      },
      {
        id: 3,
        type: "image",
        src: "https://global-services-corporation.github.io/images/responsabilidade-social-viana/3.jpg",
      },
      {
        id: 4,
        type: "image",
        src: "https://global-services-corporation.github.io/images/responsabilidade-social-viana/4.jpg",
      },
      {
        id: 5,
        type: "image",
        src: "https://global-services-corporation.github.io/images/responsabilidade-social-viana/5.jpg",
      },
      {
        id: 6,
        type: "image",
        src: "https://global-services-corporation.github.io/images/responsabilidade-social-viana/6.jpg",
      },
      {
        id: 7,
        type: "image",
        src: "https://global-services-corporation.github.io/images/responsabilidade-social-viana/7.jpg",
      },
      {
        id: 8,
        type: "image",
        src: "https://global-services-corporation.github.io/images/responsabilidade-social-viana/8.jpg",
      },
      {
        id: 9,
        type: "image",
        src: "https://global-services-corporation.github.io/images/responsabilidade-social-viana/9.jpg",
      },
      {
        id: 10,
        type: "image",
        src: "https://global-services-corporation.github.io/images/responsabilidade-social-viana/10.jpg",
      },
      {
        id: 11,
        type: "image",
        src: "https://global-services-corporation.github.io/images/responsabilidade-social-viana/11.jpg",
      },
      {
        id: 12,
        type: "image",
        src: "https://global-services-corporation.github.io/images/responsabilidade-social-viana/12.jpg",
      },
      {
        id: 30,
        type: "image",
        src: "https://global-services-corporation.github.io/images/responsabilidade-social-viana/30.jpg",
      },
      {
        id: 31,
        type: "image",
        src: "https://global-services-corporation.github.io/images/responsabilidade-social-viana/31.jpg",
      },
      {
        id: 32,
        type: "image",
        src: "https://global-services-corporation.github.io/images/responsabilidade-social-viana/32.jpg",
      },
      {
        id: 33,
        type: "image",
        src: "https://global-services-corporation.github.io/images/responsabilidade-social-viana/33.jpg",
      },
      {
        id: 34,
        type: "image",
        src: "https://global-services-corporation.github.io/images/responsabilidade-social-viana/34.jpg",
      },
      {
        id: 39,
        type: "image",
        src: "https://global-services-corporation.github.io/images/responsabilidade-social-viana/39.jpg",
      },
      {
        id: 40,
        type: "image",
        src: "https://global-services-corporation.github.io/images/responsabilidade-social-viana/40.jpg",
      },
    ],
    title: "RESPONSABILIDADE SOCIAL (VIANA) - 25 DE ABRIL DE 2023",
    description: `O Dia Mundial da Luta Contra a Malária é comemorado em 25 de abril de cada ano, com o objetivo de aumentar a conscientização global sobre a malária e incentivar ações para prevenir e combater essa doença.`,
    date: new Date("2023-04-25"),
  },
  {
    id: 6,
    imgSrc:
      "https://global-services-corporation.github.io/images/mr-nova-era-da-lideranca/18.jpg",
    mediaSrc: [
      {
        id: 1,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-nova-era-da-lideranca/1.jpg",
      },
      {
        id: 18,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-nova-era-da-lideranca/18.jpg",
      },
      {
        id: 19,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-nova-era-da-lideranca/19.jpg",
      },
      {
        id: 20,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-nova-era-da-lideranca/20.jpg",
      },
      {
        id: 21,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-nova-era-da-lideranca/21.jpg",
      },
      {
        id: 22,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-nova-era-da-lideranca/22.jpg",
      },
      {
        id: 23,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-nova-era-da-lideranca/23.jpg",
      },
      {
        id: 24,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-nova-era-da-lideranca/24.jpg",
      },
      {
        id: 25,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-nova-era-da-lideranca/25.jpg",
      },
      {
        id: 26,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-nova-era-da-lideranca/26.jpg",
      },
      {
        id: 27,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-nova-era-da-lideranca/27.jpg",
      },
      {
        id: 28,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-nova-era-da-lideranca/28.jpg",
      },
      {
        id: 29,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-nova-era-da-lideranca/29.jpg",
      },
      {
        id: 30,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-nova-era-da-lideranca/30.jpg",
      },
      {
        id: 31,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-nova-era-da-lideranca/31.jpg",
      },
    ],
    title: "MESA REDONDA COM CEOS - 26 DE JULHO DE 2023",
    description: `Uma Nova Era na Liderança`,
    date: new Date("2023-07-26"),
  },
  {
    id: 7,
    imgSrc:
      "https://global-services-corporation.github.io/images/mr-nov-2023/1.jpg",
    mediaSrc: [
      {
        id: 1,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-nov-2023/1.jpg",
      },
      {
        id: 2,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-nov-2023/2.jpg",
      },
      {
        id: 3,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-nov-2023/3.jpg",
      },
      {
        id: 4,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-nov-2023/4.jpg",
      },
      {
        id: 5,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-nov-2023/5.jpg",
      },
      {
        id: 6,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-nov-2023/6.jpg",
      },
      {
        id: 7,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-nov-2023/7.jpg",
      },
      {
        id: 8,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-nov-2023/8.jpg",
      },
      {
        id: 9,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-nov-2023/9.jpg",
      },
      {
        id: 10,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-nov-2023/10.jpg",
      },
      {
        id: 11,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-nov-2023/11.jpg",
      },
      {
        id: 12,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-nov-2023/12.jpg",
      },
      {
        id: 13,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-nov-2023/13.jpg",
      },
      {
        id: 14,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-nov-2023/14.jpg",
      },
      {
        id: 15,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-nov-2023/15.jpg",
      },
      {
        id: 16,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-nov-2023/16.jpg",
      },
      {
        id: 17,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-nov-2023/17.jpg",
      },
      {
        id: 18,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-nov-2023/18.jpg",
      },
      {
        id: 19,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-nov-2023/19.jpg",
      },
      {
        id: 20,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-nov-2023/20.jpg",
      },
      {
        id: 21,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-nov-2023/21.jpg",
      },
      {
        id: 22,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-nov-2023/22.jpg",
      },
      {
        id: 23,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-nov-2023/23.jpg",
      },
      {
        id: 24,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-nov-2023/24.jpg",
      },
      {
        id: 25,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-nov-2023/25.jpg",
      },
      {
        id: 26,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-nov-2023/26.jpg",
      },
      {
        id: 27,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-nov-2023/27.jpg",
      },
      {
        id: 28,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-nov-2023/28.jpg",
      },
      {
        id: 29,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-nov-2023/29.jpg",
      },
      {
        id: 30,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-nov-2023/30.jpg",
      },
      {
        id: 31,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-nov-2023/31.jpg",
      },
      {
        id: 32,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-nov-2023/32.jpg",
      },
      {
        id: 33,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-nov-2023/33.jpg",
      },
      {
        id: 34,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-nov-2023/34.jpg",
      },
      {
        id: 35,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-nov-2023/35.jpg",
      },
      {
        id: 36,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-nov-2023/36.jpg",
      },
      {
        id: 37,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-nov-2023/37.jpg",
      },
      {
        id: 38,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-nov-2023/38.jpg",
      },
      {
        id: 39,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-nov-2023/39.jpg",
      },
    ],
    title: "MESA REDONDA COM CEOS - NOVEMBRO DE 2023",
    description: `O Papel do Sector Petrolifero na Mudança do Paradigma Cultural das Empresas Angolanas`,
    date: new Date("2023-11-01"),
  },
  {
    id: 8,
    imgSrc:
      "https://global-services-corporation.github.io/images/baw-fev-2024/1.jpg",
    mediaSrc: [
      {
        id: 1,
        type: "image",
        src: "https://global-services-corporation.github.io/images/baw-fev-2024/1.jpg",
      },
      {
        id: 2,
        type: "image",
        src: "https://global-services-corporation.github.io/images/baw-fev-2024/2.jpg",
      },
      {
        id: 3,
        type: "image",
        src: "https://global-services-corporation.github.io/images/baw-fev-2024/3.jpg",
      },
      {
        id: 4,
        type: "image",
        src: "https://global-services-corporation.github.io/images/baw-fev-2024/4.jpg",
      },
      {
        id: 5,
        type: "image",
        src: "https://global-services-corporation.github.io/images/baw-fev-2024/5.jpg",
      },
      {
        id: 6,
        type: "image",
        src: "https://global-services-corporation.github.io/images/baw-fev-2024/6.jpg",
      },
      {
        id: 7,
        type: "image",
        src: "https://global-services-corporation.github.io/images/baw-fev-2024/7.jpg",
      },
      {
        id: 8,
        type: "image",
        src: "https://global-services-corporation.github.io/images/baw-fev-2024/8.jpg",
      },
      {
        id: 9,
        type: "image",
        src: "https://global-services-corporation.github.io/images/baw-fev-2024/9.jpg",
      },
      {
        id: 10,
        type: "image",
        src: "https://global-services-corporation.github.io/images/baw-fev-2024/10.jpg",
      },
      {
        id: 11,
        type: "image",
        src: "https://global-services-corporation.github.io/images/baw-fev-2024/11.jpg",
      },
      {
        id: 12,
        type: "image",
        src: "https://global-services-corporation.github.io/images/baw-fev-2024/12.jpg",
      },
      {
        id: 13,
        type: "image",
        src: "https://global-services-corporation.github.io/images/baw-fev-2024/13.jpg",
      },
      {
        id: 14,
        type: "image",
        src: "https://global-services-corporation.github.io/images/baw-fev-2024/14.jpg",
      },
      {
        id: 15,
        type: "image",
        src: "https://global-services-corporation.github.io/images/baw-fev-2024/15.jpg",
      },
      {
        id: 16,
        type: "image",
        src: "https://global-services-corporation.github.io/images/baw-fev-2024/16.jpg",
      },
      {
        id: 17,
        type: "image",
        src: "https://global-services-corporation.github.io/images/baw-fev-2024/17.jpg",
      },
      {
        id: 18,
        type: "image",
        src: "https://global-services-corporation.github.io/images/baw-fev-2024/18.jpg",
      },
      {
        id: 19,
        type: "image",
        src: "https://global-services-corporation.github.io/images/baw-fev-2024/19.jpg",
      },
      {
        id: 20,
        type: "image",
        src: "https://global-services-corporation.github.io/images/baw-fev-2024/20.jpg",
      },
      {
        id: 21,
        type: "image",
        src: "https://global-services-corporation.github.io/images/baw-fev-2024/21.jpg",
      },
      {
        id: 22,
        type: "image",
        src: "https://global-services-corporation.github.io/images/baw-fev-2024/22.jpg",
      },
      {
        id: 24,
        type: "image",
        src: "https://global-services-corporation.github.io/images/baw-fev-2024/24.jpg",
      },
      {
        id: 25,
        type: "image",
        src: "https://global-services-corporation.github.io/images/baw-fev-2024/25.jpg",
      },
      {
        id: 26,
        type: "image",
        src: "https://global-services-corporation.github.io/images/baw-fev-2024/26.jpg",
      },
      {
        id: 27,
        type: "image",
        src: "https://global-services-corporation.github.io/images/baw-fev-2024/27.jpg",
      },
      {
        id: 28,
        type: "image",
        src: "https://global-services-corporation.github.io/images/baw-fev-2024/28.jpg",
      },
      {
        id: 29,
        type: "image",
        src: "https://global-services-corporation.github.io/images/baw-fev-2024/29.jpg",
      },
      {
        id: 30,
        type: "image",
        src: "https://global-services-corporation.github.io/images/baw-fev-2024/30.jpg",
      },
      {
        id: 31,
        type: "image",
        src: "https://global-services-corporation.github.io/images/baw-fev-2024/31.jpg",
      },
      {
        id: 32,
        type: "image",
        src: "https://global-services-corporation.github.io/images/baw-fev-2024/32.jpg",
      },
      {
        id: 33,
        type: "image",
        src: "https://global-services-corporation.github.io/images/baw-fev-2024/33.jpg",
      },
    ],
    title: "BUSINESS AFTER WORK - 29 DE FEVEREIRO 2024",
    description: `Welcome Together`,
    date: new Date("2024-02-29"),
  },
  {
    id: 9,
    imgSrc:
      "https://global-services-corporation.github.io/images/mr-edicao-fib/10.jpg",
    mediaSrc: [
      {
        id: 1,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-edicao-fib/1.jpg",
      },
      {
        id: 2,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-edicao-fib/2.jpg",
      },
      {
        id: 3,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-edicao-fib/3.jpg",
      },
      {
        id: 4,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-edicao-fib/4.jpg",
      },
      {
        id: 5,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-edicao-fib/5.jpg",
      },
      {
        id: 6,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-edicao-fib/6.jpg",
      },
      {
        id: 7,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-edicao-fib/7.jpg",
      },
      {
        id: 8,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-edicao-fib/8.jpg",
      },
      {
        id: 9,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-edicao-fib/9.jpg",
      },
      {
        id: 10,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-edicao-fib/10.jpg",
      },
      {
        id: 11,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-edicao-fib/11.jpg",
      },
      {
        id: 12,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-edicao-fib/12.jpg",
      },
      {
        id: 13,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-edicao-fib/13.jpg",
      },
      {
        id: 14,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-edicao-fib/14.jpg",
      },
      {
        id: 15,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-edicao-fib/15.jpg",
      },
      {
        id: 16,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-edicao-fib/16.jpg",
      },
      {
        id: 17,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-edicao-fib/17.jpg",
      },
      {
        id: 18,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-edicao-fib/18.jpg",
      },
      {
        id: 19,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-edicao-fib/19.jpg",
      },
      {
        id: 20,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-edicao-fib/20.jpg",
      },
      {
        id: 21,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-edicao-fib/21.jpg",
      },
      {
        id: 22,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-edicao-fib/22.jpg",
      },
      {
        id: 23,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-edicao-fib/23.jpg",
      },
      {
        id: 24,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-edicao-fib/24.jpg",
      },
      {
        id: 25,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-edicao-fib/25.jpg",
      },
      {
        id: 26,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-edicao-fib/26.jpg",
      },
      {
        id: 27,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-edicao-fib/27.jpg",
      },
      {
        id: 28,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-edicao-fib/28.jpg",
      },
      {
        id: 29,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-edicao-fib/29.jpg",
      },
      {
        id: 30,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-edicao-fib/30.jpg",
      },
      {
        id: 31,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-edicao-fib/31.jpg",
      },
      {
        id: 32,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-edicao-fib/32.jpg",
      },
    ],
    title: "MESA REDONDA COM CEOS EDIÇÃO FIB - MAIO DE 2024",
    description: `Como Dinamizar as Potencialidades locais para transformar a Economia Regional`,
    date: new Date("2024-05-01"),
  },
  {
    id: 10,
    imgSrc:
      "https://global-services-corporation.github.io/images/baw-jul-2024/3.jpg",
    mediaSrc: [
      {
        id: 1,
        type: "image",
        src: "https://global-services-corporation.github.io/images/baw-jul-2024/1.jpg",
      },
      {
        id: 2,
        type: "image",
        src: "https://global-services-corporation.github.io/images/baw-jul-2024/2.jpg",
      },
      {
        id: 3,
        type: "image",
        src: "https://global-services-corporation.github.io/images/baw-jul-2024/3.jpg",
      },
      {
        id: 4,
        type: "image",
        src: "https://global-services-corporation.github.io/images/baw-jul-2024/4.jpg",
      },
      {
        id: 5,
        type: "image",
        src: "https://global-services-corporation.github.io/images/baw-jul-2024/5.jpg",
      },
      {
        id: 6,
        type: "image",
        src: "https://global-services-corporation.github.io/images/baw-jul-2024/6.jpg",
      },
      {
        id: 7,
        type: "image",
        src: "https://global-services-corporation.github.io/images/baw-jul-2024/7.jpg",
      },
      {
        id: 8,
        type: "image",
        src: "https://global-services-corporation.github.io/images/baw-jul-2024/8.jpg",
      },
      {
        id: 9,
        type: "image",
        src: "https://global-services-corporation.github.io/images/baw-jul-2024/9.jpg",
      },
      {
        id: 10,
        type: "image",
        src: "https://global-services-corporation.github.io/images/baw-jul-2024/10.jpg",
      },
      {
        id: 11,
        type: "image",
        src: "https://global-services-corporation.github.io/images/baw-jul-2024/11.jpg",
      },
      {
        id: 12,
        type: "image",
        src: "https://global-services-corporation.github.io/images/baw-jul-2024/12.jpg",
      },
      {
        id: 13,
        type: "image",
        src: "https://global-services-corporation.github.io/images/baw-jul-2024/13.jpg",
      },
      {
        id: 14,
        type: "image",
        src: "https://global-services-corporation.github.io/images/baw-jul-2024/14.jpg",
      },
      {
        id: 15,
        type: "image",
        src: "https://global-services-corporation.github.io/images/baw-jul-2024/15.jpg",
      },
      {
        id: 16,
        type: "image",
        src: "https://global-services-corporation.github.io/images/baw-jul-2024/16.jpg",
      },
      {
        id: 17,
        type: "image",
        src: "https://global-services-corporation.github.io/images/baw-jul-2024/17.jpg",
      },
      {
        id: 18,
        type: "image",
        src: "https://global-services-corporation.github.io/images/baw-jul-2024/18.jpg",
      },
      {
        id: 19,
        type: "image",
        src: "https://global-services-corporation.github.io/images/baw-jul-2024/19.jpg",
      },
      {
        id: 20,
        type: "image",
        src: "https://global-services-corporation.github.io/images/baw-jul-2024/20.jpg",
      },
      {
        id: 21,
        type: "image",
        src: "https://global-services-corporation.github.io/images/baw-jul-2024/21.jpg",
      },
      {
        id: 22,
        type: "image",
        src: "https://global-services-corporation.github.io/images/baw-jul-2024/22.jpg",
      },
      {
        id: 23,
        type: "image",
        src: "https://global-services-corporation.github.io/images/baw-jul-2024/23.jpg",
      },
      {
        id: 24,
        type: "image",
        src: "https://global-services-corporation.github.io/images/baw-jul-2024/24.jpg",
      },
      {
        id: 25,
        type: "image",
        src: "https://global-services-corporation.github.io/images/baw-jul-2024/25.jpg",
      },
      {
        id: 26,
        type: "image",
        src: "https://global-services-corporation.github.io/images/baw-jul-2024/26.jpg",
      },
      {
        id: 27,
        type: "image",
        src: "https://global-services-corporation.github.io/images/baw-jul-2024/27.jpg",
      },
      {
        id: 28,
        type: "image",
        src: "https://global-services-corporation.github.io/images/baw-jul-2024/28.jpg",
      },
    ],
    title: "BUSINESS AFTER WORK - 8 DE JULHO DE 2024",
    description: `Líder Tech`,
    date: new Date("2024-07-08"),
  },
  {
    id: 11,
    imgSrc:
      "https://global-services-corporation.github.io/images/tda_parceiro_oficial.png",
    mediaSrc: [
      {
        id: 1,
        type: "image",
        src: "https://global-services-corporation.github.io/images/tda.png",
      },
      {
        id: 2,
        type: "video",
        src: "https://global-services-corporation.github.io/images/patrocinador_tda.mp4",
      },
    ],
    title:
      "GSC Reafirma Parceria com a TDA na 4ª Edição da Mesa Redonda com CEOs",
    description: `
     A Global Services Corporation (GSC), organizadora da prestigiada Mesa Redonda com CEOs, celebra a renovação da sua parceria estratégica com a https://www.tda.co.ao  para a 4ª edição deste evento. Este ano, a iniciativa centra-se no papel transformador da inovação na cadeia de produção, um tema que promete inspirar líderes a encontrar soluções criativas e a enfrentar os desafios do mercado.\n
	 TDA: Um Parceiro Estratégico na Mobilidade do Evento

	 Ao longo das edições da Mesa Redonda, a GSC tem contado com o apoio da https://www.tda.co.ao , que, mais uma vez, desempenha um papel fundamental como Parceiro Oficial de Mobilidade, prestando apoio ao transporte dos palestrantes e de figuras de destaque desta edição.
	 Além disso, a TDA marcará presença com uma exposição exclusiva dos seus modelos automóveis mais inovadores, enfatizando a importância da tecnologia e da sustentabilidade no setor automóvel angolano.

	 Mesa Redonda com CEOs: Um Espaço de Transformação Empresarial

	 A Mesa Redonda com CEOs, promovida pela GSC, é uma plataforma que incentiva a partilha de conhecimento e a colaboração entre líderes empresariais. O tema deste ano, "Inovação na Cadeia de Produção", sublinha a importância de integrar tecnologia e novos métodos para aumentar a competitividade das empresas angolanas no mercado global.

	 A parceria com a TDA reflete o compromisso da GSC em trabalhar com empresas que partilham a visão de um futuro mais inovador e sustentável. A TDA, com uma longa experiência no mercado, contribui ativamente para o sucesso do evento, não apenas como fornecedora de soluções de mobilidade, mas também como exemplo de uma marca que lidera com inovação no setor automóvel.
	 
	 A Colaboração GSC-TDA: Um Modelo de Sucesso
	 
	 Para a GSC, a renovação desta parceria com a TDA simboliza mais do que uma simples colaboração; é uma sinergia estratégica que fortalece o impacto da Mesa Redonda com CEOs. A experiência da TDA no mercado automóvel angolano, combinada com o foco da GSC em impulsionar debates de alto nível, eleva o evento a novos patamares.

	 Ao criar um ambiente propício para o intercâmbio de ideias entre executivos e especialistas, a GSC acredita que a Mesa Redonda com CEOs continuará a desempenhar um papel crucial no desenvolvimento económico de Angola.

	 Visite o site da site da https://www.tda.co.ao para saber mais sobre os seus produtos e serviços.
`,
    date: new Date("2024-11-16"),
  },
  {
    id: 12,
    imgSrc:
      "https://global-services-corporation.github.io/images/mesa-redonda/bgFormMR.jpg",
    mediaSrc: [
      {
        id: 1,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-nov-2024/1.jpeg",
      },
      {
        id: 2,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-nov-2024/2.jpeg",
      },
      {
        id: 3,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-nov-2024/3.jpeg",
      },
      {
        id: 4,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-nov-2024/4.jpeg",
      },
      {
        id: 5,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-nov-2024/5.jpeg",
      },
      {
        id: 6,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-nov-2024/6.jpeg",
      },
      {
        id: 7,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-nov-2024/7.jpeg",
      },
      {
        id: 8,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-nov-2024/8.jpeg",
      },
      {
        id: 9,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-nov-2024/9.jpeg",
      },
      {
        id: 10,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-nov-2024/10.jpeg",
      },
      {
        id: 11,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-nov-2024/11.jpeg",
      },
      {
        id: 12,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-nov-2024/12.jpeg",
      },
      {
        id: 13,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-nov-2024/13.jpeg",
      },
      {
        id: 14,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-nov-2024/14.jpeg",
      },
      {
        id: 15,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-nov-2024/15.jpeg",
      },
      {
        id: 16,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-nov-2024/16.jpeg",
      },
      {
        id: 17,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-nov-2024/17.jpeg",
      },
      {
        id: 18,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-nov-2024/18.jpeg",
      },
      {
        id: 19,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-nov-2024/19.jpeg",
      },
      {
        id: 20,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-nov-2024/20.jpeg",
      },
      {
        id: 21,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-nov-2024/21.jpeg",
      },
      {
        id: 22,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-nov-2024/22.jpeg",
      },
      {
        id: 23,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-nov-2024/23.jpeg",
      },
      {
        id: 24,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-nov-2024/24.jpeg",
      },
      {
        id: 25,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-nov-2024/25.jpeg",
      },
      {
        id: 26,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-nov-2024/26.jpeg",
      },
      {
        id: 27,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-nov-2024/27.jpeg",
      },
      {
        id: 28,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-nov-2024/28.jpeg",
      },
      {
        id: 29,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-nov-2024/29.jpeg",
      },
      {
        id: 30,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-nov-2024/30.jpeg",
      },
      {
        id: 31,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-nov-2024/31.jpeg",
      },
      {
        id: 32,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-nov-2024/32.jpeg",
      },
      {
        id: 33,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-nov-2024/33.jpeg",
      },
      {
        id: 34,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-nov-2024/34.jpeg",
      },
      {
        id: 35,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-nov-2024/35.jpeg",
      },
      {
        id: 36,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-nov-2024/36.jpeg",
      },
      {
        id: 37,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-nov-2024/37.jpeg",
      },
      {
        id: 38,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-nov-2024/38.jpeg",
      },
      {
        id: 39,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-nov-2024/39.jpeg",
      },
      {
        id: 40,
        type: "image",
        src: "https://global-services-corporation.github.io/images/mr-nov-2024/40.jpeg",
      },
    ],
    title: "MESA REDONDA COM CEOS - NOVEMBRO DE 2024",
    description: `A 4ª Edição da Mesa Redonda Com CEOs, promovida pela Global Academy, já ocorreu, reunindo líderes empresariais e executivos de destaque do mercado angolano. O evento proporcionou um espaço valioso para discussões sobre os desafios e oportunidades que as empresas enfrentam no contexto econômico atual.

Durante a edição, tópicos como inovação, transformação digital, sustentabilidade e estratégias empresariais foram discutidos, com foco em como esses elementos impactam o crescimento das empresas em Angola e no cenário global. A Mesa Redonda também foi uma oportunidade de networking, com a participação de CEOs de grandes empresas e especialistas que compartilharam suas experiências e visões sobre o futuro dos negócios.`,
    date: new Date("2024-11-28"),
  },
  {
    id: 13,
    imgSrc:
      "https://global-services-corporation.github.io/images/baw-jan-2025/assets/flyer.jpg",
    mediaSrc: [
      {
        id: 1,
        type: "image",
        src: "https://global-services-corporation.github.io/images/baw-jan-2025/1.jpg",
      },
      {
        id: 2,
        type: "image",
        src: "https://global-services-corporation.github.io/images/baw-jan-2025/2.jpg",
      },
      {
        id: 3,
        type: "image",
        src: "https://global-services-corporation.github.io/images/baw-jan-2025/3.jpg",
      },
      {
        id: 4,
        type: "image",
        src: "https://global-services-corporation.github.io/images/baw-jan-2025/4.jpg",
      },
      {
        id: 5,
        type: "image",
        src: "https://global-services-corporation.github.io/images/baw-jan-2025/5.jpg",
      },
      {
        id: 6,
        type: "image",
        src: "https://global-services-corporation.github.io/images/baw-jan-2025/6.jpg",
      },
      {
        id: 7,
        type: "image",
        src: "https://global-services-corporation.github.io/images/baw-jan-2025/7.jpg",
      },
      {
        id: 8,
        type: "image",
        src: "https://global-services-corporation.github.io/images/baw-jan-2025/8.jpg",
      },
      {
        id: 9,
        type: "image",
        src: "https://global-services-corporation.github.io/images/baw-jan-2025/9.jpg",
      },
      {
        id: 10,
        type: "image",
        src: "https://global-services-corporation.github.io/images/baw-jan-2025/10.jpg",
      },
      {
        id: 11,
        type: "image",
        src: "https://global-services-corporation.github.io/images/baw-jan-2025/11.jpg",
      },
      {
        id: 12,
        type: "image",
        src: "https://global-services-corporation.github.io/images/baw-jan-2025/12.jpg",
      },
      {
        id: 13,
        type: "image",
        src: "https://global-services-corporation.github.io/images/baw-jan-2025/13.jpg",
      },
      {
        id: 14,
        type: "image",
        src: "https://global-services-corporation.github.io/images/baw-jan-2025/14.jpg",
      },
      {
        id: 15,
        type: "image",
        src: "https://global-services-corporation.github.io/images/baw-jan-2025/15.jpg",
      },
      {
        id: 16,
        type: "image",
        src: "https://global-services-corporation.github.io/images/baw-jan-2025/16.jpg",
      },
    ],
    title: "BUSINESS AFTER WORK 2025 - WELCOME TOGETHER",
    description: `A Global Services Corporation teve o prazer de anunciar o primeiro evento do ano: Business After Work – Welcome Together. Este encontro exclusivo foi realizado em 06 de Fevereiro de 2025, marcando o início de um ano repleto de novas oportunidades, conexões valiosas e colaboração estratégica. O Welcome Together foi cuidadosamente planejado para proporcionar um ambiente descontraído e inspirador, onde líderes, profissionais e parceiros poderão fortalecer relacionamentos, trocar ideias inovadoras e explorar novas possibilidades de negócios.`,
    date: new Date("2025-02-06"),
  },
  {
    id: 14,
    imgSrc:
      "https://global-services-corporation.github.io/images/seminario-sme-2025/3.jpeg",
    mediaSrc: [
      {
        id: 1,
        type: "image",
        src: "https://global-services-corporation.github.io/images/seminario-sme-2025/1.jpeg",
      },
      {
        id: 2,
        type: "image",
        src: "https://global-services-corporation.github.io/images/seminario-sme-2025/2.jpeg",
      },
      {
        id: 3,
        type: "image",
        src: "https://global-services-corporation.github.io/images/seminario-sme-2025/3.jpeg",
      },
      {
        id: 4,
        type: "image",
        src: "https://global-services-corporation.github.io/images/seminario-sme-2025/4.jpeg",
      },
      {
        id: 5,
        type: "image",
        src: "https://global-services-corporation.github.io/images/seminario-sme-2025/5.jpeg",
      },
      {
        id: 6,
        type: "image",
        src: "https://global-services-corporation.github.io/images/seminario-sme-2025/6.jpeg",
      },
      {
        id: 7,
        type: "image",
        src: "https://global-services-corporation.github.io/images/seminario-sme-2025/7.jpeg",
      },
      {
        id: 8,
        type: "image",
        src: "https://global-services-corporation.github.io/images/seminario-sme-2025/8.jpeg",
      },
      {
        id: 9,
        type: "image",
        src: "https://global-services-corporation.github.io/images/seminario-sme-2025/9.jpeg",
      },
      {
        id: 10,
        type: "image",
        src: "https://global-services-corporation.github.io/images/seminario-sme-2025/10.jpeg",
      },
      {
        id: 11,
        type: "image",
        src: "https://global-services-corporation.github.io/images/seminario-sme-2025/11.jpeg",
      },
      {
        id: 12,
        type: "image",
        src: "https://global-services-corporation.github.io/images/seminario-sme-2025/12.jpeg",
      },
      {
        id: 13,
        type: "image",
        src: "https://global-services-corporation.github.io/images/seminario-sme-2025/13.jpeg",
      },
      {
        id: 14,
        type: "image",
        src: "https://global-services-corporation.github.io/images/seminario-sme-2025/14.jpeg",
      },
      {
        id: 15,
        type: "image",
        src: "https://global-services-corporation.github.io/images/seminario-sme-2025/15.jpeg",
      },
    ],
    title: `Seminário Nacional Sobre Migrações | CO-ORGANIZADOR OFICIAL`,
    description: `Foi com este espírito, que a Global Services Corporation junto da ENAMI “Escola Nacional de Migração” Co-Organizou o I Seminário Nacional Sobre Migrações.

A Abertura ofícial do evento em representação de SE Director Geral do SME, Dr. José Baptista Jr., foi feita pelo Director Geral Adjunto SE Comissário de Migração, Dr. Tomé João Kuanga. 

Da Global Services Corporation, a apresentação foi feita pelo Dr. Tomás Brito Administrador, que em sua explanação, reafirmou o compromisso da Global Services Corporation em contribuir no desenvolvimento das instituições Angolanas, sendo que este evento faz parte de uma visão contida em seu plano estratégico, com o programa Líder do Futuro.

O Seminário foi enriquecedor e assentou-se em dois eixos temáticos: 

1 - FLUXOS MIGRATÓRIOS E GESTÃO DE FRONTEIRAS;
2 - INTEGRAÇÃO DOS IMIGRANTES NO CONTEXTO ANGOLANO.

O Seminário contou com a participação de vários órgãos de Defesa e Segurança Nacional, com destaque da ACITE | Academia de Ciências Sociais e Tecnologias, ISCPC Instituto Superior de Ciências Policiais e Criminais, Polícia de
Guarda Fronteira de Angola, Ministério da Administração do Território e Reforma do Estado, entre outros. 

Destacam-se entre os convidados, instituições de alto nível do mercado internacional:

A Deloitte Angola, foi representada pelo seu PCA Dr. José Barata, e da UCAN Dr. Carlos Rosado de Carvalho, Professor e Jornalista em matérias econômicas.

O Seminário trouxe novos elementos para reflexão e tomada de decisão 
dos Políticos e dos Responsáveis do referido Orgão Ministerial.
`,
    date: new Date("2025-04-05"),
  },
  {
    id: 15,
    imgSrc:
      "https://global-services-corporation.github.io/images/feira-empreendedor/gsc-partner.jpeg",
    mediaSrc: [
      {
        id: 1,
        type: "image",
        src: "https://global-services-corporation.github.io/images/feira-empreendedor/2.jpeg",
      },
      {
        id: 2,
        type: "image",
        src: "https://global-services-corporation.github.io/images/feira-empreendedor/3.jpeg",
      },
      {
        id: 3,
        type: "image",
        src: "https://global-services-corporation.github.io/images/feira-empreendedor/4.jpeg",
      },
      {
        id: 4,
        type: "image",
        src: "https://global-services-corporation.github.io/images/feira-empreendedor/5.jpeg",
      },
      {
        id: 5,
        type: "image",
        src: "https://global-services-corporation.github.io/images/feira-empreendedor/6.jpeg",
      },
      {
        id: 6,
        type: "image",
        src: "https://global-services-corporation.github.io/images/feira-empreendedor/7.jpeg",
      },
      {
        id: 7,
        type: "image",
        src: "https://global-services-corporation.github.io/images/feira-empreendedor/8.jpeg",
      },
      {
        id: 8,
        type: "image",
        src: "https://global-services-corporation.github.io/images/feira-empreendedor/9.jpeg",
      },
      {
        id: 9,
        type: "image",
        src: "https://global-services-corporation.github.io/images/feira-empreendedor/10.jpeg",
      },
      {
        id: 10,
        type: "image",
        src: "https://global-services-corporation.github.io/images/feira-empreendedor/11.jpeg",
      },
      {
        id: 11,
        type: "image",
        src: "https://global-services-corporation.github.io/images/feira-empreendedor/12.jpeg",
      },
    ],
    title: `FEIRA DO EMPREENDEDOR DE LUANDA - PARCEIRO OFICIAL`,
    description: `Foi com grande honra e profundo sentido de patriotismo que a Global Services Corporation participou na co-organização da Feira do Empreendedor de Luanda, realizada de 24 a 27 de Abril.
A emblemática Baía de Luanda foi o palco de encontro de inúmeros empreendedores, num evento imperdível para todos os que procuram novas oportunidades de negócios, networking e aprendizagem.
O evento contou com a presença de distintas personalidades do Executivo Angolano, com especial destaque para Sua Excelência o Ministro de Estado para a Coordenação Económica, Dr. José de Lima Massano, que teve a honra de proferir o discurso de abertura oficial. 
Empreendedores, investidores e profissionais de diversos setores, marcaram igualmente presença, num ambiente de partilha de experiências e promoção de novas parcerias, impulsionando assim a criação de projetos inovadores.
Na qualidade de anfitrião, Sua Excelência Luís Manuel da Fonseca Nunes, Governador Provincial de Luanda, deu as boas-vindas a todos os participantes e incentivou o investimento contínuo na capital do país.
Agradecemos, de forma especial, ao Governo da Província de Luanda, pela consideração e pelo convite que muito nos honrou.
`,
    date: new Date("2025-05-01"),
  },
  {
    id: 16,
    imgSrc:
      "https://global-services-corporation.github.io/images/conteudo-local-jul-2025/24.png",
    mediaSrc: [
      {
        id: 1,
        type: "image",
        src: "https://global-services-corporation.github.io/images/conteudo-local-jul-2025/1.png",
      },
      {
        id: 2,
        type: "image",
        src: "https://global-services-corporation.github.io/images/conteudo-local-jul-2025/2.png",
      },
      {
        id: 3,
        type: "image",
        src: "https://global-services-corporation.github.io/images/conteudo-local-jul-2025/3.png",
      },
      {
        id: 4,
        type: "image",
        src: "https://global-services-corporation.github.io/images/conteudo-local-jul-2025/4.png",
      },
      {
        id: 5,
        type: "image",
        src: "https://global-services-corporation.github.io/images/conteudo-local-jul-2025/5.png",
      },
      {
        id: 6,
        type: "image",
        src: "https://global-services-corporation.github.io/images/conteudo-local-jul-2025/6.png",
      },
      {
        id: 7,
        type: "image",
        src: "https://global-services-corporation.github.io/images/conteudo-local-jul-2025/7.png",
      },
      {
        id: 8,
        type: "image",
        src: "https://global-services-corporation.github.io/images/conteudo-local-jul-2025/8.png",
      },
      {
        id: 9,
        type: "image",
        src: "https://global-services-corporation.github.io/images/conteudo-local-jul-2025/9.png",
      },
      {
        id: 10,
        type: "image",
        src: "https://global-services-corporation.github.io/images/conteudo-local-jul-2025/10.png",
      },
      {
        id: 11,
        type: "image",
        src: "https://global-services-corporation.github.io/images/conteudo-local-jul-2025/11.png",
      },
      {
        id: 12,
        type: "image",
        src: "https://global-services-corporation.github.io/images/conteudo-local-jul-2025/12.png",
      },
      {
        id: 13,
        type: "image",
        src: "https://global-services-corporation.github.io/images/conteudo-local-jul-2025/13.png",
      },
      {
        id: 14,
        type: "image",
        src: "https://global-services-corporation.github.io/images/conteudo-local-jul-2025/14.png",
      },
      {
        id: 15,
        type: "image",
        src: "https://global-services-corporation.github.io/images/conteudo-local-jul-2025/15.png",
      },
      {
        id: 16,
        type: "image",
        src: "https://global-services-corporation.github.io/images/conteudo-local-jul-2025/16.png",
      },
      {
        id: 17,
        type: "image",
        src: "https://global-services-corporation.github.io/images/conteudo-local-jul-2025/17.png",
      },
      {
        id: 20,
        type: "image",
        src: "https://global-services-corporation.github.io/images/conteudo-local-jul-2025/20.png",
      },
      {
        id: 21,
        type: "image",
        src: "https://global-services-corporation.github.io/images/conteudo-local-jul-2025/21.png",
      },
      {
        id: 22,
        type: "image",
        src: "https://global-services-corporation.github.io/images/conteudo-local-jul-2025/22.png",
      },
      {
        id: 23,
        type: "image",
        src: "https://global-services-corporation.github.io/images/conteudo-local-jul-2025/23.png",
      },
      {
        id: 24,
        type: "image",
        src: "https://global-services-corporation.github.io/images/conteudo-local-jul-2025/24.png",
      },
      {
        id: 25,
        type: "image",
        src: "https://global-services-corporation.github.io/images/conteudo-local-jul-2025/25.png",
      },
      {
        id: 26,
        type: "image",
        src: "https://global-services-corporation.github.io/images/conteudo-local-jul-2025/26.png",
      },
      {
        id: 27,
        type: "image",
        src: "https://global-services-corporation.github.io/images/conteudo-local-jul-2025/27.png",
      },
      {
        id: 28,
        type: "image",
        src: "https://global-services-corporation.github.io/images/conteudo-local-jul-2025/28.png",
      },
      {
        id: 29,
        type: "image",
        src: "https://global-services-corporation.github.io/images/conteudo-local-jul-2025/29.png",
      },
      {
        id: 30,
        type: "image",
        src: "https://global-services-corporation.github.io/images/conteudo-local-jul-2025/30.png",
      },
      {
        id: 31,
        type: "image",
        src: "https://global-services-corporation.github.io/images/conteudo-local-jul-2025/31.png",
      },
      {
        id: 32,
        type: "image",
        src: "https://global-services-corporation.github.io/images/conteudo-local-jul-2025/32.png",
      },
      {
        id: 33,
        type: "image",
        src: "https://global-services-corporation.github.io/images/conteudo-local-jul-2025/33.png",
      },
      {
        id: 34,
        type: "image",
        src: "https://global-services-corporation.github.io/images/conteudo-local-jul-2025/34.png",
      },
      {
        id: 35,
        type: "image",
        src: "https://global-services-corporation.github.io/images/conteudo-local-jul-2025/35.png",
      },
      {
        id: 36,
        type: "image",
        src: "https://global-services-corporation.github.io/images/conteudo-local-jul-2025/36.png",
      },
      {
        id: 37,
        type: "image",
        src: "https://global-services-corporation.github.io/images/conteudo-local-jul-2025/37.png",
      },
      {
        id: 38,
        type: "image",
        src: "https://global-services-corporation.github.io/images/conteudo-local-jul-2025/38.png",
      },
      {
        id: 39,
        type: "image",
        src: "https://global-services-corporation.github.io/images/conteudo-local-jul-2025/39.png",
      },
      {
        id: 40,
        type: "image",
        src: "https://global-services-corporation.github.io/images/conteudo-local-jul-2025/40.png",
      },
      {
        id: 41,
        type: "image",
        src: "https://global-services-corporation.github.io/images/conteudo-local-jul-2025/41.png",
      },
      {
        id: 42,
        type: "image",
        src: "https://global-services-corporation.github.io/images/conteudo-local-jul-2025/42.png",
      },
      {
        id: 44,
        type: "image",
        src: "https://global-services-corporation.github.io/images/conteudo-local-jul-2025/44.png",
      },
      {
        id: 45,
        type: "image",
        src: "https://global-services-corporation.github.io/images/conteudo-local-jul-2025/45.png",
      },
      {
        id: 46,
        type: "image",
        src: "https://global-services-corporation.github.io/images/conteudo-local-jul-2025/46.png",
      },
      {
        id: 48,
        type: "image",
        src: "https://global-services-corporation.github.io/images/conteudo-local-jul-2025/48.png",
      },
      {
        id: 50,
        type: "image",
        src: "https://global-services-corporation.github.io/images/conteudo-local-jul-2025/50.png",
      },
      {
        id: 51,
        type: "image",
        src: "https://global-services-corporation.github.io/images/conteudo-local-jul-2025/51.png",
      },
      {
        id: 52,
        type: "image",
        src: "https://global-services-corporation.github.io/images/conteudo-local-jul-2025/52.png",
      },
      {
        id: 53,
        type: "image",
        src: "https://global-services-corporation.github.io/images/conteudo-local-jul-2025/53.png",
      },
      {
        id: 54,
        type: "image",
        src: "https://global-services-corporation.github.io/images/conteudo-local-jul-2025/54.png",
      },
      {
        id: 55,
        type: "image",
        src: "https://global-services-corporation.github.io/images/conteudo-local-jul-2025/55.png",
      },
      {
        id: 56,
        type: "image",
        src: "https://global-services-corporation.github.io/images/conteudo-local-jul-2025/56.png",
      },
      {
        id: 57,
        type: "image",
        src: "https://global-services-corporation.github.io/images/conteudo-local-jul-2025/57.png",
      },
      {
        id: 58,
        type: "image",
        src: "https://global-services-corporation.github.io/images/conteudo-local-jul-2025/58.png",
      },
      {
        id: 59,
        type: "image",
        src: "https://global-services-corporation.github.io/images/conteudo-local-jul-2025/59.png",
      },
      {
        id: 60,
        type: "image",
        src: "https://global-services-corporation.github.io/images/conteudo-local-jul-2025/60.png",
      },
      {
        id: 62,
        type: "image",
        src: "https://global-services-corporation.github.io/images/conteudo-local-jul-2025/62.png",
      },
      {
        id: 63,
        type: "image",
        src: "https://global-services-corporation.github.io/images/conteudo-local-jul-2025/63.png",
      },
      {
        id: 70,
        type: "image",
        src: "https://global-services-corporation.github.io/images/conteudo-local-jul-2025/70.png",
      },
      {
        id: 71,
        type: "image",
        src: "https://global-services-corporation.github.io/images/conteudo-local-jul-2025/71.png",
      },
    ],
    title: `FÓRUM SOBRE: O IMPACTO DO SECTOR FINANCEIRO NO CONTEÚDO LOCAL`,
    description: `O Fórum sobre O Impacto do Setor Financeiro no Conteúdo Local é um desdobramento do debate realizado durante a 5ª Plenária da 4ª Edição da Mesa Redonda com CEOs. O encontro reuniu alguns dos principais intervenientes da banca e do conteúdo local angolano, tendo como tema: Como a Tecnologia pode Promover a Integração da Cadeia de Valor do Mercado Financeiro e da Indústria de Petróleo e Gás?
O Fórum sobre o Impacto do Sector Financeiro no Conteúdo Local, será uma oportunidade para discutir, fomentar e dinamizar boas práticas entre o sector financeiro e as empresas do conteúdo local angolano.  Visite o site da site da https://conteudolocal.globalsc.ao para saber mais.
`,
    date: new Date("2025-07-17"),
  },
];
