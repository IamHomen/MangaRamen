// components/MangaSearchResults.tsx
import { useSearchParams } from "next/navigation"; // Ensure this is imported from the correct Next.js package
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
