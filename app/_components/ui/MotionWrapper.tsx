"use client";

import { LazyMotion } from "motion/react";

const loadFeatures = () =>
  import("@/app/_lib/features").then((res) => res.default);

function MotionWrapper({ children }: { children: React.ReactNode }) {
  return <LazyMotion features={loadFeatures}>{children}</LazyMotion>;
}

export default MotionWrapper;
