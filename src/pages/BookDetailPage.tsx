
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ChevronLeft, Heart, MessageCircle, ShoppingCart, Star } from "lucide-react";

// Mock book detail data
const bookDetail = {
  id: 1,
  title: "Atomic Habits",
  author: "James Clear",
  publisher: "Penguin Random House",
  year: "2018",
  price: 150000,
  coverImage: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e",
  rating: 4.8,
  condition: "Baru",
  description: "Atomic Habits offers a proven framework for improving every day. James Clear, one of the world's leading experts on habit formation, reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results.\n\nIf you're having trouble changing your habits, the problem isn't you. The problem is your system. Bad habits repeat themselves again and again not because you don't want to change, but because you have the wrong system for change. You do not rise to the level of your goals. You fall to the level of your systems.",
  seller: {
    id: 1,
    name: "Toko Buku Gramedia",
    rating: 4.9,
    sales: 1250
  }
};

const BookDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [isInWishlist, setIsInWishlist] = useState(false);
  
  // In a real app, you would fetch the book details based on the ID
  console.log("Book ID:", id);
  
  const toggleWishlist = () => {
    setIsInWishlist(!isInWishlist);
  };
  
  return (
    <div className="pb-20">
      <div className="relative h-64">
        <img 
          src={bookDetail.coverImage} 
          alt={bookDetail.title}
          className="w-full h-full object-cover" 
        />
        <div className="absolute top-4 left-4 bg-white rounded-full p-2">
          <Link to="/catalog">
            <ChevronLeft size={24} className="text-prelobook-blue" />
          </Link>
        </div>
        <button 
          className={`absolute top-4 right-4 rounded-full p-2 ${
            isInWishlist ? 'bg-prelobook-peach text-white' : 'bg-white text-prelobook-blue'
          }`}
          onClick={toggleWishlist}
        >
          <Heart size={24} fill={isInWishlist ? "currentColor" : "none"} />
        </button>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-xl font-bold text-prelobook-blue">{bookDetail.title}</h1>
            <p className="text-gray-600">{bookDetail.author}</p>
          </div>
          <span className="text-xl font-bold text-prelobook-peach">
            Rp{bookDetail.price.toLocaleString()}
          </span>
        </div>
        
        <div className="flex items-center mt-2">
          <div className="flex items-center text-yellow-500">
            <Star size={16} fill="currentColor" />
            <span className="ml-1">{bookDetail.rating}</span>
          </div>
          <span className="ml-3 px-2 py-0.5 rounded-full bg-prelobook-cream text-prelobook-blue text-sm">
            {bookDetail.condition}
          </span>
        </div>
        
        <div className="mt-4">
          <h2 className="font-semibold text-prelobook-blue">Detail Buku</h2>
          <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
            <div className="text-gray-600">Penerbit</div>
            <div>{bookDetail.publisher}</div>
            <div className="text-gray-600">Tahun Terbit</div>
            <div>{bookDetail.year}</div>
          </div>
        </div>
        
        <div className="mt-4">
          <h2 className="font-semibold text-prelobook-blue">Deskripsi</h2>
          <p className="mt-2 text-sm text-gray-700 whitespace-pre-line">{bookDetail.description}</p>
        </div>
        
        <div className="mt-4 p-3 bg-white rounded-lg border border-gray-200">
          <h2 className="font-semibold text-prelobook-blue">Penjual</h2>
          <div className="flex justify-between items-center mt-2">
            <div>
              <div className="font-medium">{bookDetail.seller.name}</div>
              <div className="flex items-center text-sm text-gray-600">
                <Star size={14} className="text-yellow-500" fill="currentColor" />
                <span className="ml-1">{bookDetail.seller.rating}</span>
                <span className="mx-1">•</span>
                <span>{bookDetail.seller.sales} produk terjual</span>
              </div>
            </div>
            <Link 
              to={`/chat/${bookDetail.seller.id}`}
              className="flex items-center text-prelobook-peach"
            >
              <MessageCircle size={18} />
              <span className="ml-1 text-sm">Chat</span>
            </Link>
          </div>
        </div>
        
        <div className="mt-6 flex space-x-3">
          <button className="flex-1 prelobook-btn-outline flex items-center justify-center">
            <ShoppingCart size={18} className="mr-2" />
            Keranjang
          </button>
          <button className="flex-1 prelobook-btn">
            Beli Sekarang
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetailPage;
