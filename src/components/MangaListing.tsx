"use client";

import { useState, useEffect } from "react";
import { getSortedManga, Manga } from "@/services/asura-scans";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";

interface MangaListingProps {
  searchTerm: string;
}

const MangaListing: React.FC<MangaListingProps> = ({ searchTerm }) => {
  const [mangaList, setMangaList] = useState<Manga[]>([]);
  const [sortOrder, setSortOrder] = useState("update");
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();
  const [totalPages, setTotalPages] = useState(1); // Add totalPages state

  useEffect(() => {
    const fetchManga = async () => {
      const data = await getSortedManga(sortOrder, currentPage);
      setMangaList(data.results);
      // Update totalPages based on hasNextPage from the API
      setTotalPages(data.hasNextPage ? currentPage + 1 : currentPage);
    };

    fetchManga();
  }, [sortOrder, currentPage]);

  const handleSortChange = (value: string) => {
    setSortOrder(value);
    setCurrentPage(1); // Reset to first page when sorting changes
  };

  const searchedManga = mangaList.filter((manga) =>
    manga.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-end items-center mb-4">
        <Select onValueChange={handleSortChange}>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Update" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="update">Update</SelectItem>
            <SelectItem value="rating">Rating</SelectItem>
            <SelectItem value="bookmarks">Bookmarks</SelectItem>
            <SelectItem value="desc">Desc</SelectItem>
            <SelectItem value="asc">Asc</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {searchedManga.map((manga) => (
          <Card key={manga.id} className="bg-background border-border rounded-md shadow-sm flex flex-col">
            <div className="relative">
              {/* Status Badge */}
              <Badge
                variant="secondary"
                className="absolute top-2 left-2 z-10 rounded-full px-2 py-0.5 text-xs font-bold uppercase"
              >
                {manga.status}
              </Badge>
              {/* Manga Cover Image */}
              {manga.cover.endsWith(".gif") ? (
                <img
                  src={manga.cover}
                  alt={manga.title}
                  className="aspect-[3/4] w-full object-cover rounded-t-md"
                />
              ) : (
                <Image
                  src={manga.cover}
                  alt={manga.title}
                  width={300}
                  height={400}
                  className="aspect-[3/4] w-full object-cover rounded-t-md"
                />
              )}
            </div>
            <CardContent className="p-2 flex flex-col flex-grow">
              {/* Manga Title */}
              <CardTitle className="text-sm font-semibold line-clamp-1">{manga.title}</CardTitle>
              {/* Latest Chapter */}
              <CardDescription className="text-xs text-muted-foreground line-clamp-1">
                Chapter: {manga.latest_chapter}
              </CardDescription>
              {/* Rating */}
              <div className="flex items-center mt-1">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    className="h-4 w-4 text-yellow-500 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 5.19 8.63 13. 9.24 1.64 13.97 5.82 21 12 17.27z"
                    />
                  </svg>
                ))}
                <span className="text-xs text-muted-foreground ml-1">{manga.rating}</span>
              </div>
            </CardContent>
            <CardFooter className="p-2">
              {/* Type Badge */}
              <Badge variant="outline" className="text-[0.6rem]">
                {manga.type}
              </Badge>
            </CardFooter>
          </Card>
        ))}
      </div>
      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <Button
          variant="outline"
          size="sm"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default MangaListing;

import { CardFooter } from "@/components/ui/card";


