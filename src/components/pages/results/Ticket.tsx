"use client";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { fakeTravel } from "@/fakeData";
import { filterTravels } from "@/functions/filterState";
import useTimer from "@/hooks/use-timer";
import { useFilterStore } from "@/utils/zustand/filterCities";
import { useRouter } from "next/navigation";
import { IoIosArrowForward } from "react-icons/io";
import { WiTime4 } from "react-icons/wi";

const Ticket = ({
  goingTo,
  comingFrom,
}: {
  goingTo?: string;
  comingFrom?: string;
}) => {
  const router = useRouter();
  const { state } = useFilterStore();
  const loading = useTimer(1000, state);

  return (
    <>
      {loading ? (
        <>
          {filterTravels(
            fakeTravel.filter(
              (b) => !b.transfer && goingTo === b.to && comingFrom === b.from
            ),
            state
          ).map((g, key) => (
            <div
              key={key}
              className="mb-5 grid h-56 md:h-44  w-full hover:outline-bigtitle/70 hover:outline-2 hover:outline grid-cols-4 rounded-3xl border border-gray-300 bg-white px-5 shadow-lg"
            >
              <div className="col-span-1 flex flex-col items-center justify-center">
                <h1>Départ</h1>
                <h1 className="text-2xl font-semibold text-bigtitle">
                  {g.startDate}
                </h1>
                <p>{g.from}</p>
              </div>

              <div className="col-span-2 flex flex-col items-center justify-center space-x-2 md:col-span-1">
                <h1 className="flex items-center gap-x-2">
                  <WiTime4 size={20} className="fill-bigtitle" />
                  {g.duration}
                </h1>
                <div className="flex items-center justify-center">
                  <div className="h-3 w-3 rounded-full bg-orangeboom"></div>

                  <div className="h-0.5 w-20 xl:w-32 bg-purple-200"></div>

                  <div className="h-3 w-3 rounded-full bg-orangeboom"></div>
                </div>
              </div>

              <div className="col-span-1 flex flex-col items-center justify-center">
                <h1>Arrivé</h1>
                <h1 className="text-2xl font-semibold text-bigtitle">
                  {g.endDate}
                </h1>
                <p>{g.to}</p>
              </div>
              <div className="col-span-4 flex flex-col items-center justify-center border-l border-dotted pl-5 md:col-span-1">
                <h1>1 Passager</h1>
                <h1>à partir de</h1>
                <Button
                  onClick={() => router.push("/schedulesResults")}
                  className="group md:w-20 lg:w-full rounded-full bg-bigtitle text-sm lg:text-xl text-white hover:bg-textblue"
                >
                  {g.price} MAD
                  <IoIosArrowForward className="group-hover:fill-orangeboom" />
                </Button>
              </div>
            </div>
          ))}
        </>
      ) : (
        <div className="flex flex-col gap-2">
          {Array.from({ length: 3 }).map((_, k) => (
            <div key={k}>
              <div className="mb-5 grid h-56 md:h-44  w-full transform grid-cols-4 rounded-3xl border border-gray-300 bg-white px-5 shadow-lg transition-transform duration-500 ease-in-out hover:scale-105">
                <div className="col-span-1 gap-2 flex flex-col items-center justify-center">
                  <Skeleton className="w-9 h-2" />
                  <Skeleton className="w-14 h-6" />
                  <Skeleton className="w-20 h-2" />
                </div>

                <div className="col-span-2 flex flex-col items-center justify-center space-x-2 md:col-span-1">
                  <div className="flex items-center gap-x-2">
                    <WiTime4 size={20} className="fill-bigtitle" />
                    <Skeleton className="w-20 h-2" />
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="h-3 w-3 rounded-full bg-orangeboom"></div>

                    <div className="h-0.5 w-20 xl:w-32 bg-purple-200"></div>

                    <div className="h-3 w-3 rounded-full bg-orangeboom"></div>
                  </div>
                </div>

                <div className="col-span-1 gap-2 flex flex-col items-center justify-center">
                  <Skeleton className="w-9 h-2" />
                  <Skeleton className="w-14 h-6" />
                  <Skeleton className="w-20 h-2" />
                </div>
                <div className="col-span-4 gap-3 flex flex-col items-center justify-center border-l border-dotted pl-5 md:col-span-1">
                  <Skeleton className="w-20 h-2" />
                  <Skeleton className="w-24 h-2" />
                  <Skeleton className="w-32 rounded-full h-9" />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Ticket;
