"use client";
import {
  getMangaDetails,
  MangaDetails,
  Chapter,
  Manga,
} from "@/services/asura-scans";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Icons } from "@/components/icons";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Bookmark } from "lucide-react";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import { cn } from "@/lib/utils";

const MangaDetailsPage = () => {
  const [mangaDetails, setMangaDetails] = useState<
    MangaDetails | undefined
  >(undefined);
  const { id } = useParams();
  const router = useRouter();
  const [searchChapter, setSearchChapter] = useState("");

  useEffect(() => {
    const fetchMangaDetails = async () => {
      if (id) {
        const details = await getMangaDetails(id as string);
        setMangaDetails(details);
      }
    };

    fetchMangaDetails();
  }, [id]);

  if (mangaDetails === undefined) {
    return <div>Loading...</div>;
  }

  const renderRatingStars = (rating: string) => {
    const ratingValue = parseFloat(rating);
    const filledStars = Math.floor(ratingValue / 2);
    const hasHalfStar = ratingValue % 2 !== 0 && ratingValue % 2 < 1;
    const maxStars = 5;

    const stars = [];
    for (let i = 0; i < maxStars; i++) {
      if (i < filledStars) {
        stars.push(
          <Icons.starFilled
            key={`filled_${i}`}
            className="h-4 w-4 text-yellow-500 fill-current"
          />
        );
      } else if (hasHalfStar && i === filledStars) {
        stars.push(
          <Icons.starHalf
            key="half"
            className="h-4 w-4 text-yellow-500 fill-current"
          />
        );
      } else {
        stars.push(
          <Icons.star
            key={`empty_${i}`}
            className="h-4 w-4 text-yellow-500 fill-current"
          />
        );
      }
    }

    return stars;
  };

  const getProxyImageUrl = (url: string) => {
    return `https://homen-api.vercel.app/proxy-image?url=${encodeURIComponent(
      url
    )}`;
  };

  const filteredChapters = mangaDetails.chapters.filter((chapter) =>
    chapter.name.toLowerCase().includes(searchChapter.toLowerCase())
  );

  return (
    <div>
      <Header />
      {/* Banner Section */}
      <div className="relative w-full h-64 md:h-96">
        <Image
          src={getProxyImageUrl(mangaDetails.banner)}
          alt={`${mangaDetails.title} Banner`}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
          className="object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
      </div>

      <div className="container mx-auto py-10 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Manga Cover and Details */}
          <div className="md:col-span-1">
            <Image
              src={getProxyImageUrl(mangaDetails.cover)}
              alt={mangaDetails.title}
              width={300}
              height={400}
              className="w-full object-cover rounded-md mb-4"
            />

            {/* Bookmark Button and Social Sharing (Placeholder) */}
            <Button variant="secondary" className="w-full mb-4">
              <Bookmark className="mr-2" />
              Bookmark
            </Button>

            <div className="flex items-center mb-1">
              {renderRatingStars(mangaDetails.rating)}
              <span className="text-xs text-muted-foreground ml-1">
                {mangaDetails.rating}
              </span>
            </div>

            <p>Status: {mangaDetails.status}</p>
            <p>Type: {mangaDetails.type}</p>
          </div>

          {/* Manga Information */}
          <div className="md:col-span-3">
            <h1 className="text-3xl font-bold mb-2">{mangaDetails.title}</h1>

            {/* Synopsis */}
            <h2 className="text-2xl font-bold mb-2">Synopsis</h2>
            <p className="mb-4">{mangaDetails.synopsis}</p>

            <p>Author: {mangaDetails.author}</p>
            <p>Artist: {mangaDetails.artist}</p>
            <p>Updated On: {mangaDetails.updated}</p>

            {/* Genres */}
            <div className="flex flex-wrap mt-4">
              {mangaDetails.genres.map((genre) => (
                <Badge key={genre} className="mr-2 mb-2">
                  {genre}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Chapter List */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Chapters</h2>

          <div className="flex justify-between mb-4">
            {mangaDetails.chapters.length > 0 && (
              <Link
                href={`/chapter/${mangaDetails.id}/${
                  mangaDetails.chapters[mangaDetails.chapters.length - 1]
                    .chapter_id
                }`}
                passHref
              >
                <Button variant="secondary" className="bg-primary text-primary-foreground">
                  First Chapter{" "}
                  {
                    mangaDetails.chapters[mangaDetails.chapters.length - 1]
                      .name
                  }
                </Button>
              </Link>
            )}
            {mangaDetails.chapters.length > 0 && (
              <Link
                href={`/chapter/${mangaDetails.id}/${mangaDetails.chapters[0].chapter_id}`}
                passHref
              >
                <Button variant="secondary" className="bg-primary text-primary-foreground">
                  New Chapter {mangaDetails.chapters[0].name}
                </Button>
              </Link>
            )}
          </div>
          <Input
            type="text"
            placeholder="Search chapter..."
            value={searchChapter}
            onChange={(e) => setSearchChapter(e.target.value)}
            className="mb-4"
          />

            <ul className="max-h-[400px] overflow-y-auto">
              {filteredChapters.map((chapter: Chapter) => (


                <li key={chapter.chapter_id} className="py-2 border-b border-border">
                  <Link
                    href={`/chapter/${chapter.id}/${chapter.chapter_id}`}
                    className="flex items-center justify-between"
                  >
                    <span>{chapter.name}</span>
                    <span className="text-sm text-muted-foreground">
                      {chapter.date}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

        </div>

        {/* Related Series */}
        {mangaDetails.related_series && mangaDetails.related_series.length > 0 && (
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Related Series</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {mangaDetails.related_series.map((relatedManga: Manga) => (
                <Link key={relatedManga.id} href={`/manga/${relatedManga.id}`} passHref>
                  <div className="relative">
                    <Image
                      src={getProxyImageUrl(relatedManga.cover)}
                      alt={relatedManga.title}
                      width={300}
                      height={400}
                      style={{ height: '300px', objectFit: 'cover' }}
                      className="w-full object-cover rounded-md"
                    />
                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-background to-transparent p-2">
                      <h3 className="text-sm font-semibold">{relatedManga.title}</h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MangaDetailsPage;
