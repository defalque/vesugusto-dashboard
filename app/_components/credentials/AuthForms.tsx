"use client";

import { useState } from "react";

import LazyLoginCredentialsForm from "./LazyLoginCredentialsForm";
import LazySignupCredentialsForm from "./LazySignupCredentialsForm";

import { AnimatePresence } from "motion/react";
import * as m from "motion/react-m";

export default function AuthForms() {
  const [form, setForm] = useState<"login" | "signup">("login");

  const variants = {
    initial: { x: form === "login" ? "-110%" : "110%", opacity: 0, scale: 0.9 },
    animate: { x: 0, opacity: 1, scale: 1 },
    exit: { x: form === "login" ? "-110%" : "110%", opacity: 0, scale: 0.9 },
  };

  const transition = { type: "spring" as const, bounce: 0, duration: 0.5 };

  return (
    <div className="dark:text-light my-auto w-full gap-1 overflow-hidden rounded-md text-neutral-700 sm:w-110 dark:shadow-zinc-700">
      <div>
        <div className="relative">
          <AnimatePresence mode="popLayout" initial={false}>
            <m.div
              key={form}
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={transition}
            >
              {form === "login" ? (
                <LazyLoginCredentialsForm
                  title="Login"
                  isActive={form === "login"}
                  onChangeForm={() => {
                    setForm("signup");
                  }}
                />
              ) : (
                <LazySignupCredentialsForm
                  title="Registrazione"
                  isActive={form === "signup"}
                  onChangeForm={() => {
                    setForm("login");
                  }}
                />
              )}
            </m.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
