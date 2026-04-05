"use client";

import { useDateRangeContext } from "@/app/_contexts/DateRangeProvider";
import { DateRange } from "@/app/_lib/definitions";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { CheckIcon, CalendarDaysIcon } from "@heroicons/react/24/outline";

const DATE_RANGE_OPTIONS: { value: DateRange; label: string }[] = [
  { value: "last-7-days", label: "Ultima settimana" },
  { value: "last-month", label: "Ultimo mese" },
  { value: "last-year", label: "Ultimo anno" },
];

function DateRangePicker() {
  const { router, pathname, createQueryString, urlSearchParams } =
    useDateRangeContext();

  const activeDateRange = urlSearchParams.get("dateRange") || "last-7-days";

  const selected =
    DATE_RANGE_OPTIONS.find((opt) => opt.value === activeDateRange) ??
    DATE_RANGE_OPTIONS[0];
  const selectedLabel = selected.label;

  const handleChange = (option: { value: DateRange; label: string }) => {
    router.push(pathname + "?" + createQueryString("dateRange", option.value));
  };

  return (
    <Listbox value={selected} by="value" onChange={handleChange}>
      <div className="relative w-46">
        <ListboxButton
          aria-label="Data range"
          className="data-focus:border-brand-950 data-focus:ring-brand-950/20 relative h-full w-full cursor-pointer rounded-lg border border-gray-300 py-2 pr-8 pl-3 text-left text-sm text-black shadow-xs transition-colors duration-100 ease-in hover:border-gray-400/70 focus:not-data-focus:outline-none data-focus:ring-4 data-focus:outline-none dark:border-zinc-700/60 dark:bg-zinc-700/35 dark:text-white dark:hover:border-zinc-600/80 dark:data-focus:border-zinc-400 dark:data-focus:ring-zinc-600"
        >
          <span className="block truncate">{selectedLabel}</span>
          <CalendarDaysIcon
            className="pointer-events-none absolute top-1/2 right-2.5 size-5 -translate-y-1/2 text-black dark:text-white"
            aria-hidden="true"
          />
        </ListboxButton>
      </div>

      <ListboxOptions
        modal={false}
        anchor="bottom end"
        transition
        className="w-(--button-width) rounded-lg border border-gray-300 bg-white p-1 text-white transition duration-100 ease-in [--anchor-gap:--spacing(1)] focus:outline-none data-leave:data-closed:opacity-0 dark:border-zinc-700 dark:bg-zinc-950"
      >
        {DATE_RANGE_OPTIONS.map((option) => (
          <ListboxOption
            key={option.value}
            value={option}
            className="group data-focus:bg-brand-950/10 flex cursor-default items-center gap-2 rounded px-3 py-1.5 select-none dark:data-focus:bg-zinc-800/85"
          >
            <CheckIcon className="invisible size-4 text-black group-data-selected:visible dark:text-white" />
            <div className="text-sm/6 text-zinc-700 dark:text-white">
              {option.label}
            </div>
          </ListboxOption>
        ))}
      </ListboxOptions>
    </Listbox>
  );
}

export default DateRangePicker;
