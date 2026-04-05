import PageNotFound from "@/app/_components/ui/NotFound";

export const metadata = {
  title: "Pagina non trovata",
};

export default function NotFound() {
  return (
    <div className="flex min-h-[50svh] items-center justify-center py-12">
      <PageNotFound
        title="Pagina non trovata"
        message="La pagina che cerchi non esiste o è stata spostata."
        buttonText="Torna alla dashboard"
        href="/dashboard/overview"
      />
    </div>
  );
}
