import { Suspense } from 'react';
import { useSearchParams } from "next/navigation";
import MangaListing from "@/components/MangaListing";
import Header from "@/components/Header";

"use client";
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
