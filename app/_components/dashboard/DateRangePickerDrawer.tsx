"use client";

import { useDateRangeContext } from "@/app/_contexts/DateRangeProvider";
import { CheckIcon, CalendarDaysIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { Drawer } from "vaul";
import { DATE_RANGE_OPTIONS } from "./dateRangeOptions";

export default function DateRangePickerDrawer() {
  const { router, pathname, createQueryString, urlSearchParams } =
    useDateRangeContext();
  const [isOpen, setIsOpen] = useState(false);

  const activeDateRange = urlSearchParams.get("dateRange") || "last-7-days";

  const selected =
    DATE_RANGE_OPTIONS.find((opt) => opt.value === activeDateRange) ??
    DATE_RANGE_OPTIONS[0];

  const handleSelect = (
    value: (typeof DATE_RANGE_OPTIONS)[number]["value"],
  ) => {
    router.push(pathname + "?" + createQueryString("dateRange", value));
    setIsOpen(false);
  };

  return (
    <div className="flex lg:hidden">
      <button
        type="button"
        aria-label={selected.label}
        className="focus-visible:outline-brand-950 dark:text-light cursor-pointer rounded-md px-4 py-2 font-medium text-neutral-700 transition-colors hover:bg-gray-100/70 md:font-medium dark:hover:bg-zinc-950 dark:focus-visible:outline-zinc-700"
        onClick={() => setIsOpen(true)}
      >
        <CalendarDaysIcon className="size-6" aria-hidden />
      </button>
      <Drawer.Root open={isOpen} onOpenChange={setIsOpen}>
        <Drawer.Portal>
          <Drawer.Overlay
            className="fixed inset-0 z-250 bg-black/5 lg:hidden dark:bg-black/20"
            onClick={() => setIsOpen(false)}
          />
          <Drawer.Content className="fixed right-0 bottom-0 left-0 z-250 mt-24 flex h-fit flex-col rounded-t-[10px] outline-none lg:hidden dark:bg-zinc-800">
            <div className="flex-1 rounded-t-[10px] bg-white p-4 dark:bg-zinc-900/60">
              <div
                aria-hidden
                className="mx-auto mb-8 h-1.5 w-12 shrink-0 rounded-full bg-gray-200 dark:bg-zinc-600"
              />
              <div className="mx-auto max-w-2xl">
                <Drawer.Title className="dark:text-light sr-only mb-4 font-medium text-neutral-700">
                  Seleziona intervallo date
                </Drawer.Title>

                <div className="dark:text-light divide-y divide-gray-200 text-neutral-700 dark:divide-zinc-700/50">
                  <div className="py-2">
                    <h5 className="p-2 text-xs tracking-wide text-zinc-500/90 dark:text-zinc-500">
                      Periodo
                    </h5>
                    <ul className="space-y-1 text-sm">
                      {DATE_RANGE_OPTIONS.map((option) => {
                        const isActive = activeDateRange === option.value;
                        return (
                          <li key={option.value}>
                            <button
                              type="button"
                              onClick={() => handleSelect(option.value)}
                              className={`${isActive && "bg-brand-950/10 dark:bg-zinc-950"} hover:bg-brand-950/10 flex w-full cursor-pointer justify-between rounded-md px-2 py-3 dark:hover:bg-zinc-950`}
                            >
                              {option.label}
                              {isActive && <CheckIcon className="size-5" />}
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </div>
  );
}
