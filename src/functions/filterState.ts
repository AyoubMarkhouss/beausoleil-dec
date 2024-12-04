// Helper function to convert duration to minutes for sorting
function convertDurationToMinutes(duration: string): number {
  const [hours, minutes] = duration.split("h").map((part) => parseInt(part));
  return hours * 60 + minutes;
}

interface Travel {
  from: string;
  startDate: string;
  endDate: string;
  to: string;
  duration: string;
  price: string;
  transfer: boolean;
}

// Main function to filter based on state
export function filterTravels(
  travelArray: Travel[],
  state: "cheapest" | "fastest" | "earliest" | "latest" | "recommended"
): Travel[] {
  switch (state) {
    case "cheapest":
      return travelArray.sort((a, b) => parseInt(a.price) - parseInt(b.price));

    case "recommended":
      return travelArray;

    case "fastest":
      return travelArray.sort(
        (a, b) =>
          convertDurationToMinutes(a.duration) -
          convertDurationToMinutes(b.duration)
      );

    case "earliest":
      return travelArray.sort((a, b) => a.startDate.localeCompare(b.startDate));

    case "latest":
      return travelArray.sort((a, b) => b.startDate.localeCompare(a.startDate));

    default:
      return travelArray; // Return original array if state is not recognized
  }
}
