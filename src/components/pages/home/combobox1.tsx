"use client";

import { Check } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { MdOutlinePlace } from "react-icons/md";
import { useTravelStore } from "@/utils/zustand/city";
import { fakeTravel } from "@/fakeData";
import { getUniqueTravelsByFrom } from "@/functions/unique";
import { useSearchParams } from "next/navigation";

export function ComboboxDemo1() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const { setStartFrom } = useTravelStore();
  const searchParams = useSearchParams();
  const getFrom = searchParams.get("from");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          role="combobox"
          aria-expanded={open}
          variant="ghost"
          className="flex h-full w-full justify-evenly"
        >
          {value || getFrom ? (
            <MdOutlinePlace size={23} className="fill-orangeboom" />
          ) : (
            <MdOutlinePlace size={23} color="gray" />
          )}
          {getFrom
            ? getUniqueTravelsByFrom(fakeTravel).find(
                (framework) => framework.from === getFrom
              )?.from
            : value
            ? getUniqueTravelsByFrom(fakeTravel).find(
                (framework) => framework.from === value
              )?.from
            : "Votre emplacement"}
        </Button>
      </PopoverTrigger>
      <PopoverContent side="bottom" className="w-[270px] bg-white p-0">
        <Command>
          <CommandInput placeholder="Rechercher des lieux..." />
          <CommandList>
            <CommandEmpty>lieux pas Trouver.</CommandEmpty>
            <CommandGroup>
              {getUniqueTravelsByFrom(fakeTravel).map((framework) => (
                <CommandItem
                  className="cursor-pointer border-b py-4"
                  key={framework.from}
                  value={framework.from}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setStartFrom(currentValue);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4 stroke-bigtitle",
                      value === framework.from ? "opacity-100" : "opacity-0"
                    )}
                  />
                  <MdOutlinePlace size={23} className="mr-3 fill-bigtitle" />
                  {framework.from}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
