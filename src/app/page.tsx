"use client";

import MangaListing from "@/components/MangaListing";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="container mx-auto py-10">
        <MangaListing />
      </div>
    </div>
  );
}
