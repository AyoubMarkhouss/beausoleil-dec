"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { WiSunrise } from "react-icons/wi";
import { MdSunny } from "react-icons/md";
import { BsStars } from "react-icons/bs";
import { IoMoon } from "react-icons/io5";
import useTimer from "@/hooks/use-timer";
import { Skeleton } from "@/components/ui/skeleton";
export function Filterscheckbox() {
  const loading = useTimer(1000); // Use the hook with a delay in milliseconds

  return (
    <div className="flex flex-col gap-5">
      {loading ? (
        <>
          <div className="flex items-center space-x-3">
            <Checkbox id="tôt" />
            <WiSunrise size={25} className="fill-yellow-400" />
            <label
              htmlFor="tôt"
              className="text-sm flex justify-between items-center w-full font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              <span>Tôt</span>{" "}
              <span className="text-sm text-muted-foreground">Before 6am</span>
            </label>
          </div>
          <div className="flex items-center space-x-3">
            <Checkbox id="midi" />
            <MdSunny size={25} className="fill-orange-400" />
            <label
              htmlFor="midi"
              className="text-sm flex items-center justify-between w-full font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              <span>Midi</span>{" "}
              <span className="text-sm text-muted-foreground">6am - 11am</span>
            </label>
          </div>
          <div className="flex items-center space-x-3">
            <Checkbox id="nuit" />
            <BsStars size={25} className="fill-purple-950" />
            <label
              htmlFor="nuit"
              className="text-sm items-center flex justify-between w-full font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              <span>Nuit</span>{" "}
              <span className="text-sm text-muted-foreground">After 5pm</span>
            </label>
          </div>
          <div className="flex items-center space-x-3">
            <Checkbox id="tard" />
            <IoMoon size={25} className="fill-bigtitle" />
            <label
              htmlFor="tard"
              className="text-sm items-center flex justify-between w-full font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              <span>Tard</span>{" "}
              <span className="text-sm text-muted-foreground">After 5pm</span>
            </label>
          </div>
        </>
      ) : (
        <>
          {Array.from({ length: 4 }).map((_, i) => (
            <div className="flex items-center justify-between" key={i}>
              <div className="flex items-center gap-5">
                <Skeleton className="w-4 h-4" />
                <Skeleton className="w-52 h-4" />
              </div>
              <Skeleton className="w-24 h-4" />
            </div>
          ))}
        </>
      )}
    </div>
  );
}
