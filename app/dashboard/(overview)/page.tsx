import { Suspense } from "react";

import Stats from "@/app/_components/dashboard/stats/Stats";
import OrdersActivityWrapper from "@/app/_components/dashboard/ordersActivity/OrdersActivityWrapper";
import BestSellerChartWrapper from "@/app/_components/dashboard/bestSellers/BestSellerChartWrapper";
import ChartsResolver from "@/app/_components/dashboard/charts/ChartsResolver";

import DialogContextProvider from "@/app/_contexts/DialogContext";
import CustomDialogWrapper from "@/app/_components/ui/dialog/CustomDialogWrapper";

import {
  BestSellersSkeleton,
  ChartsSkeleton,
  OrdersActivitySkeleton,
  StatsSkeleton,
} from "@/app/_components/ui/Skeletons";
import { DateRangeParams } from "@/app/_lib/definitions";

export const metadata = {
  title: "Dashboard",
};

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<DateRangeParams>;
}) {
  const { dateRange = "last-7-days" } = await searchParams;

  return (
    <>
      <div className="grid grid-cols-2 grid-rows-[auto_22rem_auto_1fr] gap-x-8 gap-y-12 md:grid-cols-[1fr_1fr] md:grid-rows-[auto_28rem_auto_1fr] lg:grid-cols-[1fr_1fr] lg:grid-rows-[auto_auto_1fr]">
        <div className="col-span-full">
          <Suspense fallback={<StatsSkeleton />} key={dateRange}>
            <Stats dateRange={dateRange} />
          </Suspense>
        </div>

        <Suspense fallback={<BestSellersSkeleton />}>
          <BestSellerChartWrapper />
        </Suspense>

        <DialogContextProvider>
          <Suspense fallback={<OrdersActivitySkeleton />}>
            <OrdersActivityWrapper />
          </Suspense>

          <CustomDialogWrapper />
        </DialogContextProvider>

        <Suspense fallback={<ChartsSkeleton />}>
          <ChartsResolver dateRange={dateRange} />
        </Suspense>
      </div>
    </>
  );
}
