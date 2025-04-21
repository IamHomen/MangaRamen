"use client";

import MangaListing from "@/components/MangaListing";
import Header from "@/components/Header";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="container mx-auto py-10 px-4">
        <Suspense fallback={<p>Loading...</p>}>
          <MangaListing />
        </Suspense>
      </div>
    </div>
  );
}
