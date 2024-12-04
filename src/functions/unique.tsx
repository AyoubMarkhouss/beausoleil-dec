interface Travel {
  from: string;
  startDate: string;
  endDate: string;
  to: string;
  duration: string;
  price: string;
  transfer: boolean;
}

export function getUniqueTravelsByFrom(travelArray: Travel[]): Travel[] {
  const uniqueTravels = travelArray.filter(
    (travel, index, self) =>
      index === self.findIndex((t) => t.from === travel.from)
  );
  return uniqueTravels;
}
