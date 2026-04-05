import PageNotFound from "@/app/_components/ui/NotFound";

export const metadata = {
  title: "Pagina non trovata",
};

export default function NotFound() {
  return (
    <div className="text-dark flex min-h-svh w-full flex-col items-center justify-center px-4 py-12 dark:text-gray-100">
      <PageNotFound
        title="Pagina non trovata"
        message="La pagina che cerchi non esiste o è stata spostata."
        buttonText="Torna alla dashboard"
        href="/dashboard/overview"
      />
    </div>
  );
}
