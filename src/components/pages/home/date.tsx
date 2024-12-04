"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useTravelStore } from "@/utils/zustand/city";

export function DateComponent({ goDateStart }: { goDateStart?: string }) {
  const [date, setDate] = React.useState<Date>();

  const { setGoDateInfo } = useTravelStore();
  React.useEffect(() => {
    if (date) {
      setGoDateInfo(format(date, "yyyy-MM-dd"));
    }
  }, [date, setGoDateInfo]);
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          className={cn(
            "w-[280px] h-full justify-evenly text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          {date || goDateStart ? (
            <CalendarIcon size={20} className="stroke-orangeboom" />
          ) : (
            <CalendarIcon size={20} color="gray" />
          )}

          {date ? (
            format(date, "PPP")
          ) : goDateStart ? (
            <span>{format(new Date(goDateStart), "PPP")}</span>
          ) : (
            <span className="">Date</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto bg-white p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
