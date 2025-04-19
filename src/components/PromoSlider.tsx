
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PromoSlide {
  id: number;
  image: string;
  title: string;
}

const promos: PromoSlide[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d",
    title: "Summer Reading Sale"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0",
    title: "New Academic Books"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
    title: "Book Exchange Week"
  }
];

const PromoSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === promos.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? promos.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-40 rounded-xl overflow-hidden">
      {promos.map((promo, index) => (
        <div
          key={promo.id}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={promo.image}
            alt={promo.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
            <h3 className="text-white font-bold text-lg">{promo.title}</h3>
          </div>
        </div>
      ))}
      
      <button 
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-1"
        onClick={prevSlide}
      >
        <ChevronLeft size={20} className="text-prelobook-blue" />
      </button>
      <button 
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-1"
        onClick={nextSlide}
      >
        <ChevronRight size={20} className="text-prelobook-blue" />
      </button>
      
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1">
        {promos.map((_, index) => (
          <div 
            key={index}
            className={`w-2 h-2 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-white/50'}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default PromoSlider;
