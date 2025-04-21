"use client";

import MangaListing from "@/components/MangaListing";
import Header from "@/components/Header";
import { useState } from "react";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (term: string) => {
    setSearchTerm(term);
  };

  return (
    <div>
      <Header onSearchChange={handleSearchChange} />
      <div className="container mx-auto py-10">
        <MangaListing searchTerm={searchTerm} />
      </div>
    </div>
  );
}
