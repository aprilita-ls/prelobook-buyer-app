
import { Search } from "lucide-react";
import { useState } from "react";

interface SearchBarProps {
  onSearch?: (query: string) => void;
  placeholder?: string;
}

const SearchBar = ({ 
  onSearch,
  placeholder = "Cari buku, penulis, atau topik..."
}: SearchBarProps) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-full">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-full border-2 border-prelobook-peach bg-white py-2 pl-10 pr-4 text-sm"
      />
      <div className="absolute inset-y-0 left-0 flex items-center pl-3">
        <Search size={18} className="text-gray-400" />
      </div>
    </form>
  );
};

export default SearchBar;
