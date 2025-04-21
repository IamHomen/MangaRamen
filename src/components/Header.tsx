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

interface HeaderProps {
  onSearchChange: (searchTerm: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearchChange }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    onSearchChange(searchTerm);
  }, [searchTerm, onSearchChange]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      onSearchChange(searchTerm);
    }
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
            onKeyDown={handleSubmit}
            className="max-w-md sm:w-64"
            ref={inputRef}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
