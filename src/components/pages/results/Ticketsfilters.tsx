import React from "react";
import { Filters } from "./Filters";
import Ticket from "./Ticket";
import { useRef } from "react";
import { useInView } from "framer-motion";

const Ticketsfilters = ({
  goingTo,
  comingFrom,
}: {
  goingTo?: string;
  comingFrom?: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="min-h-screen px-5 lg:px-20">
      <div className="grid min-h-screen w-full grid-cols-5">
        <div className="col-span-2 hidden min-h-screen w-full flex-col px-10 md:flex">
          <Filters />
        </div>
        <div
          ref={ref}
          style={{
            transform: isInView ? "none" : "translateY(200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          className="col-span-5 min-h-screen w-full md:col-span-3 md:px-10 pt-10"
        >
          <Ticket goingTo={goingTo} comingFrom={comingFrom} />
        </div>
      </div>
    </div>
  );
};

export default Ticketsfilters;
