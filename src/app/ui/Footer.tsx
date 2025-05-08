import Link from "next/link";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { VscSend } from "react-icons/vsc";

const Footer: React.FC = () => {
  return (
    <footer className="w-full lg:px-24 lg:py-14 max-lg:p-6 flex flex-col items-center justify-between max-lg:justify-center lg:gap-14 max-lg:gap-5 bg-gradient-to-t from-[#090031] to-[#140264]">
      <div className="w-full flex max-lg:flex-col items-center justify-between max-lg:justify-center max-w-7xl">
        <div className="flex flex-col gap-9 text-white w-72 max-lg:items-center max-lg:mb-4">
          <img
            src={"/logo-white.png"}
            alt="Logo"
            className="w-24 max-lg:w-32"
          />

          <p className="max-lg:hidden">Empresa angolana de multisserviços.</p>

          <div className="flex gap-2 max-lg:hidden">
            <a
              href="https://www.facebook.com/profile.php?id=100094301594638"
              target="_blank">
              <FaFacebookSquare className="text-2xl" />
            </a>

            <a
              href="https://www.instagram.com/globalservicescorporation"
              target="_blank">
              <FaInstagramSquare className="text-2xl" />
            </a>

            <a
              href="https://www.linkedin.com/company/global-service-corporations/"
              target="_blank">
              <ImLinkedin className="text-2xl" />
            </a>
          </div>
        </div>

        <div className="h-full max-lg:h-fit text-white flex max-lg:flex-col-reverse gap-9 max-lg:gap-6 w-2/3 justify-between max-lg:justify-center max-lg:items-center max-lg:w-full">
          <ul className="font-bold h-full  flex flex-col gap-5 max-lg:hidden">
            <li>
              <Link href="/">Início</Link>
            </li>
            <li>
              <Link href="/events">Eventos</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
          </ul>

          <ul className="h-full flex flex-col gap-5 max-lg:h-fit max-lg:text-sm">
            <li className="font-bold">Contacte-nos</li>
            <li>
              <Link href="tel:+244222731031">(+244) 222 731 031</Link>
            </li>
            <li>
              <Link href="tel:+244941064919">(+244) 941 064 919</Link>
            </li>
          </ul>

          <div className="h-full flex-col gap-5 hidden">
            <h1>Destaques</h1>

            <div className="grid grid-cols-3 grid-rows-2 gap-2">
              <img
                src="https://source.unsplash.com/random/1"
                alt="1"
                className="bg-white object-cover w-12 h-12"
              />
              <img
                src="https://source.unsplash.com/random/2"
                alt="2"
                className="bg-white object-cover w-12 h-12"
              />
              <img
                src="https://source.unsplash.com/random/3"
                alt="3"
                className="bg-white object-cover w-12 h-12"
              />
              <img
                src="https://source.unsplash.com/random/4"
                alt="4"
                className="bg-white object-cover w-12 h-12"
              />
              <img
                src="https://source.unsplash.com/random/5"
                alt="5"
                className="bg-white object-cover w-12 h-12"
              />
              <img
                src="https://source.unsplash.com/random/6"
                alt="6"
                className="bg-white object-cover w-12 h-12"
              />
            </div>
          </div>

          <div className="h-full flex flex-col gap-5 max-lg:items-center max-lg:w-full max-lg:h-fit">
            <h1>Subscreva à nossa newsletter</h1>

            <form className="flex max-lg:w-full bg-white rounded-md">
              <input
                type="email"
                placeholder="Insira o seu email..."
                required
                className="py-2 px-3 outline-none text-black max-lg:w-full"
              />
              <button
                type="submit"
                className="bg-[#0056E1] rounded-r-md text-white placeholder:text-sm placeholder:text-[#69676770] py-2 px-3">
                <VscSend />
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="w-full text-center text-white text-xs">
        <p>
          &copy; {new Date().getFullYear()} Global Services Corporation. Todos
          os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
