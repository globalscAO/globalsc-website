import { ReactNode } from "react";

export function transformarTextoComLinks(texto: string): ReactNode {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const partes = texto.split(urlRegex);
  
    return partes.map((parte, index) =>
      urlRegex.test(parte) ? (
        <a
          key={index}
          href={parte}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline">
          TDA - Paixão Automóvel
        </a>
      ) : (
        <span key={index}>{parte}</span>
      )
    );
  }