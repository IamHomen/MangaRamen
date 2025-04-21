"use client";

import { getMangaChapterContent } from "@/services/asura-scans";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ChapterReaderPage = () => {
  const [chapterContent, setChapterContent] = useState(null);
  const { mangaId, chapterId } = useParams();
  const router = useRouter();

  useEffect(() => {
    const fetchChapterContent = async () => {
      if (mangaId && chapterId) {
        const content = await getMangaChapterContent(
          mangaId as string,
          chapterId as string
        );
        setChapterContent(content);
      }
    };

    fetchChapterContent();
  }, [mangaId, chapterId]);

  if (!chapterContent) {
    return <div>Loading...</div>;
  }

  const getProxyImageUrl = (url: string) => {
    return `https://homen-api.vercel.app/proxy-image?url=${encodeURIComponent(
      url
    )}`;
  };

  const goToPreviousChapter = () => {
    if (chapterContent.prevChapterId) {
      router.push(`/chapter/${mangaId}/${chapterContent.prevChapterId}`);
    }
  };

  const goToNextChapter = () => {
    if (chapterContent.nextChapterId) {
      router.push(`/chapter/${mangaId}/${chapterContent.nextChapterId}`);
    }
  };

  return (
    <div className="bg-background min-h-screen text-foreground">
      <Header />
      <div className="container mx-auto py-8 px-4">
        {/* Manga and Chapter Title */}
        <div className="text-center mb-4">
          <h1 className="text-2xl font-bold">
            {chapterContent.title} {/* Replace with manga title if available */}
          </h1>
          <p className="text-muted-foreground">
            Chapter {chapterContent.currentChapterNumber}
          </p>
        </div>

        {/* Chapter Navigation */}
        <div className="flex justify-between items-center mb-4">
          <Button
            variant="outline"
            size="sm"
            onClick={goToPreviousChapter}
            disabled={!chapterContent.hasPrevPage}
            className={cn(
              "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            )}
          >
            <ChevronLeft className="mr-2 h-4 w-4" />
            Prev
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={goToNextChapter}
            disabled={!chapterContent.hasNextPage}
            className={cn(
              "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            )}
          >
            Next
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Manga Content */}
        <div className="flex flex-col items-center">
          {chapterContent.chapterPages.map((page, index) => (
            <Image
              key={index}
              src={getProxyImageUrl(page.img)}
              alt={`Page ${page.page}`}
              width={600}
              height={1200}
              className="w-11/12 object-contain"
            />
          ))}
        </div>

        {/* Bottom Chapter Navigation */}
        <div className="flex justify-between items-center mt-4">
          <Button
            variant="outline"
            size="sm"
            onClick={goToPreviousChapter}
            disabled={!chapterContent.hasPrevPage}
            className={cn(
              "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            )}
          >
            <ChevronLeft className="mr-2 h-4 w-4" />
            Prev
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={goToNextChapter}
            disabled={!chapterContent.hasNextPage}
            className={cn(
              "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            )}
          >
            Next
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChapterReaderPage;
