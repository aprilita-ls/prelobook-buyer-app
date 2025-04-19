
import { Home, BookOpen, ShoppingCart, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const BottomNavigation = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => {
    return currentPath === path;
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2 px-4 flex justify-around items-center">
      <Link to="/" className={`nav-icon ${isActive('/') ? 'text-prelobook-peach' : 'text-gray-500'}`}>
        <Home />
        <span>Home</span>
      </Link>
      <Link to="/catalog" className={`nav-icon ${isActive('/catalog') ? 'text-prelobook-peach' : 'text-gray-500'}`}>
        <BookOpen />
        <span>Catalog</span>
      </Link>
      <Link to="/cart" className={`nav-icon ${isActive('/cart') ? 'text-prelobook-peach' : 'text-gray-500'}`}>
        <ShoppingCart />
        <span>Cart</span>
      </Link>
      <Link to="/profile" className={`nav-icon ${isActive('/profile') ? 'text-prelobook-peach' : 'text-gray-500'}`}>
        <User />
        <span>Profile</span>
      </Link>
    </div>
  );
};

export default BottomNavigation;
