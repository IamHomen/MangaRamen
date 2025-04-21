"use client";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    const query = event.target.value;
    router.push(`/?keyw=${query}`);
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
