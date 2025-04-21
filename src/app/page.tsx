"use client"; // Declare as a client component for safety
import { Suspense } from "react";
import Header from "@/components/Header";
import MangaSearchResults from "@/components/MangaSearchResults";

export default function Page() {
  return (
    <>
      <Header />
      <Suspense fallback={<p>Loading...</p>}>
        {/* Wrap MangaSearchResults in Suspense to handle useSearchParams */}
        <MangaSearchResults />
      </Suspense>
    </>
  );
}
