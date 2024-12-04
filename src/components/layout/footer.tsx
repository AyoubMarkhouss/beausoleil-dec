import Link from "next/link";
import React from "react";
import { FaBus } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" mx-auto px-4 pt-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
      <div className="row-gap-10 mb-8 grid gap-16 lg:grid-cols-7">
        <div className="md:max-w-md lg:col-span-2">
          <div className="flex items-center justify-center">
            <FaBus className="fill-bigtitle" size={25} />
            <h1 className="cabinet pl-1 pt-1 text-xl text-bigtitle">LOGO</h1>
          </div>
        </div>
        <div className="row-gap-8 grid grid-cols-2 gap-5 md:grid-cols-5 lg:col-span-5 items-center">
          <div className="flex justify-center items-center">
            <p className="cabinet text-center text-sm font-semibold tracking-wide text-bigtitle flex transform cursor-pointer items-center gap-x-3 transition-transform duration-500 ease-in-out hover:scale-125 hover:text-orangeboom">
              <Link href="/">Accueil</Link>
            </p>
          </div>
          <div className="flex justify-center items-center">
            <p className="cabinet text-center text-sm font-semibold tracking-wide text-bigtitle flex transform cursor-pointer items-center gap-x-3 transition-transform duration-500 ease-in-out hover:scale-125 hover:text-orangeboom">
              <Link href="/service">Services</Link>
            </p>
          </div>
          <div className="flex justify-center items-center">
            <p className="cabinet text-center text-sm font-semibold tracking-wide text-bigtitle flex transform cursor-pointer items-center gap-x-3 transition-transform duration-500 ease-in-out hover:scale-125 hover:text-orangeboom">
              <Link href="/parc">Notre parc</Link>
            </p>
          </div>
          <div className="flex justify-center items-center">
            <p className="cabinet text-center text-sm font-semibold tracking-wide text-bigtitle flex transform cursor-pointer items-center gap-x-3 transition-transform duration-500 ease-in-out hover:scale-125 hover:text-orangeboom">
              <Link href="/customizedTravel">Voyage sur mesure</Link>
            </p>
          </div>
          <div className="flex justify-center items-center">
            <p className="cabinet text-center text-sm font-semibold tracking-wide text-bigtitle flex transform cursor-pointer items-center gap-x-3 transition-transform duration-500 ease-in-out hover:scale-125 hover:text-orangeboom">
              <Link href="/contact">Contact</Link>
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between border-t  pb-10 pt-5 sm:flex-row">
        <p className="text-sm text-gray-600">
          Â© Copyright 2024 Beausoleil. All rights reserved.
        </p>
        <div className="mt-4 flex items-center space-x-4 sm:mt-0">
          <Link
            href="/"
            className="hover:text-deep-purple-accent-400 text-gray-500 transition-colors duration-300"
          >
            <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
              <circle cx="15" cy="15" r="4" />
              <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
            </svg>
          </Link>
          <Link
            href="/"
            className="hover:text-deep-purple-accent-400 text-gray-500 transition-colors duration-300"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
              <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
