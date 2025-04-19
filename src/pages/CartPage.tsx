
import { Minus, Plus, Trash2 } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

interface CartItem {
  id: number;
  title: string;
  author: string;
  price: number;
  coverImage: string;
  quantity: number;
  seller: string;
}

// Mock cart items
const initialCartItems: CartItem[] = [
  {
    id: 1,
    title: "Atomic Habits",
    author: "James Clear",
    price: 150000,
    coverImage: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e",
    quantity: 1,
    seller: "Toko Buku Gramedia"
  },
  {
    id: 3,
    title: "Educated: A Memoir",
    author: "Tara Westover",
    price: 125000,
    coverImage: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
    quantity: 1,
    seller: "Books & Beyond"
  }
];

const CartPage = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems);
  
  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCartItems(items => 
      items.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };
  
  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };
  
  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };
  
  return (
    <div className="pb-20">
      <div className="p-4 bg-prelobook-cream">
        <h1 className="text-xl font-bold text-prelobook-blue mb-2">Keranjang Belanja</h1>
        <p className="text-gray-600">{cartItems.length} item dalam keranjang</p>
      </div>
      
      <div className="p-4">
        {cartItems.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500 mb-4">Keranjang belanja kamu kosong</p>
            <Link to="/catalog" className="prelobook-btn inline-block">
              Mulai Belanja
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-white rounded-lg p-3 shadow-sm flex">
                <Link to={`/book/${item.id}`}>
                  <img 
                    src={item.coverImage} 
                    alt={item.title} 
                    className="w-20 h-28 object-cover rounded-md" 
                  />
                </Link>
                <div className="ml-3 flex-1">
                  <div className="flex justify-between">
                    <Link to={`/book/${item.id}`} className="font-medium text-prelobook-blue">
                      {item.title}
                    </Link>
                    <button 
                      className="text-gray-400 hover:text-red-500"
                      onClick={() => removeItem(item.id)}
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                  <p className="text-sm text-gray-600">{item.author}</p>
                  <p className="text-xs text-gray-500 mt-1">{item.seller}</p>
                  <div className="flex justify-between items-end mt-2">
                    <div className="flex items-center border rounded-full overflow-hidden">
                      <button 
                        className="px-2 py-1 bg-gray-100"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus size={14} />
                      </button>
                      <span className="px-3">{item.quantity}</span>
                      <button 
                        className="px-2 py-1 bg-gray-100"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                    <span className="font-semibold text-prelobook-peach">
                      Rp{item.price.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            ))}
            
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h2 className="font-semibold text-prelobook-blue mb-3">Ringkasan Belanja</h2>
              <div className="space-y-2 text-sm mb-4">
                <div className="flex justify-between">
                  <span>Total Harga ({cartItems.length} item)</span>
                  <span>Rp{calculateSubtotal().toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Biaya Pengiriman</span>
                  <span>Rp15.000</span>
                </div>
                <div className="border-t border-gray-200 pt-2 mt-2 flex justify-between font-semibold">
                  <span>Total Belanja</span>
                  <span className="text-prelobook-peach">
                    Rp{(calculateSubtotal() + 15000).toLocaleString()}
                  </span>
                </div>
              </div>
              <button className="w-full prelobook-btn">
                Lanjut ke Pembayaran
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
