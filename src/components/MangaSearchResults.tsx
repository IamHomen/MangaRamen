// components/MangaSearchResults.tsx
"use client";

import { useSearchParams } from "next/navigation";
import MangaListing from "@/components/MangaListing";

export default function MangaSearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams?.get("query") || "";
  
  return <MangaListing query={query} />;
}
