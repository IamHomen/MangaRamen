"use client";
import { getMangaDetails } from "@/services/asura-scans";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Icons } from "@/components/icons";
import Link from "next/link";

const MangaDetailsPage = () => {
  const [mangaDetails, setMangaDetails] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchMangaDetails = async () => {
      if (id) {
        const details = await getMangaDetails(id as string);
        setMangaDetails(details);
      }
    };

    fetchMangaDetails();
  }, [id]);

  if (!mangaDetails) {
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
    return `https://homen-api.vercel.app/proxy-image?url=${encodeURIComponent(url)}`;
  };

  return (
    <div className="container mx-auto py-10">
      <div className="relative">
        <Image
          src={getProxyImageUrl(mangaDetails.banner)}
          alt={mangaDetails.title}
          width={1200}
          height={400}
          className="w-full object-cover rounded-md"
        />
        <div className="absolute bottom-4 left-4 text-white">
          <h1 className="text-3xl font-bold">{mangaDetails.title}</h1>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-1">
          <Image
            src={getProxyImageUrl(mangaDetails.cover)}
            alt={mangaDetails.title}
            width={300}
            height={400}
            className="w-full object-cover rounded-md"
          />
          <div className="mt-2">
            <p>Author: {mangaDetails.author}</p>
            <p>Artist: {mangaDetails.artist}</p>
            <p>Status: {mangaDetails.status}</p>
            <p>Type: {mangaDetails.type}</p>
            <div className="flex items-center mt-1">
              {renderRatingStars(mangaDetails.rating)}
              <span className="text-xs text-muted-foreground ml-1">
                {mangaDetails.rating}
              </span>
            </div>
            <div className="flex flex-wrap mt-2">
              {mangaDetails.genres.map((genre) => (
                <Badge key={genre} className="mr-2 mb-2">
                  {genre}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold mb-2">Synopsis</h2>
          <p>{mangaDetails.synopsis}</p>

          <h2 className="text-2xl font-bold mt-4 mb-2">Chapters</h2>
          <ul>
            {mangaDetails.chapters.map((chapter) => (
              <li key={chapter.chapter_id} className="py-2 border-b border-border">
                <Link href={`/chapter/${mangaDetails.id}/${chapter.chapter_id}`} className="flex items-center justify-between">
                  <span>{chapter.name}</span>
                  <span className="text-sm text-muted-foreground">{chapter.date}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MangaDetailsPage;
