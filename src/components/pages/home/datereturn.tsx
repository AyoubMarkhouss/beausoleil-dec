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

export function Datereturn({ endDate }: { endDate?: string }) {
  const [date, setDate] = React.useState<Date>();
  const { toGoDateInfo } = useTravelStore();
  React.useEffect(() => {
    if (date) {
      toGoDateInfo(format(date, "yyyy-MM-dd"));
    }
  }, [date, toGoDateInfo]);
  return (
    <Popover>
      <PopoverTrigger className="h-full" asChild>
        <Button
          variant="ghost"
          className={cn(
            "w-[280px] h-full justify-evenly text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          {date || endDate ? (
            <CalendarIcon size={20} className="stroke-orangeboom" />
          ) : (
            <CalendarIcon size={20} color="gray" />
          )}
          {date ? (
            format(date, "PPP")
          ) : endDate ? (
            <span>{format(new Date(endDate), "PPP")}</span>
          ) : (
            <span className="">Date de retour</span>
          )}{" "}
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
