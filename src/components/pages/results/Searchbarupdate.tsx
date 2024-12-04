import React, { useState } from "react";
import { ComboboxDemo1 } from "@/components/pages/home/combobox1";
import { ComboboxDemo2 } from "@/components/pages/home/combobox2";
import { DateComponent } from "@/components/pages/home/date";
import { Button } from "@/components/ui/button";
import { IoPersonOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { Datereturn } from "@/components/pages/home/datereturn";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { MdLocalAirport } from "react-icons/md";
import { Checkbox } from "@/components/ui/checkbox";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { useTravelStore } from "@/utils/zustand/city";
import Link from "next/link";

const Searchbarupdate = ({
  from,
  go,
  startDate,
  endDate,
}: {
  go: string;
  from: string;
  startDate: string;
  endDate: string;
}) => {
  console.log({ from: from, go: go });
  const [passengers, setPassengers] = useState(1);
  const { startFrom, goTo } = useTravelStore();
  return (
    <div className="px-5 py-5 md:px-10 lg:px-20 lg:py-0">
      <div className="grid grid-cols-2 shadow-xl shadow-slate-800 lg:grid-cols-7">
        <div className="flex h-24 w-full items-center border-r rounded-l-lg bg-white">
          <ComboboxDemo1 />
        </div>
        <div className="flex h-24 w-full items-center justify-center border-r bg-white">
          <ComboboxDemo2 />
        </div>
        <div className="flex h-24 w-full items-center justify-center border-r bg-white">
          <DateComponent goDateStart={startDate} />
        </div>
        <div className="flex h-24 w-full items-center justify-center border-r bg-white">
          <Datereturn endDate={endDate} />
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
                Perferendis, animi eius error laudantium unde minima quaerat. At
                beatae in, mollitia, dolor minus iusto error accusamus
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <Link
          href={`/results?from=${startFrom}&to=${goTo}`}
          className="col-span-2 lg:col-span-1"
        >
          <Button className="cabinet group flex h-24 w-full items-center justify-center rounded-r-lg bg-bigtitle text-lg text-white hover:bg-textblue rounded-l-none">
            <FaSearch size={20} className="mr-5 group-hover:fill-orangeboom" />
            Rechercher
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Searchbarupdate;
