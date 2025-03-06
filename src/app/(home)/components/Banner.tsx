"use client";

import { useState } from "react";
import HomeCarousel from "./HomeCarousel";
import Link from "next/link";
import ChooseForm from "./ChooseForm";

export default function Banner() {
  const [isOpenChooseForm, setOpenChooseForm] = useState(false);

  /* const handleClick = () => {
    setOpenChooseForm(true);
  }; */

  const handleClose = () => {
    setOpenChooseForm(false);
  };

  return (
    <section className="relative">
      <HomeCarousel />

      <div className="w-full flex absolute justify-center bottom-0 mx-auto z-40">
        {/*<button
					onClick={handleClick}
					className="bg-[#11005A] hover:bg-[#11005ab4] rounded-t-2xl rounded-se-none lg:px-10 py-5 max-lg:px-5 text-white font-bold w-1/4 max-lg:w-1/2 max-lg:rounded-none max-lg:text-sm"
				>
					Solicitar Proposta
				</button>*/}
        <Link
          href="#contactus"
          className="flex justify-center items-center bg-[#11005A] hover:bg-[#11005ab4] rounded-t-2xl lg:px-10 py-5 max-lg:px-5 text-white font-bold w-1/4 max-lg:w-full max-lg:rounded-none max-lg:text-sm">
          Contacte-nos
        </Link>
      </div>

      {isOpenChooseForm && <ChooseForm handleClose={handleClose} />}
    </section>
  );
}
