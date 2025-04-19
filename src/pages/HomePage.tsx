import { Book, BookOpen, GraduationCap } from "lucide-react";
import { useState } from "react";
import BookCard, { Book as BookType } from "../components/BookCard";
import CategoryPill from "../components/CategoryPill";
import PromoSlider from "../components/PromoSlider";
import SearchBar from "../components/SearchBar";

// Mock data for recommended books
const recommendedBooks: BookType[] = [
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
    title: "Sapiens",
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
];

const categories = [
  { id: 1, name: "Fiksi", icon: <BookOpen className="text-prelobook-peach" size={24} /> },
  { id: 2, name: "Akademik", icon: <GraduationCap className="text-prelobook-peach" size={24} /> },
];

const HomePage = () => {
  const [userName] = useState("Intan");
  
  return (
    <div className="pb-20">
      <div className="p-4 bg-prelobook-cream">
        <h1 className="text-2xl font-bold text-prelobook-blue mb-4">
          Halo, {userName}
        </h1>
        
        <SearchBar />
        
        <div className="mt-4">
          <PromoSlider />
        </div>
        
        <div className="mt-6">
          <h2 className="text-lg font-semibold text-prelobook-blue mb-3">Kategori</h2>
          <div className="flex gap-3 overflow-x-auto pb-2 -mx-1 px-1">
            {categories.map(category => (
              <CategoryPill 
                key={category.id}
                name={category.name}
                icon={category.icon}
              />
            ))}
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-lg font-semibold text-prelobook-blue">Rekomendasi Buku</h2>
          <button className="text-prelobook-peach text-sm font-medium">Lihat semua</button>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          {recommendedBooks.map(book => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
