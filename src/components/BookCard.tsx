
import { ShoppingCart, Star } from "lucide-react";
import { Link } from "react-router-dom";

export interface Book {
  id: number;
  title: string;
  author: string;
  price: number;
  coverImage: string;
  rating: number;
  condition?: string;
}

interface BookCardProps {
  book: Book;
  showAddToCart?: boolean;
}

const BookCard = ({ book, showAddToCart = true }: BookCardProps) => {
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("Add to cart:", book.id);
    // Add cart functionality here
  };

  return (
    <Link to={`/book/${book.id}`} className="book-card">
      <img 
        src={book.coverImage} 
        alt={book.title} 
        className="book-cover"
      />
      <div className="book-info">
        <h3 className="font-medium text-sm line-clamp-2 mb-1">{book.title}</h3>
        <p className="text-xs text-gray-600 mb-1">{book.author}</p>
        {book.condition && (
          <span className="text-xs text-prelobook-blue bg-prelobook-cream px-2 py-0.5 rounded-full inline-block mb-1">
            {book.condition}
          </span>
        )}
        <div className="flex items-center mt-auto">
          <div className="flex items-center text-yellow-500 mr-2">
            <Star size={12} fill="currentColor" />
            <span className="text-xs ml-1">{book.rating}</span>
          </div>
          <span className="text-prelobook-peach font-bold ml-auto">Rp{book.price.toLocaleString()}</span>
        </div>
        {showAddToCart && (
          <button 
            onClick={handleAddToCart}
            className="mt-2 w-full prelobook-btn flex items-center justify-center text-xs"
          >
            <ShoppingCart size={14} className="mr-1" />
            Add to Cart
          </button>
        )}
      </div>
    </Link>
  );
};

export default BookCard;
