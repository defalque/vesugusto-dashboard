import PageNotFound from "@/app/_components/ui/NotFound";

export default function NotFound() {
  return (
    <main className="dark:text-light my-auto grid min-h-svh place-content-center text-neutral-700">
      <PageNotFound
        title="Prodotto non trovato"
        message="Non è stato possibile trovare il prodotto da te selezionato."
        buttonText="Torna ai prodotti"
        href="/dashboard/products"
      />
    </main>
  );
}
