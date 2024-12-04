"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useInView } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import {
  FaClock,
  FaMapMarker,
  FaShoppingBag,
  FaSuitcaseRolling,
} from "react-icons/fa";
import { FaArrowRight, FaBusSimple } from "react-icons/fa6";
import { HiMiniUsers, HiTicket } from "react-icons/hi2";
import { IoMdAlert } from "react-icons/io";
import { LuExternalLink } from "react-icons/lu";
import { TbArrowsExchange } from "react-icons/tb";
const Page = () => {
  const ref = useRef(null);
  const secRef = useRef(null);
  const thirdRef = useRef(null);
  const fourRef = useRef(null);
  // const fiveRef = useRef(null);
  // const sixRef = useRef(null);
  const isInView = useInView(ref, { once: true });
  const secIsInView = useInView(secRef, { once: true });
  const thirdIsInView = useInView(thirdRef, { once: true });
  // const fourIsInView = useInView(fourRef, { once: true });
  // const fiveIsInView = useInView(fiveRef, { once: true });
  // const sixIsInView = useInView(sixRef, { once: true });

  const [radioValue, setRadioValue] = useState<string>("online");
  console.log(radioValue);
  const router = useRouter();

  return (
    <div className="grid grid-cols-2 py-20 gap-10 max-w-6xl mx-auto">
      <div className="flex flex-col gap-4">
        <div
          ref={ref}
          style={{
            transform: isInView ? "none" : "translateY(200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          className="border h-fit border-bigtitle/25 rounded-xl shadow-md shadow-bigtitle/5"
        >
          <div className="border-b p-4">
            <p className="font-bold text-bigtitle">Passager principal</p>
            <p className="text-sm text-muted-foreground">Adulte</p>
          </div>
          <div className="grid grid-cols-2 gap-4 p-4">
            <div>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Prénom"
              />
            </div>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Nom"
            />
            <select
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option className="font-sans" selected>
                Type d&apos;identification
              </option>
              <option className="font-sans" value="US">
                Permis de conduire
              </option>
              <option className="font-sans" value="CA">
                Carte d&apos;identité nationale
              </option>
              <option className="font-sans" value="FR">
                Passeport
              </option>
            </select>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Numéro d'identification"
            />
          </div>
        </div>
        <div
          ref={thirdRef}
          style={{
            transform: thirdIsInView ? "none" : "translateY(200px)",
            opacity: thirdIsInView ? 1 : 0,
            transition: "all 1.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s",
          }}
          className="border h-fit border-bigtitle/25 rounded-xl space-y-3 pb-4 shadow-md shadow-bigtitle/5"
        >
          <p className="border-b p-4">Vos coordonnées</p>
          <div className="flex shadow-sm shadow-zinc-200 items-center rounded-md m-4">
            <span className="border border-r-0 leading-7 [&:not(:first-child)]:mt-6 rounded-l-md px-3 h-full py-[.33rem]">
              +212
            </span>
            <input
              type="text"
              className="bg-gray-50 rounded-l-none h-10 focus-visible:ring-0 shadow-none border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Numéro de mobile"
            />
          </div>
          <div className="px-4">
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="E-mail"
            />
          </div>
          <div className="flex px-4 items-center space-x-2">
            <Checkbox id="terms" />
            <Label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Recevez les dernières offres et conseils de voyage directement
              dans votre boîte de réception.
            </Label>
          </div>
        </div>
        <div
          ref={fourRef}
          style={{
            transform: isInView ? "none" : "translateY(200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          className="border border-bigtitle/25 rounded-xl h-fit shadow-md shadow-bigtitle/5"
        >
          <p className="p-4 border-b border-bigtitle/25 font-bold text-bigtitle">
            Sélectionnez le type de paiement.
          </p>
          <RadioGroup
            onValueChange={(e) => setRadioValue(e)}
            defaultValue="online"
          >
            <div className="flex items-center border-b border-bigtitle/25 space-x-2 p-4">
              <RadioGroupItem value="online" id="r1" />
              <Label htmlFor="r1">Paiement en ligne.</Label>
            </div>
            <div className="flex items-center space-x-2 p-4">
              <RadioGroupItem value="offline" id="r2" />
              <Label htmlFor="r2">Réservation</Label>
            </div>
          </RadioGroup>
        </div>
        <div className="border p-4 border-bigtitle/25 rounded-xl h-fit shadow-md shadow-bigtitle/5">
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
                      Max <span className="font-bold">
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
                      Max <span className="font-bold">20kg</span> (44.1lbs) par
                      bagage enregistré
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div
          ref={secRef}
          style={{
            transform: secIsInView ? "none" : "translateY(200px)",
            opacity: secIsInView ? 1 : 0,
            transition: "all 1.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s",
          }}
          className="border h-fit border-bigtitle/25 rounded-xl shadow-md shadow-bigtitle/5"
        >
          <Accordion defaultValue="item-1" type="single" collapsible>
            <AccordionItem className="border-b-0" value="item-1">
              <AccordionTrigger className="hover:no-underline p-4">
                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                  Votre sélection de voyage{" "}
                </h4>
              </AccordionTrigger>
              <AccordionContent className="border-t border-bigtitle/25">
                <div className="flex items-center justify-between px-5 py-3">
                  <p>LOGO</p>
                  <span className="text-bigtitle bg-bigtitle/20 px-2 py-1 rounded-full">
                    Aller–samedi 2 novembre
                  </span>
                </div>
                <div className="flex flex-col gap-6 h-fit p-4">
                  <small className="text-sm font-semibold leading-none">
                    Sélection de voyage
                  </small>
                  <div className="flex relative flex-col gap-24">
                    {/* start from here */}
                    <div className="flex gap-4">
                      <p className="text-sm font-semibold leading-none">6h30</p>
                      <FaBusSimple className="text-bigtitle" />
                      <div>
                        <small className="text-xs font-semibold">
                          CASABLANCA
                        </small>
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
                    <div className="absolute h-[8.7rem] w-[2px] left-[3.6rem] top-4 bg-zinc-400/40" />
                    <div className="flex items-center gap-4 left-[3.28rem] bg-white absolute top-24">
                      <FaClock className="text-zinc-400" />
                      <p className="">3 heures 45 minutes</p>
                    </div>
                    {/* end we end up here */}
                    <div className="flex gap-4">
                      <p className="text-sm font-semibold leading-none">6h30</p>
                      <FaMapMarker className="text-bigtitle" />
                      <div>
                        <small className="text-xs font-semibold">
                          Marrakech
                        </small>
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
                <div className="flex items-center">
                  <div className="flex items-center gap-1 px-4">
                    <FaBusSimple className="text-bigtitle" />
                    <p className="text-sm font-medium leading-none">Autobus</p>
                  </div>
                  <div className="flex items-center gap-1 px-4">
                    <FaClock className="text-bigtitle" />
                    <p className="text-sm font-medium leading-none">3 H</p>
                  </div>
                  <div className="flex items-center gap-1 px-4">
                    <HiMiniUsers className="text-bigtitle" />
                    <p className="text-sm font-medium leading-none">
                      1 passager
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div
          ref={thirdRef}
          style={{
            transform: thirdIsInView ? "none" : "translateY(200px)",
            opacity: thirdIsInView ? 1 : 0,
            transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          className="border h-fit border-bigtitle/25 rounded-xl shadow-md shadow-bigtitle/5"
        >
          <Accordion
            defaultValue="item-1"
            className="px-4"
            type="single"
            collapsible
          >
            <AccordionItem value="item-1">
              <AccordionTrigger className="hover:no-underline ">
                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                  Résumé des frais de voyage
                </h4>
              </AccordionTrigger>
              <AccordionContent>
                <div>
                  <div className="border-b py-8 flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-1">
                        <p className="font-bold">Casablanca</p>
                        <FaArrowRight />
                        <p className="font-bold">Marrakech</p>
                      </div>
                      <p className="font-bold">Passager 1 : Adulte</p>
                    </div>
                    <div>
                      <p className="text-xl text-bigtitle font-bold">
                        MAD 87.71
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-4">
                    <p className="font-extrabold">Total partiel</p>
                    <p className="font-extrabold">MAD 87.71</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <div className="flex justify-between items-center p-4 bg-textblue rounded-b-xl">
            <div>
              <div>
                <small className="text-sm font-bold leading-none text-white">
                  Total
                </small>
                <p className="text-sm text-muted-foreground text-white">
                  Taxes et frais inclus
                </p>
              </div>
            </div>
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-white">
              MAD 109.61
            </h3>
          </div>
        </div>
        <button
          onClick={() => router.push("/finalMove")}
          className="flex items-center w-full justify-center bg-orangeboom font-bold gap-2 hover:bg-orange-400/95 text-white py-3 rounded-lg"
        >
          {radioValue === "online" ? "Continuer vers le paiement" : "Réserver"}{" "}
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Page;
