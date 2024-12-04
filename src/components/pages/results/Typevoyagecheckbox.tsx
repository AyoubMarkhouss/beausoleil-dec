"use client";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Skeleton } from "@/components/ui/skeleton";
import useTimer from "@/hooks/use-timer";
import { FaRoad } from "react-icons/fa";
import { MdLocalAirport } from "react-icons/md";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { Button } from "@/components/ui/button";

export function Typevoyagecheckbox() {
  const loading = useTimer(1000);

  return (
    <div className="flex flex-col gap-5">
      {loading ? (
        <>
          <RadioGroup defaultValue="comfortable">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="default" id="r1" />
              <Label className="flex items-center gap-2" htmlFor="r1">
                <FaRoad size={25} className="fill-slate-900" />
                Voyage simple
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="comfortable" id="r2" />
              <Label className="flex items-center gap-10" htmlFor="r2">
                <div className="flex items-center gap-2">
                  <MdLocalAirport size={25} className="fill-bigtitle" />
                  Transfert
                </div>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <BsFillQuestionCircleFill className="shrink-0 size-4 fill-zinc-500" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent className="backdrop-blur-sm bg-bigtitle p-3 rounded-xl">
                      <p className="text-white w-60 text-justify">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Perferendis, animi eius error laudantium unde
                        minima quaerat. At beatae in, mollitia, dolor minus
                        iusto error accusamus
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Label>
            </div>
          </RadioGroup>
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
