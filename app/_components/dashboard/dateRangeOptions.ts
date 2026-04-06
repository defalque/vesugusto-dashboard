import { DateRange } from "@/app/_lib/definitions";

export const DATE_RANGE_OPTIONS: { value: DateRange; label: string }[] = [
  { value: "last-7-days", label: "Ultima settimana" },
  { value: "last-month", label: "Ultimo mese" },
  { value: "last-year", label: "Ultimo anno" },
];
