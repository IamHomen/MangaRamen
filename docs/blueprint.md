# **App Name**: AsuraReader

## Core Features:

- Manga Listing: Display a grid of manga covers fetched from the AsuraScans API, sorted by the selected criteria (update, rating, bookmarks, desc, asc).
- Manga Search: Implement a search bar that allows users to search for manga by title using the AsuraScans API.
- Manga Details: Display detailed information about a selected manga, including cover, banner, author, artist, synopsis, genres, and a list of chapters fetched from the AsuraScans API.
- Chapter Reader: Display the images of a selected manga chapter fetched from the AsuraScans API, allowing users to read the manga.

## Style Guidelines:

- Primary color: Dark background (#121212) for comfortable reading.
- Secondary color: Light grey (#E0E0E0) for text and UI elements.
- Accent: Teal (#009688) for interactive elements and highlights.
- Use a grid-based layout for manga listings to ensure a clean and organized presentation.
- Implement a responsive design that adapts to different screen sizes and devices.

## Original User Request:
create me a manga reading website using nextjs

api url: https://homen-api.vercel.app/

api routes end point:
          "route": "/manga/asurascans/sort-manga?sort=update&page=1",
          "description": "Get sorted manga from AsuraScans"
          sort type (update, rating, bookmarks, desc, asc )

          "route": "/manga/asurascans/search?keyw=Solo Leveling",
          "description": "Search manga on AsuraScans"

          "route": "/manga/asurascans/details/:id",
          "description": "Get manga details from AsuraScans"

          "route": "/manga/asurascans/chapters/:id/:chapter_id",
          "description": "Get manga chapters from AsuraScans"


response of sort-manga route:
{
  "currentPage": "1",
  "hasNextPage": true,
  "hasPrevPage": false,
  "results": [
    {
      "title": "The Hero Returns",
      "cover": "https://gg.asuracomic.net/storage/media/26/conversions/e67cec65-thumb-small.webp",
      "id": "the-hero-returns-9f9eae7a",
      "latest_chapter": "122",
      "rating": "9.9",
      "status": "Ongoing",
      "type": "MANHWA"
    },
    {
      "title": "Overpowered Sword",
      "cover": "https://gg.asuracomic.net/storage/media/107/conversions/7a7d5385-thumb-small.webp",
      "id": "overpowered-sword-9f96e4fe",
      "latest_chapter": "142",
      "rating": "9.7",
      "status": "Ongoing",
      "type": "MANHWA"
    },
    {
      "title": "Player Who Can't Level Up",
      "cover": "https://gg.asuracomic.net/storage/media/263608/conversions/01JH5TBN2T87D48PVY7BD1TTNH-thumb-small.webp",
      "id": "player-who-cant-level-up-c373cee0",
      "latest_chapter": "181",
      "rating": "9.9",
      "status": "Season End",
      "type": "MANHWA"
    },
    {
      "title": "Your Talent is Mine",
      "cover": "https://gg.asuracomic.net/storage/media/17/conversions/11d8b8cd-thumb-small.webp",
      "id": "your-talent-is-mine-3309f9a9",
      "latest_chapter": "100",
      "rating": "9.5",
      "status": "Ongoing",
      "type": "MANHUA"
    },
    {
      "title": "The Tutorial is Too Hard",
      "cover": "https://gg.asuracomic.net/storage/media/145/conversions/af610648-thumb-small.webp",
      "id": "the-tutorial-is-too-hard-189563a2",
      "latest_chapter": "214",
      "rating": "8.7",
      "status": "Ongoing",
      "type": "MANHWA"
    },
    {
      "title": "Player Who Returned 10,000 Years Later",
      "cover": "https://gg.asuracomic.net/storage/media/279383/conversions/01JNYM905495Q802DXMN0QWK79-thumb-small.webp",
      "id": "player-who-returned-10000-years-later-b7ceacec",
      "latest_chapter": "111",
      "rating": "9.8",
      "status": "Ongoing",
      "type": "MANHWA"
    },
    {
      "title": "The Regressed Son of a Duke is an Assass...",
      "cover": "https://gg.asuracomic.net/storage/media/220/conversions/a2db97ee-thumb-small.webp",
      "id": "the-regressed-son-of-a-duke-is-an-assassin-40b8152a",
      "latest_chapter": "71",
      "rating": "9.8",
      "status": "Ongoing",
      "type": "MANHWA"
    },
    {
      "title": "Revenge of the Iron-Blooded Sword Hound",
      "cover": "https://gg.asuracomic.net/storage/media/298/conversions/01J7TV2G7719CVSTSW9T9M6F31-thumb-small.webp",
      "id": "revenge-of-the-iron-blooded-sword-hound-4929f3c8",
      "latest_chapter": "109",
      "rating": "9.8",
      "status": "Ongoing",
      "type": "MANHWA"
    },
    {
      "title": "Surviving as a Genius on Borrowed Time",
      "cover": "https://gg.asuracomic.net/storage/media/245477/conversions/01JA6F7WP3N7Q1QCQ0EWFVYNWY-thumb-small.webp",
      "id": "surviving-as-a-genius-on-borrowed-time-85d49343",
      "latest_chapter": "34",
      "rating": "9.9",
      "status": "Ongoing",
      "type": "MANHWA"
    },
    {
      "title": "Love Letter From The Future",
      "cover": "https://gg.asuracomic.net/storage/media/277797/conversions/01JNFSVFZ7EKT586PN0DSPEWYK-thumb-small.webp",
      "id": "love-letter-from-the-future-c63da328",
      "latest_chapter": "29",
      "rating": "9.7",
      "status": "Ongoing",
      "type": "MANHWA"
    },
    {
      "title": "Genius Archer’s Streaming",
      "cover": "https://gg.asuracomic.net/storage/media/225/conversions/68b6a264-thumb-small.webp",
      "id": "genius-archers-streaming-576824ab",
      "latest_chapter": "58",
      "rating": "9.8",
      "status": "Ongoing",
      "type": "MANHWA"
    },
    {
      "title": "The Illegitimate Who Devours Weapons",
      "cover": "https://gg.asuracomic.net/storage/media/283204/conversions/01JQ9F38EE3KFT2V79A3KCK0XH-thumb-small.webp",
      "id": "the-illegitimate-who-devours-weapons-81b8ef25",
      "latest_chapter": "26",
      "rating": "9.6",
      "status": "Ongoing",
      "type": "MANHWA"
    },
    {
      "title": "The Nebula's Civilization",
      "cover": "https://gg.asuracomic.net/storage/media/110/conversions/3656ed0f-thumb-small.webp",
      "id": "the-nebulas-civilization-6d0f1d06",
      "latest_chapter": "86",
      "rating": "9.8",
      "status": "Ongoing",
      "type": "MANHWA"
    },
    {
      "title": "Surviving The Game as a Barbarian",
      "cover": "https://gg.asuracomic.net/storage/media/125/conversions/ed5d5826-thumb-small.webp",
      "id": "surviving-the-game-as-a-barbarian-f202e9d8",
      "latest_chapter": "102",
      "rating": "9.9",
      "status": "Ongoing",
      "type": "MANHWA"
    },
    {
      "title": "What a Bountiful Harvest, Demon Lord!",
      "cover": "https://gg.asuracomic.net/storage/media/285461/conversions/01JR86KRMREWSXKGZTQCKX96M1-thumb-small.webp",
      "id": "what-a-bountiful-harvest-demon-lord-99d35731",
      "latest_chapter": "11",
      "rating": "9.7",
      "status": "Ongoing",
      "type": "MANHWA"
    }
  ]
}

search route 
https://homen-api.vercel.app/manga/asurascans/search?keyw=solo%20leveling
{
  "currentPage": "1",
  "hasNextPage": true,
  "hasPrevPage": false,
  "results": [
    {
      "title": "Solo Leveling: Ragnarok",
      "cover": "https://gg.asuracomic.net/storage/media/271/conversions/01J3QRQXHSBQVGA2KHKP2D3S3S-thumb-small.webp",
      "id": "solo-leveling-ragnarok-71d88da7",
      "latest_chapter": "47",
      "rating": "9.7",
      "status": "Ongoing",
      "type": "MANHWA"
    },
    {
      "title": "Solo Leveling",
      "cover": "https://gg.asuracomic.net/storage/media/256/conversions/01J3BAXFBTABT3VNAV3RPNZK7S-thumb-small.webp",
      "id": "solo-leveling-bb6e4973",
      "latest_chapter": "200",
      "rating": "10",
      "status": "Completed",
      "type": "MANHWA"
    }
  ]
}

manga details route 
https://homen-api.vercel.app/manga/asurascans/details/solo-leveling-ragnarok-71d88da7
{
  "title": "Solo Leveling: Ragnarok",
  "cover": "https://gg.asuracomic.net/storage/media/271/conversions/01J3QRQXHSBQVGA2KHKP2D3S3S-optimized.webp",
  "banner": "https://gg.asuracomic.net/storage/media/272/conversions/01J3QRQXK5EAC1GTBF7P5JSVPV-optimized.webp",
  "author": "Daul",
  "serialization": "_",
  "artist": "Jin (Redice Studio)",
  "updated": "April 21st 2025",
  "status": "Ongoing",
  "type": "Manhwa",
  "rating": "9.7",
  "genres": [
    "Action",
    "Adventure",
    "Fantasy"
  ],
  "synopsis": "[By Redice studio that brought you \u003CSolo Leveling\u003E!]\nThe Earth's existence is under threat once more as Itarim, the gods of other universes, seek to fill the void left by the Absolute Being. Sung Jinwoo has no choice but to send Beru, the shadow ant king, to awaken his son's powers and start him on the journey he once took. Suho must conquer the shadow dungeon and earn his place in the world of hunters as he navigates through a new world against a new evil looking to swallow the world whole.",
  "chapters": [
    {
      "id": "solo-leveling-ragnarok-71d88da7",
      "chapter_id": "47",
      "name": "Chapter 47{S1 END}",
      "date": "April 2nd 2025"
    },
    {
      "id": "solo-leveling-ragnarok-71d88da7",
      "chapter_id": "46",
      "name": "Chapter 46",
      "date": "March 26th 2025"
    },
    {
      "id": "solo-leveling-ragnarok-71d88da7",
      "chapter_id": "45",
      "name": "Chapter 45",
      "date": "March 12th 2025"
    },
    {
      "id": "solo-leveling-ragnarok-71d88da7",
      "chapter_id": "44",
      "name": "Chapter 44",
      "date": "March 5th 2025"
    },
    {
      "id": "solo-leveling-ragnarok-71d88da7",
      "chapter_id": "43",
      "name": "Chapter 43",
      "date": "February 26th 2025"
    },
    {
      "id": "solo-leveling-ragnarok-71d88da7",
      "chapter_id": "42",
      "name": "Chapter 42",
      "date": "February 19th 2025"
    },
    {
      "id": "solo-leveling-ragnarok-71d88da7",
      "chapter_id": "41",
      "name": "Chapter 41",
      "date": "February 12th 2025"
    },
    {
      "id": "solo-leveling-ragnarok-71d88da7",
      "chapter_id": "40",
      "name": "Chapter 40",
      "date": "February 5th 2025"
    },
    {
      "id": "solo-leveling-ragnarok-71d88da7",
      "chapter_id": "39",
      "name": "Chapter 39",
      "date": "January 29th 2025"
    },
    {
      "id": "solo-leveling-ragnarok-71d88da7",
      "chapter_id": "38",
      "name": "Chapter 38",
      "date": "January 22nd 2025"
    },
    {
      "id": "solo-leveling-ragnarok-71d88da7",
      "chapter_id": "37",
      "name": "Chapter 37",
      "date": "January 15th 2025"
    },
    {
      "id": "solo-leveling-ragnarok-71d88da7",
      "chapter_id": "36",
      "name": "Chapter 36",
      "date": "January 8th 2025"
    },
    {
      "id": "solo-leveling-ragnarok-71d88da7",
      "chapter_id": "35",
      "name": "Chapter 35",
      "date": "January 1st 2025"
    },
    {
      "id": "solo-leveling-ragnarok-71d88da7",
      "chapter_id": "34",
      "name": "Chapter 34",
      "date": "December 25th 2024"
    },
    {
      "id": "solo-leveling-ragnarok-71d88da7",
      "chapter_id": "33",
      "name": "Chapter 33",
      "date": "December 18th 2024"
    },
    {
      "id": "solo-leveling-ragnarok-71d88da7",
      "chapter_id": "32",
      "name": "Chapter 32",
      "date": "December 11th 2024"
    },
    {
      "id": "solo-leveling-ragnarok-71d88da7",
      "chapter_id": "31",
      "name": "Chapter 31",
      "date": "December 4th 2024"
    },
    {
      "id": "solo-leveling-ragnarok-71d88da7",
      "chapter_id": "30",
      "name": "Chapter 30",
      "date": "November 27th 2024"
    },
    {
      "id": "solo-leveling-ragnarok-71d88da7",
      "chapter_id": "29",
      "name": "Chapter 29",
      "date": "November 20th 2024"
    },
    {
      "id": "solo-leveling-ragnarok-71d88da7",
      "chapter_id": "28",
      "name": "Chapter 28",
      "date": "November 13th 2024"
    },
    {
      "id": "solo-leveling-ragnarok-71d88da7",
      "chapter_id": "27",
      "name": "Chapter 27",
      "date": "November 6th 2024"
    },
    {
      "id": "solo-leveling-ragnarok-71d88da7",
      "chapter_id": "26",
      "name": "Chapter 26",
      "date": "October 30th 2024"
    },
    {
      "id": "solo-leveling-ragnarok-71d88da7",
      "chapter_id": "25",
      "name": "Chapter 25",
      "date": "October 23rd 2024"
    },
    {
      "id": "solo-leveling-ragnarok-71d88da7",
      "chapter_id": "24",
      "name": "Chapter 24",
      "date": "October 16th 2024"
    },
    {
      "id": "solo-leveling-ragnarok-71d88da7",
      "chapter_id": "23",
      "name": "Chapter 23",
      "date": "October 9th 2024"
    },
    {
      "id": "solo-leveling-ragnarok-71d88da7",
      "chapter_id": "22",
      "name": "Chapter 22",
      "date": "October 2nd 2024"
    },
    {
      "id": "solo-leveling-ragnarok-71d88da7",
      "chapter_id": "21",
      "name": "Chapter 21",
      "date": "September 25th 2024"
    },
    {
      "id": "solo-leveling-ragnarok-71d88da7",
      "chapter_id": "20",
      "name": "Chapter 20",
      "date": "September 18th 2024"
    },
    {
      "id": "solo-leveling-ragnarok-71d88da7",
      "chapter_id": "19",
      "name": "Chapter 19",
      "date": "September 11th 2024"
    },
    {
      "id": "solo-leveling-ragnarok-71d88da7",
      "chapter_id": "18",
      "name": "Chapter 18",
      "date": "September 4th 2024"
    },
    {
      "id": "solo-leveling-ragnarok-71d88da7",
      "chapter_id": "17",
      "name": "Chapter 17",
      "date": "August 28th 2024"
    },
    {
      "id": "solo-leveling-ragnarok-71d88da7",
      "chapter_id": "16",
      "name": "Chapter 16",
      "date": "August 21st 2024"
    },
    {
      "id": "solo-leveling-ragnarok-71d88da7",
      "chapter_id": "15",
      "name": "Chapter 15",
      "date": "August 14th 2024"
    },
    {
      "id": "solo-leveling-ragnarok-71d88da7",
      "chapter_id": "14",
      "name": "Chapter 14",
      "date": "August 7th 2024"
    },
    {
      "id": "solo-leveling-ragnarok-71d88da7",
      "chapter_id": "13",
      "name": "Chapter 13",
      "date": "July 31st 2024"
    },
    {
      "id": "solo-leveling-ragnarok-71d88da7",
      "chapter_id": "12",
      "name": "Chapter 12",
      "date": "July 31st 2024"
    },
    {
      "id": "solo-leveling-ragnarok-71d88da7",
      "chapter_id": "11",
      "name": "Chapter 11",
      "date": "July 31st 2024"
    },
    {
      "id": "solo-leveling-ragnarok-71d88da7",
      "chapter_id": "10",
      "name": "Chapter 10",
      "date": "July 31st 2024"
    },
    {
      "id": "solo-leveling-ragnarok-71d88da7",
      "chapter_id": "9",
      "name": "Chapter 9",
      "date": "July 31st 2024"
    },
    {
      "id": "solo-leveling-ragnarok-71d88da7",
      "chapter_id": "8",
      "name": "Chapter 8",
      "date": "July 31st 2024"
    },
    {
      "id": "solo-leveling-ragnarok-71d88da7",
      "chapter_id": "7",
      "name": "Chapter 7",
      "date": "July 31st 2024"
    },
    {
      "id": "solo-leveling-ragnarok-71d88da7",
      "chapter_id": "6",
      "name": "Chapter 6",
      "date": "July 31st 2024"
    },
    {
      "id": "solo-leveling-ragnarok-71d88da7",
      "chapter_id": "5",
      "name": "Chapter 5",
      "date": "July 31st 2024"
    },
    {
      "id": "solo-leveling-ragnarok-71d88da7",
      "chapter_id": "4",
      "name": "Chapter 4",
      "date": "July 31st 2024"
    },
    {
      "id": "solo-leveling-ragnarok-71d88da7",
      "chapter_id": "3",
      "name": "Chapter 3",
      "date": "July 31st 2024"
    },
    {
      "id": "solo-leveling-ragnarok-71d88da7",
      "chapter_id": "2",
      "name": "Chapter 2",
      "date": "July 31st 2024"
    },
    {
      "id": "solo-leveling-ragnarok-71d88da7",
      "chapter_id": "1",
      "name": "Chapter 1",
      "date": "July 31st 2024"
    }
  ],
  "related_series": [
    {
      "title": "Solo Max-Level Newbie",
      "cover": "https://gg.asuracomic.net/storage/media/272496/conversions/01JMHFP0DBPD906JMCZNAKG1RH-optimized.webp",
      "id": "solo-max-level-newbie-459f9e85",
      "latest_chapter": "203",
      "rating": "9.9",
      "status": "Ongoing"
    },
    {
      "title": "Regressor Instruction Manual",
      "cover": "https://gg.asuracomic.net/storage/media/276/conversions/01J4CG9ADBTWY617STXHGNTBKP-optimized.webp",
      "id": "regressor-instruction-manual-4d8239e0",
      "latest_chapter": "134",
      "rating": "10",
      "status": "Ongoing"
    },
    {
      "title": "Duke Pendragon",
      "cover": "https://gg.asuracomic.net/storage/media/18/conversions/44b24afa-optimized.webp",
      "id": "duke-pendragon-f5195708",
      "latest_chapter": "132",
      "rating": "9.9",
      "status": "Ongoing"
    },
    {
      "title": "The Hero Returns",
      "cover": "https://gg.asuracomic.net/storage/media/26/conversions/e67cec65-optimized.webp",
      "id": "the-hero-returns-9f9eae7a",
      "latest_chapter": "122",
      "rating": "9.9",
      "status": "Ongoing"
    }
  ]
}
  
  