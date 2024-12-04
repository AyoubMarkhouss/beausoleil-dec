"use client";
import React from "react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { useState } from "react";
import { FaBus } from "react-icons/fa";
import HamburgerIcon from "../icons/HamburgerIcon";

const Header = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState<boolean>(false);

  const toggleHamburger = (): void => {
    setHamburgerOpen(!hamburgerOpen);
  };
  return (
    <>
      <div>
        <div className="flex justify-between px-10 py-4 text-white lg:px-20">
          <div className="flex items-center justify-center">
            <FaBus className="fill-bigtitle" size={25} />
            <h1 className="cabinet pl-1 pt-1 text-xl text-bigtitle">LOGO</h1>
          </div>
          <div className="hidden lg:flex">
            <ul className="flex gap-x-10 text-xl text-bigtitle">
              <li>
                <Link
                  href="/"
                  className="cabinet flex transform cursor-pointer items-center gap-x-3 text-lg transition-transform duration-500 ease-in-out hover:scale-125 hover:text-orangeboom"
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  href="/service"
                  className="cabinet flex transform cursor-pointer items-center gap-x-3 text-lg transition-transform duration-500 ease-in-out hover:scale-125 hover:text-orangeboom"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/parc"
                  className="cabinet flex transform cursor-pointer items-center gap-x-3 text-lg transition-transform duration-500 ease-in-out hover:scale-125 hover:text-orangeboom"
                >
                  Notre parc
                </Link>
              </li>
              <li>
                <Link
                  href="/customizedTravel"
                  className="cabinet flex transform cursor-pointer items-center gap-x-3 text-lg transition-transform duration-500 ease-in-out hover:scale-125 hover:text-orangeboom"
                >
                  Voyage sur mesure
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="cabinet flex transform cursor-pointer items-center gap-x-3 text-lg transition-transform duration-500 ease-in-out hover:scale-125 hover:text-orangeboom"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="hidden lg:flex">
            <ul className="flex gap-x-6 text-xl text-bigtitle">
              <li>
                <Link
                  href="/"
                  className="cabinet flex transform cursor-pointer items-center gap-x-3 text-lg transition-transform duration-500 ease-in-out hover:scale-125 hover:text-orangeboom"
                >
                  Langue
                </Link>
              </li>
              <li>
                <SignedOut>
                  <SignInButton>
                    <a className="cabinet flex transform cursor-pointer items-center gap-x-3 rounded-full bg-orangeboom px-5 text-lg text-white transition-transform duration-500 ease-in-out hover:scale-125">
                      Se connecter
                    </a>
                  </SignInButton>
                </SignedOut>
                <SignedIn>
                  <UserButton />
                </SignedIn>
              </li>
            </ul>
          </div>

          <div className="container lg:hidden">
            <HamburgerIcon
              isOpen={hamburgerOpen}
              toggleHamburger={toggleHamburger}
            />

            <nav className={hamburgerOpen ? "showMenuNav" : "hideMenuNav"}>
              <ul>
                <li>
                  <SignedOut>
                    <SignInButton>
                      <a className="cabinet flex transform cursor-pointer items-center gap-x-3 text-3xl transition-transform duration-500 ease-in-out hover:scale-125 hover:text-orangeboom">
                        Se connecter
                      </a>
                    </SignInButton>
                  </SignedOut>
                  <SignedIn>
                    <UserButton />
                  </SignedIn>
                </li>
                <li>
                  <Link href="/" className="cabinet text-3xl">
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link href="/customizedTravel" className="cabinet text-3xl">
                    Voyage personnalisé
                  </Link>
                </li>
                <li>
                  <Link href="/parc" className="cabinet text-3xl">
                    Notre parc
                  </Link>
                </li>
                <li>
                  <Link href="/" className="cabinet text-3xl">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
