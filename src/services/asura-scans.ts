
/**
 * Represents a manga.
 */
export interface Manga {
  /**
   * The title of the manga.
   */
  title: string;
  /**
   * The URL of the manga cover image.
   */
  cover: string;
  /**
   * The ID of the manga.
   */
  id: string;
  /**
   * The latest chapter number of the manga.
   */
  latest_chapter: string;
  /**
   * The rating of the manga.
   */
  rating: string;
  /**
   * The status of the manga (e.g., Ongoing, Completed).
   */
  status: string;
  /**
   * The type of the manga (e.g., MANHWA, MANHUA).
   */
  type: string;
}

/**
 * Represents the result of a manga listing.
 */
export interface MangaListResult {
  /**
   * The current page number.
   */
  currentPage: string;
  /**
   * Indicates whether there is a next page.
   */
  hasNextPage: boolean;
  /**
   * Indicates whether there is a previous page.
   */
  hasPrevPage: boolean;
  /**
   * The list of manga on the current page.
   */
  results: Manga[];
}

const BASE_URL = "https://homen-api.vercel.app";

/**
 * Asynchronously retrieves a sorted list of manga from AsuraScans.
 *
 * @param sort The sorting criteria (update, rating, bookmarks, desc, asc).
 * @param page The page number to retrieve.
 * @returns A promise that resolves to a MangaListResult object.
 */
export async function getSortedManga(
  sort: string, // TODO: narrow this type to 'update' | 'rating' | 'bookmarks' | 'desc' | 'asc'
  page: number
): Promise<MangaListResult> {
  const url = `${BASE_URL}/manga/asurascans/sort-manga?sort=${sort}&page=${page}`;
  const response = await fetch(url);
  const data: MangaListResult = await response.json();
  return data;
}

/**
 * Asynchronously searches for manga on AsuraScans by keyword.
 *
 * @param keyword The search keyword.
 * @returns A promise that resolves to a MangaListResult object.
 */
export async function searchManga(keyword: string): Promise<MangaListResult> {
  const url = `${BASE_URL}/manga/asurascans/search?keyw=${keyword}`;
  const response = await fetch(url);
  const data: MangaListResult = await response.json();
  return data;
}

/**
 * Represents a chapter of a manga.
 */
export interface Chapter {
  /**
   * The ID of the manga.
   */
  id: string;
  /**
   * The ID of the chapter.
   */
  chapter_id: string;
  /**
   * The name of the chapter.
   */
  name: string;
  /**
   * The date the chapter was released.
   */
  date: string;
}

/**
 * Represents detailed information about a manga.
 */
export interface MangaDetails {
  /**
   * The title of the manga.
   */
  title: string;
  /**
   * The URL of the manga cover image.
   */
  cover: string;
  /**
   * The URL of the manga banner image.
   */
  banner: string;
  /**
   * The author of the manga.
   */
  author: string;
  /**
   * The serialization of the manga.
   */
  serialization: string;
  /**
   * The artist of the manga.
   */
  artist: string;
  /**
   * The date the manga was last updated.
   */
  updated: string;
  /**
   * The status of the manga (e.g., Ongoing, Completed).
   */
  status: string;
  /**
   * The type of the manga (e.g., Manhwa, Manhua).
   */
  type: string;
  /**
   * The rating of the manga.
   */
  rating: string;
  /**
   * The genres of the manga.
   */
  genres: string[];
  /**
   * A synopsis of the manga.
   */
  synopsis: string;
  /**
   * The list of chapters in the manga.
   */
  chapters: Chapter[];
  /**
   * The related series of the manga.
   */
  related_series: Manga[];
}

/**
 * Asynchronously retrieves detailed information about a manga by its ID.
 *
 * @param id The ID of the manga.
 * @returns A promise that resolves to a MangaDetails object.
 */
export async function getMangaDetails(id: string): Promise<MangaDetails> {
  const url = `${BASE_URL}/manga/asurascans/details/${id}`;
  const response = await fetch(url);
  const data: MangaDetails = await response.json();
  return data;
}

/**
 * Represents the content of a manga chapter.
 */
export interface ChapterContent {
  /**
   * The URLs of the images in the chapter.
   */
  images: string[];
}

/**
 * Asynchronously retrieves the content (images) of a manga chapter.
 *
 * @param id The ID of the manga.
 * @param chapterId The ID of the chapter.
 * @returns A promise that resolves to a ChapterContent object.
 */
export async function getMangaChapterContent(
  id: string,
  chapterId: string
): Promise<ChapterContent> {
  const url = `${BASE_URL}/manga/asurascans/chapters/${id}/${chapterId}`;
  const response = await fetch(url);
  const data: ChapterContent = await response.json();
  return data;
}
