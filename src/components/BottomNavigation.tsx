
import { Home, BookOpen, ShoppingCart, User, BookCopy, GraduationCap } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const BottomNavigation = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => {
    return currentPath === path;
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2 px-4 grid grid-cols-6 items-center">
      <Link to="/" className={`nav-icon ${isActive('/') ? 'text-prelobook-peach' : 'text-gray-500'}`}>
        <Home />
        <span>Beranda</span>
      </Link>
      <Link to="/catalog" className={`nav-icon ${isActive('/catalog') ? 'text-prelobook-peach' : 'text-gray-500'}`}>
        <BookOpen />
        <span>Katalog</span>
      </Link>
      <Link to="/academic-packages" className={`nav-icon ${isActive('/academic-packages') ? 'text-prelobook-peach' : 'text-gray-500'}`}>
        <GraduationCap />
        <span>Akademik</span>
      </Link>
      <Link to="/book-exchange" className={`nav-icon ${isActive('/book-exchange') ? 'text-prelobook-peach' : 'text-gray-500'}`}>
        <BookCopy />
        <span>Tukar</span>
      </Link>
      <Link to="/cart" className={`nav-icon ${isActive('/cart') ? 'text-prelobook-peach' : 'text-gray-500'}`}>
        <ShoppingCart />
        <span>Keranjang</span>
      </Link>
      <Link to="/profile" className={`nav-icon ${isActive('/profile') ? 'text-prelobook-peach' : 'text-gray-500'}`}>
        <User />
        <span>Profil</span>
      </Link>
    </div>
  );
};

export default BottomNavigation;
