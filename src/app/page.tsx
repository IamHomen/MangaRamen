import MangaListing from "@/components/MangaListing";
import Header from "@/components/Header";
import { useSearchParams } from "next/navigation";
import { Suspense } from 'react';

function ClientComponent() {
  const searchParams = useSearchParams();
  const query = searchParams?.get("query") || "";
  return (
    <MangaListing query={query} />
  );
}

export default function Page() {
  return (
    <>
      <Header />
      <Suspense fallback={<p>Loading...</p>}>
        <ClientComponent />
      </Suspense>
    </>
  );
}
