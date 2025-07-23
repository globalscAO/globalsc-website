import Image from "next/image";
import React from "react";

export default function AboutUs () {
  return (
    <section className="lg:p-24 max-lg:p-12 bg-[#11005a] flex justify-center">
      <div className="flex items-center justify-around max-w-7xl">
        <div className="flex flex-col text-white gap-2 w-2/5 max-lg:w-full ">
          <h1 className="font-semibold text-3xl max-lg:text-base">Sobre nós</h1>
          <div className="text-sm">
            <p>
              Global Services Corporation, empresa angolana de multisserviços,
              com sede na Rua Dr. Aleixo de Abreu, Ingombotas, Luanda, Angola.
              Actuamos em três áreas fundamentais nomeadamente:
            </p>
            <u className="no-underline">
              <li>Gestão de Riscos (Seguros);</li>
              <li>Consultoria Empresarial;</li>
              <li>Formação do Capital Humano.</li>
            </u>
            <p>
              O nosso objectivo fundamental é contribuir no alcance dos
              objectivos estrátegicos dos nossos clientes, oferecendo Serviços
              de Consultoria.
            </p>
          </div>
        </div>

        <Image
          src="https://global-services-corporation.github.io/images/aboutUs.jpg"
          alt="About Us"
          className="rounded-3xl w-5/12 object-cover max-lg:hidden"
        />
      </div>
    </section>
  );
};

