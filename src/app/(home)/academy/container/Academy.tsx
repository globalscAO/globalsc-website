import Link from "next/link";

export default function Academy() {
  return (
    <section className="flex flex-col items-center py-16 px-8 bg-primary/45">
      <div className="max-w-6xl w-full h-96 rounded-2xl bg-cover bg-center text-white bg-[url('https://global-services-corporation.github.io/images/baw-fev-2023/5.jpg')]">
        <div className="bg-gradient-to-r gap-4 px-12 h-full w-full rounded-2xl flex flex-col justify-center from-primary to-primary/25 py-8 lg:py-4">
          <div className="lg:w-2/3 max-lg:text-center">
            <h2 className="text-3xl max-lg:text-xl font-bold">
              Global Academy – O Conhecimento que Transforma
            </h2>

            <p className="text-sm">
              Nossos cursos são projetados para capacitar profissionais e
              líderes com conhecimentos estratégicos e práticos, alinhados às
              demandas do mercado global.
            </p>
          </div>

          <Link
            href={"https://academy.globalsc.ao"}
            target="_blank"
            className="bg-white lg:w-fit text-center px-6 py-2 border hover:bg-transparent hover:text-white transition-colors duration-300 rounded-md text-primary">
            Ver mais
          </Link>
        </div>
      </div>
    </section>
  );
}
