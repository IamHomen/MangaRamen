"use client";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState, useEffect, useRef, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const sort = searchParams.get("sort") || "update";

  // Debounce function
  const debounce = (func: (value: string) => void, delay: number) => {
    let timeoutId: NodeJS.Timeout;
    return function debounced(value: string) {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        func(value);
      }, delay);
    };
  };

  const pushRouter = (query: string) => {
    router.push(`/?keyw=${query}&sort=${sort}`, { shallow: true });
  };

  const debouncedPushRouter = useCallback(debounce(pushRouter, 300), [router, sort]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchTerm(query);
    debouncedPushRouter(query);
  };

  return (
    <header className="bg-background border-b border-border py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-lg font-bold">Manga Ramen</div>

        <div className="flex items-center space-x-4">
          <Input
            type="text"
            placeholder="Search manga..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="max-w-md sm:w-64"
            ref={inputRef}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
