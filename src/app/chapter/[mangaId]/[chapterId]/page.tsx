"use client";

import { getMangaChapterContent } from "@/services/asura-scans";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";

const ChapterReaderPage = () => {
  const [chapterContent, setChapterContent] = useState(null);
  const { mangaId, chapterId } = useParams();

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
    return `https://homen-api.vercel.app/proxy-image?url=${encodeURIComponent(url)}`;
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-4">Chapter Reader</h1>
      {chapterContent.chapterPages && Array.isArray(chapterContent.chapterPages) ? (
        chapterContent.chapterPages.map((page, index) => (
          <Image
            key={index}
            src={getProxyImageUrl(page.img)}
            alt={`Page ${page.page}`}
            width={800}
            height={1200}
            className="w-full object-contain mb-4 rounded-md"
          />
        ))
      ) : (
        <div>No images to display.</div>
      )}
    </div>
  );
};

export default ChapterReaderPage;
