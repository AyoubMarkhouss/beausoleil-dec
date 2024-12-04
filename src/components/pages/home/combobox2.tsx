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

export function ComboboxDemo2() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const { setGoTo } = useTravelStore();
  const searchParams = useSearchParams();
  const goTo = searchParams.get("to");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          role="combobox"
          variant="ghost"
          aria-expanded={open}
          className="flex w-full h-full justify-evenly"
        >
          {value || goTo ? (
            <MdOutlinePlace size={23} className="fill-orangeboom" />
          ) : (
            <MdOutlinePlace size={23} color="gray" />
          )}

          {goTo
            ? getUniqueTravelsByFrom(fakeTravel).find(
                (framework) => framework.from === goTo
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
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {getUniqueTravelsByFrom(fakeTravel).map((framework) => (
                <CommandItem
                  className="cursor-pointer border-b py-4"
                  key={framework.to}
                  value={framework.to}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setGoTo(currentValue);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4 stroke-bigtitle",
                      value === framework.to ? "opacity-100" : "opacity-0"
                    )}
                  />
                  <MdOutlinePlace size={23} className="mr-3 fill-bigtitle" />
                  {framework.to}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
