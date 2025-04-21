"use client";

import { useState, useEffect } from "react";
import { getSortedManga, Manga } from "@/services/asura-scans";
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from "@/components/ui/card";
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
  const [selectedSort, setSelectedSort] = useState("update");

  useEffect(() => {
    const fetchManga = async () => {
      const fetchData = async () => {
        if (searchTerm) {
          const data = await getSortedManga(sortOrder, currentPage);
          const searchedManga = data.results.filter((manga) =>
            manga.title.toLowerCase().includes(searchTerm.toLowerCase())
          );
          setMangaList(searchedManga);
          setTotalPages(data.hasNextPage ? currentPage + 1 : currentPage);
        } else {
          const data = await getSortedManga(sortOrder, currentPage);
          setMangaList(data.results);
          setTotalPages(data.hasNextPage ? currentPage + 1 : currentPage);
        }
      };

      fetchData();
    };

    fetchManga();
  }, [sortOrder, currentPage, searchTerm]);

  const handleSortChange = (value: string) => {
    setSortOrder(value);
    setCurrentPage(1); // Reset to first page when sorting changes
    setSelectedSort(value);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const renderRatingStars = (rating: string) => {
    const ratingValue = parseFloat(rating);
    const filledStars = Math.floor(ratingValue / 2); // Determine number of filled stars
    const hasHalfStar = ratingValue % 2 !== 0 && ratingValue % 2 < 1; // Check for a half star
    const maxStars = 5; // Total number of stars

    const stars = [];

    // Add filled stars
    for (let i = 0; i < filledStars; i++) {
      stars.push(
        <Icons.starFilled key={`filled_${i}`} className="h-4 w-4 text-yellow-500 fill-current" />
      );
    }

    // Add half star if applicable
    if (hasHalfStar && filledStars < maxStars) {
      stars.push(
        <Icons.starHalf key="half" className="h-4 w-4 text-yellow-500 fill-current" />
      );
    }

    // Add empty stars to fill the remaining space
    for (let i = stars.length; i < maxStars; i++) {
      stars.push(
        <Icons.star key={`empty_${i}`} className="h-4 w-4 text-yellow-500 fill-current" />
      );
    }

    return stars;
  };


  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-end items-center mb-4">
        <Select onValueChange={handleSortChange} value={selectedSort}>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Sort By" />
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
      {mangaList.length === 0 && searchTerm ? (
        <div className="text-center text-muted-foreground">
          No results found for "{searchTerm}"
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {mangaList.map((manga) => (
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
                  {renderRatingStars(manga.rating)}
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
      )}
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
import { Star, StarHalf } from "lucide-react";
