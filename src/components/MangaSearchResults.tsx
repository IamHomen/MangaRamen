"use client"; // Add this directive at the top of the file

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function MangaSearchResultsContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q"); // Example usage of search params

  return (
    <div>
      {/* Render search results based on the query */}
      <p>Search query: {query}</p>
      {/* Add more UI logic here */}
    </div>
  );
}

export default function MangaSearchResults() {
  return (
    <Suspense fallback={<p>Loading search results...</p>}>
      <MangaSearchResultsContent />
    </Suspense>
  );
}
