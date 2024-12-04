"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { IoArrowForwardOutline } from "react-icons/io5";
import { FaBusSimple } from "react-icons/fa6";
import { LuExternalLink } from "react-icons/lu";
import { FaMapMarker } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { IoMdAlert } from "react-icons/io";
import { TbArrowsExchange } from "react-icons/tb";
import { HiTicket } from "react-icons/hi2";
import { FaShoppingBag } from "react-icons/fa";
import { FaSuitcaseRolling } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { useInView } from "framer-motion";
import Searchbarupdate from "@/components/pages/results/Searchbarupdate";
const Page = ({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  const router = useRouter();
  const ref = useRef(null);
  const secRef = useRef(null);
  const thirdRef = useRef(null);

  const isInView = useInView(ref, { once: true });
  const secIsInView = useInView(secRef, { once: true });
  const thirdIsInView = useInView(thirdRef, { once: true });
  const goingTo = searchParams?.to as string;
  const comingFrom = searchParams?.from as string;
  const goDateStart = searchParams?.goDate as string;
  const toDateStart = searchParams?.toDate as string;
  return (
    <>
      <div className="flex  lg:h-64 items-center justify-center bg-textblue">
        <Searchbarupdate
          go={goingTo}
          from={comingFrom}
          startDate={goDateStart}
          endDate={toDateStart}
        />
      </div>
      <div className="max-w-6xl flex flex-col gap-10 pt-10 mx-auto">
        <div
          ref={ref}
          style={{
            transform: isInView ? "none" : "translateY(200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          className="flex items-center justify-between"
        >
          <h1 className="scroll-m-20 font-bold text-3xl tracking-tight">
            Consulter les options de billet
          </h1>
          <div className="flex gap-3 items-center">
            <div>
              <p className="text-end scroll-m-20 text-2xl font-semibold tracking-tight">
                MAD 112.3
              </p>
              <small className="text-sm font-medium leading-none">
                1 adulte, Essentiel
              </small>
            </div>
            <Button
              onClick={() => router.push("/confirm")}
              className="cabinet group rounded-xl col-span-2 h-14 flex items-center justify-center bg-bigtitle text-lg text-white hover:bg-textblue"
            >
              Continuer <IoArrowForwardOutline />
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-10">
          <div
            ref={secRef}
            style={{
              transform: secIsInView ? "none" : "translateY(200px)",
              opacity: secIsInView ? 1 : 0,
              transition: "all 1.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s",
            }}
            className="border flex flex-col gap-6 h-fit p-4 border-bigtitle/25 rounded-xl shadow-md shadow-bigtitle/5"
          >
            <small className="text-xl font-semibold leading-none">
              Sélection du trajet
            </small>
            <div className="flex relative flex-col gap-24">
              {/* start from here */}
              <div className="flex gap-4">
                <p className="text-sm font-semibold leading-none">6h30</p>
                <FaBusSimple className="text-bigtitle" />
                <div>
                  <small className="text-xs font-semibold">CASABLANCA</small>
                  <p className="text-sm text-muted-foreground">
                    Casablanca (Centre) - Arrêt de bus
                  </p>
                  <Link
                    className="border-b w-fit border-b-bigtitle text-bigtitle flex items-center gap-1"
                    href="/"
                  >
                    Carte <LuExternalLink className="size-4" />
                  </Link>
                </div>
              </div>
              <div className="absolute h-[9.2rem] w-[2px] left-[3.67rem] top-4 bg-zinc-400/40" />
              <div className="flex items-center gap-4 left-[3.2rem] bg-white absolute top-24">
                <FaClock className="text-zinc-400" />
                <p className="">3 heures 45 minutes</p>
              </div>
              {/* end we end up here */}
              <div className="flex gap-4">
                <p className="text-sm font-semibold leading-none">6h30</p>
                <FaMapMarker className="text-bigtitle" />
                <div>
                  <small className="text-xs font-semibold">Marrakech</small>
                  <p className="text-sm text-muted-foreground">
                    Casablanca (Centre) - Arrêt de bus
                  </p>
                  <Link
                    className="border-b w-fit border-b-bigtitle text-bigtitle flex items-center gap-1"
                    href="/"
                  >
                    Carte <LuExternalLink className="size-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            ref={thirdRef}
            style={{
              transform: thirdIsInView ? "none" : "translateY(200px)",
              opacity: thirdIsInView ? 1 : 0,
              transition: "all 1.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.9s",
            }}
            className="border p-4 border-bigtitle/25 rounded-xl h-fit shadow-md shadow-bigtitle/5"
          >
            <div className="border-none">
              <p className="hover:no-underline font-bold text-bigtitle">
                Flexibilité et conditions
              </p>
              <div className="flex flex-col gap-4">
                <div>
                  <small className="uppercase text-muted-foreground text-sm font-medium leading-none">
                    Remboursements et échanges
                  </small>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 pt-3">
                      <IoMdAlert className="size-4 text-bigtitle" />
                      <p className="text-sm">Aucun remboursement.</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <TbArrowsExchange className="size-4 text-bigtitle" />
                      <p className="text-sm">
                        {" "}
                        Échange de date ou d&apos;heure jusqu&apos;à{" "}
                        <span className="font-bold">12 heures</span> avant le
                        départ{" "}
                        <span className="font-bold">
                          {" "}
                          - frais de 5,00 dirhams
                        </span>{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="">
                  <small className="uppercase text-bigtitle text-sm font-medium leading-none">
                    Conditions d&apos;embarquement
                  </small>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 pt-3">
                      <FaBusSimple className="size-4 text-bigtitle" />
                      <p className="text-sm">
                        {" "}
                        Billets{" "}
                        <span className="font-bold">
                          affichés sur téléphone
                        </span>{" "}
                        ou imprimés et{" "}
                        <span className="font-bold">
                          une pièce d&apos;identité avec photo
                        </span>{" "}
                        requise{" "}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <HiTicket className="size-4 text-bigtitle" />
                      <p className="text-sm">
                        {" "}
                        Livraison des billets{" "}
                        <span className="font-bold">par email</span>{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <small className="uppercase text-bigtitle text-sm font-medium leading-none">
                    Bagages
                  </small>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 pt-3">
                      <FaShoppingBag className="size-4 text-bigtitle" />
                      <p className="text-sm">
                        {" "}
                        <span className="font-bold">1</span> bagage à main{" "}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaShoppingBag className="size-4 text-bigtitle" />
                      <p className="text-sm">
                        {" "}
                        Max{" "}
                        <span className="font-bold">
                          40cm x 50cm x 16cm
                        </span>{" "}
                        (15,7 po x 19,7 po x 6,3 po) par bagage à main{" "}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaSuitcaseRolling className="size-4 text-bigtitle" />
                      <p className="text-sm">
                        {" "}
                        <span className="font-bold">1</span> bagage enregistré -{" "}
                        <span className="font-bold">gratuit</span>{" "}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaSuitcaseRolling className="size-4 text-bigtitle" />
                      <p className="text-sm">
                        Max <span className="font-bold">20kg</span> (44.1lbs)
                        par bagage enregistré
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
