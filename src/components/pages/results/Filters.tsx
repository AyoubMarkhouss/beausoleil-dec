import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Filterscheckbox } from "./Filterscheckbox";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Typevoyagecheckbox } from "./Typevoyagecheckbox";
export function Filters() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <Accordion
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateY(200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
      type="single"
      collapsible
      defaultValue="item-1"
      className="w-full"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>Heure de départ</AccordionTrigger>
        <AccordionContent>
          <Filterscheckbox />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-1">
        <AccordionTrigger className="cabinet text-lg text-bigtitle">
          Type de voyage
        </AccordionTrigger>
        <AccordionContent>
          <Typevoyagecheckbox />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
