"use client";

import { useState, useEffect } from "react";
import { getSortedManga, Manga } from "@/services/asura-scans";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface MangaListingProps {
  searchTerm: string;
}

const MangaListing: React.FC<MangaListingProps> = ({ searchTerm }) => {
  const [mangaList, setMangaList] = useState<Manga[]>([]);
  const [sortOrder, setSortOrder] = useState("update");
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();

  useEffect(() => {
    const fetchManga = async () => {
      const data = await getSortedManga(sortOrder, currentPage);
      setMangaList(data.results);
    };

    fetchManga();
  }, [sortOrder, currentPage]);

  const handleSortChange = (value: string) => {
    setSortOrder(value);
    setCurrentPage(1); // Reset to first page when sorting changes
  };

  // Implement search functionality with existing data
  const searchedManga = mangaList.filter((manga) =>
    manga.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-end items-center mb-4">
        <Select onValueChange={handleSortChange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by..." />
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {searchedManga.map((manga) => (
          <Card key={manga.id} className="bg-background border-border">
            <CardHeader>
              <CardTitle>{manga.title}</CardTitle>
              <CardDescription>
                Latest Chapter: {manga.latest_chapter}
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <Image
                src={manga.cover}
                alt={manga.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-md"
              />
            </CardContent>
            <CardFooter className="flex items-center justify-between">
              <Badge variant="secondary">{manga.type}</Badge>
              <Badge variant="outline">Rating: {manga.rating}</Badge>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MangaListing;

import { CardFooter } from "@/components/ui/card";
