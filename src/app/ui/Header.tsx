"use client";

import Link from "next/link";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { RiMenu3Line } from "react-icons/ri";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="z-50 h-20 bg-[#11005A] w-full lg:px-24 max-lg:px-8 py-2 flex justify-between items-center shadow-md shadow-[#00000040]">
      <a href="/">
        <img
          src={"/logo-white.png"}
          alt="GSC Logotipo"
          className="max-lg:w-16 w-14"
        />
      </a>
      <div className="flex justify-between items-center gap-12">
        <nav className="hidden lg:flex px-7 py-2 w-full">
          <ul className="flex items-center w-full text-white font-semibold gap-8">
            <li>
              <Link
                className="p-2 hover:bg-[#FFffff]/10 rounded cursor-pointer hover:text-[#72E8A8] transition-colors duration-100"
                href="/">
                Início
              </Link>
            </li>
            <li>
              <Link
                className="p-2 hover:bg-[#FFffff]/10 rounded cursor-pointer hover:text-[#72E8A8] transition-colors duration-100"
                href="/events">
                Eventos
              </Link>
            </li>
            <li>
              <Link
                className="p-2 hover:bg-[#FFffff]/10 rounded cursor-pointer hover:text-[#72E8A8] transition-colors duration-100"
                href="/academy">
                Academia
              </Link>
            </li>
            <li>
              <Link
                className="p-2 hover:bg-[#FFffff]/10 rounded cursor-pointer hover:text-[#72E8A8] transition-colors duration-100"
                href="/blog">
                Blog
              </Link>
            </li>
            {/*<li>
              <Link
                className="p-2 hover:bg-[#FFffff]/10 rounded cursor-pointer hover:text-[#72E8A8] transition-colors duration-10 w-full"
                href="/insurance">
                Seguros
              </Link>
            </li>*/}
            <li>
              <Link
                className="p-2 hover:bg-[#FFffff]/10 rounded cursor-pointer hover:text-[#72E8A8] transition-colors duration-100"
                href="/contact-us">
                Contactos
              </Link>
            </li>
          </ul>
        </nav>

        <a
          href="https://mesaredonda.globalsc.ao"
          target="_blank"
          className="hidden lg:flex text-white font-semibold bg-[#72E8A8] hover:bg-white hover:text-[#72E8A8] py-2 px-6 rounded-md transition-colors duration-200">
          Participar
        </a>

        <button
          className="lg:hidden text-white"
          onClick={toggleSidebar}>
          <RiMenu3Line className="text-xl" />
        </button>

        <div
          className={`fixed top-0 right-0 h-full w-2/3 bg-[#11005A] px-6 py-7 transition-transform duration-300 ${
            isSidebarOpen ? "translate-x-0" : "translate-x-full"
          }`}>
          <button
            className="text-white mb-8"
            onClick={toggleSidebar}>
            <IoClose size={30} />
          </button>

          <ul className="text-white font-semibold flex flex-col gap-6 w-full">
            <li className="w-full flex">
              <Link
                className="p-2 hover:bg-[#FFffff]/10 rounded cursor-pointer hover:text-[#72E8A8] transition-colors duration-10 w-full"
                href="/">
                Início
              </Link>
            </li>
            <li className="w-full flex">
              <Link
                className="p-2 hover:bg-[#FFffff]/10 rounded cursor-pointer hover:text-[#72E8A8] transition-colors duration-10 w-full"
                href="/events">
                Eventos
              </Link>
            </li>
            <li className="w-full flex">
              <a
                className="p-2 hover:bg-[#FFffff]/10 rounded cursor-pointer hover:text-[#72E8A8] transition-colors duration-100 w-full"
                href="/academy">
                Academia
              </a>
            </li>
            <li className="w-full flex">
              <Link
                className="p-2 hover:bg-[#FFffff]/10 rounded cursor-pointer hover:text-[#72E8A8] transition-colors duration-10 w-full"
                href="/blog">
                Blog
              </Link>
            </li>

            {/*<li className="w-full flex">
              <Link
                className="p-2 hover:bg-[#FFffff]/10 rounded cursor-pointer hover:text-[#72E8A8] transition-colors duration-10 w-full"
                href="/insurance">
                Seguros
              </Link>
            </li>*/}
            <li className="w-full flex">
              <a
                className="p-2 hover:bg-[#FFffff]/10 rounded cursor-pointer hover:text-[#72E8A8] transition-colors duration-100 w-full"
                href="/contact-us">
                Contactos
              </a>
            </li>
            <li className="w-full flex">
              <a
                href="https://businessafterwork.globalsc.ao"
                target="_blank"
                className="text-white font-semibold bg-[#72E8A8] hover:bg-white hover:text-[#72E8A8] py-2 px-6 rounded-md flex items-center justify-center transition-colors duration-200 w-full">
                Participar
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
