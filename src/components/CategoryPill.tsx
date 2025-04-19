
interface CategoryPillProps {
  name: string;
  icon: React.ReactNode;
  onClick?: () => void;
}

const CategoryPill = ({ name, icon, onClick }: CategoryPillProps) => {
  return (
    <button 
      className="flex flex-col items-center justify-center p-2 category-pill"
      onClick={onClick}
    >
      <div className="w-12 h-12 rounded-full bg-prelobook-cream flex items-center justify-center mb-1">
        {icon}
      </div>
      <span className="text-xs font-medium">{name}</span>
    </button>
  );
};

export default CategoryPill;
