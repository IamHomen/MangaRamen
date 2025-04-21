// app/page.tsx (or app/page.jsx)
import { Suspense } from "react";
import Header from "@/components/Header";
import MangaSearchResults from "@/components/MangaSearchResults";

export default function Page() {
  return (
    <>
      <Header />
      <Suspense fallback={<p>Loading...</p>}>
        <MangaSearchResults />
      </Suspense>
    </>
  );
}
