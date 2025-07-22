import { ReactNode } from "react";

export function transformarTextoComLinks(texto: string): ReactNode {
  const urlRegex = /(https:\/\/www\.[^\s]+)/g;
  const urlRegex2 = /(https?:\/\/[^\s]*globalsc\.ao[^\s]*)/g;

  // Juntar os dois regex em um só, mantendo as capturas separadas
  const combinedRegex = /(https:\/\/www\.[^\s]+|https?:\/\/[^\s]*globalsc\.ao[^\s]*)/g;

  const partes = texto.split(combinedRegex);

  return partes.map((parte, index) => {
    if (urlRegex.test(parte)) {
      return (
        <a
          key={index}
          href={parte}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          TDA - Paixão Automóvel
        </a>
      );
    } else if (urlRegex2.test(parte)) {
      return (
        <a
          key={index}
          href={parte}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          Global Services Corporation
        </a>
      );
    } else {
      return <span key={index}>{parte}</span>;
    }
  });
}
