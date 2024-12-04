"use client";
import Ticketsfilters from "@/components/pages/results/Ticketsfilters";
import useTimer from "@/hooks/use-timer";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { SlBadge } from "react-icons/sl";
import { MdAttachMoney } from "react-icons/md";
import { BsLightningChargeFill } from "react-icons/bs";
import { PiSunHorizonBold } from "react-icons/pi";
import { MdNightlight } from "react-icons/md";
import { useFilterStore } from "@/utils/zustand/filterCities";
import { IconType } from "react-icons/lib";
import Searchbarupdate from "@/components/pages/results/Searchbarupdate";

const Page = ({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  const loading = useTimer();
  const [checkedButton, setCheckedButton] = useState<number>(0);
  const goingTo = searchParams?.to as string;
  const comingFrom = searchParams?.from as string;
  const goDateStart = searchParams?.goDate as string;
  const toDateStart = searchParams?.toDate as string;
  const { setState } = useFilterStore();
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
      {!loading && <div className="loader" />}
      <div className="flex justify-between items-center py-5 px-5 lg:px-20 border-b">
        <h1 className="cabinet text-xl">Résultats (7)</h1>
        <div className="flex items-center gap-6">
          <small className="text-xs text-muted-foreground">SORT BY</small>
          <div className="flex gap-1">
            {listButton.map((g, i) => (
              <button
                onClick={() => {
                  setCheckedButton(i);
                  setState(g.label);
                }}
                className={cn(
                  "text-[#891f00] font-semibold px-3 flex items-center gap-1 py-1 rounded-full",
                  checkedButton === i ? "bg-orangeboom/20" : ""
                )}
                key={i}
              >
                {checkedButton === i && <g.icon className="text-orangeboom" />}
                {g.french}
              </button>
            ))}
          </div>
        </div>
      </div>
      <Ticketsfilters goingTo={goingTo} comingFrom={comingFrom} />
    </>
  );
};

export default Page;

const listButton: {
  label: "recommended" | "cheapest" | "fastest" | "earliest" | "latest";
  icon: IconType;
  french: string;
}[] = [
  { label: "recommended", icon: SlBadge, french: "recommandé" },
  { label: "cheapest", icon: MdAttachMoney, french: "le moins cher" },
  { label: "fastest", icon: BsLightningChargeFill, french: "le plus rapide" },
  { label: "earliest", icon: PiSunHorizonBold, french: "le plus tôt" },
  { label: "latest", icon: MdNightlight, french: "le plus tard" },
];
