import React from "react";
import { IoTicketOutline } from "react-icons/io5";

const BookTicket = () => {
  return (
    <section className="md:my-14 bg-textblue py-6 mb-10 md:mb-14 md:px-10">
      <div className="flex flex-col items-center justify-center space-y-8 p-4  md:p-10 lg:flex-row lg:justify-between lg:space-y-0">
        <div className="flex flex-col gap-3">
          <h1 className="cabinet flex gap-2 text-start text-4xl md:text-5xl text-white lg:text-left">
            Voyagez dans le confort
          </h1>
          <p className="text-lg md:text-xl text-gray-400">
            Profitez d&apos;un trajet fluide et pittoresque jusqu&apos;à votre
            destination. Réservez votre billet et voyagez avec style !
          </p>
        </div>

        <button className="cabinet flex h-20 cursor-pointer items-center gap-2 bg-orangeboom px-8 py-3 text-lg text-white transition-transform duration-500 ease-in-out hover:scale-125">
          Réservez votre billet
          <IoTicketOutline />
        </button>
      </div>
    </section>
  );
};

export default BookTicket;
