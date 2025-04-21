"use client"; // Add this to ensure it's a Client Component

import { useSearchParams } from "next/navigation";

export default function MangaSearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q"); // Example: Retrieve "q" from the query string

  return (
    <div>
      {/* Render the search query */}
      <p>Search query: {query}</p>
      {/* Add more UI logic here */}
    </div>
  );
}
