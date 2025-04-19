
import { Filter, Grid, List, SortDesc } from "lucide-react";
import { useState } from "react";
import BookCard, { Book } from "../components/BookCard";
import SearchBar from "../components/SearchBar";

// Mock data for catalog books
const catalogBooks: Book[] = [
  {
    id: 1,
    title: "Atomic Habits",
    author: "James Clear",
    price: 150000,
    coverImage: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e",
    rating: 4.8,
    condition: "Baru"
  },
  {
    id: 2,
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    price: 185000,
    coverImage: "https://images.unsplash.com/photo-1544947950-fa07a98d237f",
    rating: 4.7,
    condition: "Sangat Baik"
  },
  {
    id: 3,
    title: "Educated: A Memoir",
    author: "Tara Westover",
    price: 125000,
    coverImage: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
    rating: 4.5,
    condition: "Baik"
  },
  {
    id: 4,
    title: "The Psychology of Money",
    author: "Morgan Housel",
    price: 135000,
    coverImage: "https://images.unsplash.com/photo-1589998059171-988d887df646",
    rating: 4.6,
    condition: "Baru"
  },
  {
    id: 5,
    title: "Think and Grow Rich",
    author: "Napoleon Hill",
    price: 120000,
    coverImage: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c",
    rating: 4.4,
    condition: "Baru"
  },
  {
    id: 6,
    title: "The Alchemist",
    author: "Paulo Coelho",
    price: 110000,
    coverImage: "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6",
    rating: 4.9,
    condition: "Baik"
  },
];

type ViewMode = "grid" | "list";

const CatalogPage = () => {
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [filterOpen, setFilterOpen] = useState(false);
  
  return (
    <div className="pb-20">
      <div className="p-4 bg-prelobook-cream">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold text-prelobook-blue">Katalog Buku</h1>
          <div className="flex space-x-2">
            <button 
              className={`p-2 rounded-full ${viewMode === 'grid' ? 'bg-prelobook-peach text-white' : 'bg-white text-prelobook-blue'}`}
              onClick={() => setViewMode('grid')}
            >
              <Grid size={18} />
            </button>
            <button 
              className={`p-2 rounded-full ${viewMode === 'list' ? 'bg-prelobook-peach text-white' : 'bg-white text-prelobook-blue'}`}
              onClick={() => setViewMode('list')}
            >
              <List size={18} />
            </button>
          </div>
        </div>
        
        <SearchBar placeholder="Cari di katalog..." />
        
        <div className="flex gap-2 mt-4">
          <button 
            className="flex items-center gap-1 category-pill"
            onClick={() => setFilterOpen(!filterOpen)}
          >
            <Filter size={14} />
            <span>Filter</span>
          </button>
          
          <button className="flex items-center gap-1 category-pill">
            <SortDesc size={14} />
            <span>Urutkan</span>
          </button>
        </div>
        
        {filterOpen && (
          <div className="mt-4 p-4 bg-white rounded-lg shadow-md">
            <h3 className="font-medium mb-2">Kategori</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-prelobook-cream text-prelobook-blue px-3 py-1 rounded-full text-sm">Novel</span>
              <span className="bg-prelobook-cream text-prelobook-blue px-3 py-1 rounded-full text-sm">Akademik</span>
              <span className="bg-prelobook-cream text-prelobook-blue px-3 py-1 rounded-full text-sm">Fiksi</span>
              <span className="bg-prelobook-cream text-prelobook-blue px-3 py-1 rounded-full text-sm">Pengembangan Diri</span>
            </div>
            
            <h3 className="font-medium mb-2">Kondisi</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-prelobook-cream text-prelobook-blue px-3 py-1 rounded-full text-sm">Baru</span>
              <span className="bg-prelobook-cream text-prelobook-blue px-3 py-1 rounded-full text-sm">Sangat Baik</span>
              <span className="bg-prelobook-cream text-prelobook-blue px-3 py-1 rounded-full text-sm">Baik</span>
            </div>
            
            <h3 className="font-medium mb-2">Rentang Harga</h3>
            <div className="flex items-center gap-2">
              <input 
                type="text" 
                placeholder="Min" 
                className="w-full p-2 border rounded-md"
              />
              <span>-</span>
              <input 
                type="text" 
                placeholder="Max" 
                className="w-full p-2 border rounded-md"
              />
            </div>
            
            <button className="mt-4 w-full prelobook-btn">
              Terapkan Filter
            </button>
          </div>
        )}
      </div>
      
      <div className="p-4">
        <div className={viewMode === 'grid' ? 'grid grid-cols-2 gap-4' : 'space-y-4'}>
          {catalogBooks.map(book => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CatalogPage;
