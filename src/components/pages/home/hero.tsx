"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense, useState } from "react";
import { ComboboxDemo1 } from "./combobox1";
import { ComboboxDemo2 } from "./combobox2";
import { DateComponent } from "./date";
import { Datereturn } from "./datereturn";
import { IoPersonOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { useTravelStore } from "@/utils/zustand/city";
import { MdLocalAirport } from "react-icons/md";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { BsFillQuestionCircleFill } from "react-icons/bs";

const Hero = () => {
  const [passengers, setPassengers] = useState(1);
  const { startFrom, goTo, goDateInfo, toDateInfo } = useTravelStore();

  return (
    <div className="mb-20">
      <div className="flex h-96 w-full items-center justify-center">
        <h1 className="cabinet absolute text-center text-4xl text-white md:text-5xl lg:text-6xl">
          Découvrez le monde avec nous!
        </h1>
        <div className="relative -z-20 h-full object-cover">
          <Image
            alt="banner"
            src="/Images/Banner.jpg"
            height={2500}
            width={2500}
            className="h-full object-cover"
          />
          <div className="absolute left-0 top-0 h-full w-full bg-black/20"></div>
        </div>
      </div>
      <div className="-mt-20 px-5 md:-mt-20 md:px-10 lg:-mt-10 lg:px-20">
        <div className="grid grid-cols-2 shadow-xl rounded-l-lg lg:grid-cols-7">
          <div className="flex h-24 w-full items-center border-r rounded-l-lg bg-white">
            <Suspense>
              <ComboboxDemo1 />
            </Suspense>
          </div>
          <div className="flex h-24 w-full items-center justify-center border-r bg-white">
            <Suspense>
              <ComboboxDemo2 />
            </Suspense>
          </div>
          <div className="flex h-24 w-full items-center justify-center border-r bg-white">
            <DateComponent />
          </div>
          <div className="flex h-24 w-full items-center justify-center border-r bg-white">
            <Datereturn />
          </div>
          <div className="col-span-2 flex h-24 w-full items-center justify-evenly bg-white md:col-span-1">
            <IoPersonOutline size={20} className="stroke-orangeboom" />

            <div className="flex items-center space-x-2">
              <input
                type="number"
                className="w-20 border border-gray-300 py-2 text-center md:w-20"
                value={passengers}
                onChange={(e) => setPassengers(Number(e.target.value))}
                placeholder="Number of passengers"
                min="0"
                required
              />
            </div>
          </div>
          <div className="col-span-2 gap-2 border-l flex h-24 w-full items-center px-4 bg-white md:col-span-1">
            <MdLocalAirport size={25} className="fill-bigtitle" />
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Transfert
              </label>
            </div>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <BsFillQuestionCircleFill className="shrink-0 size-4 fill-zinc-500" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent className="backdrop-blur-sm text-white w-60 text-justify bg-bigtitle border border-white/50 p-3 rounded-xl">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Perferendis, animi eius error laudantium unde minima quaerat.
                  At beatae in, mollitia, dolor minus iusto error accusamus
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <Link
            href={
              startFrom && goTo && goDateInfo
                ? toDateInfo
                  ? `/results?from=${startFrom}&to=${goTo}&goDate=${goDateInfo}&toDate=${toDateInfo}`
                  : `/results?from=${startFrom}&to=${goTo}&goDate=${goDateInfo}`
                : "/"
            }
            className="col-span-2 lg:col-span-1"
          >
            <Button className="cabinet group flex h-24 w-full items-center justify-center rounded-r-lg bg-bigtitle text-lg text-white hover:bg-textblue rounded-l-none">
              <FaSearch
                size={20}
                className="mr-5 group-hover:fill-orangeboom"
              />
              Rechercher
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
