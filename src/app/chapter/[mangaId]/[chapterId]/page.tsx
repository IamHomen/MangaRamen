"use client";

import { getMangaChapterContent } from "@/services/asura-scans";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Define the expected type for chapterContent
type ChapterPage = {
  img: string;
  page: number;
};

type ChapterContent = {
  id?: string;
  title: string;
  currentChapterNumber: number;
  prevChapterId?: string;
  nextChapterId?: string;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  chapterPages: ChapterPage[];
};

const ChapterReaderPage: React.FC = () => {
  const [chapterContent, setChapterContent] = useState<ChapterContent | null>(null);
  const params = useParams();
  const router = useRouter();

  const mangaId = params?.id as string | undefined;
  const chapterId = params?.chapterId as string | undefined;

  useEffect(() => {
    const fetchChapterContent = async () => {
      if (mangaId && chapterId) {
        try {
          const content = await getMangaChapterContent(mangaId, chapterId);
          setChapterContent(content);
        } catch (error) {
          console.error("Failed to fetch chapter content:", error);
        }
      }
    };

    fetchChapterContent();
  }, [mangaId, chapterId]);

  if (!chapterContent) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  const getProxyImageUrl = (url: string) =>
    `https://homen-api.vercel.app/proxy-image?url=${encodeURIComponent(url)}`;

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
          <h1 className="text-2xl font-bold">{chapterContent.title}</h1>
          <p className="text-muted-foreground">
            Chapter {chapterContent.currentChapterNumber}
          </p>
        </div>

        {/* Chapter Navigation (Top) */}
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

        {/* Manga Pages */}
        <div className="flex flex-col items-center">
          {chapterContent.chapterPages.map((page) => (
            <div key={page.page} className="mx-auto max-w-full mb-4">
              <Image
                src={getProxyImageUrl(page.img)}
                alt={`Page ${page.page}`}
                width={800}
                height={1200}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>

        {/* Chapter Navigation (Bottom) */}
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
