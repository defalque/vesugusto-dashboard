import Link from "next/link";

function PageNotFound({
  title,
  message,
  buttonText,
  href,
}: {
  title: string;
  message: string;
  buttonText: string;
  href: string;
}) {
  const headingId = "not-found-title";

  return (
    <section aria-labelledby={headingId} className="box-style">
      <div className="flex flex-col items-center gap-6 px-6 py-10 text-center sm:px-10 sm:py-12">
        <div className="space-y-1">
          <h2
            id={headingId}
            className="text-lg font-semibold tracking-tight text-zinc-900 sm:text-xl dark:text-gray-100"
          >
            {title}
          </h2>

          <p className="max-w-sm text-sm leading-relaxed text-pretty text-neutral-600 dark:text-neutral-400">
            {message}
          </p>
        </div>

        <Link
          className="bg-brand-950 hover:bg-brand-900 touch-hitbox border-brand-950 flex cursor-pointer items-center rounded-lg border px-4 py-2 font-semibold text-white shadow-sm inset-shadow-2xs transition-colors duration-300 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-zinc-700/80 dark:border-zinc-700/40 dark:bg-zinc-700/80 dark:inset-shadow-white/20 dark:hover:bg-zinc-600/90"
          href={href}
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
}

export default PageNotFound;
