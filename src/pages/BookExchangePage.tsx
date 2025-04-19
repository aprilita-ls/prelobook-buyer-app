
import { useState } from "react";
import { Filter, BookCopy } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Book } from "@/components/BookCard";

interface ExchangeBook extends Book {
  owner: string;
  condition: string;
}

const exchangeBooks: ExchangeBook[] = [
  {
    id: 1,
    title: "Atomic Habits",
    author: "James Clear",
    price: 150000,
    coverImage: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e",
    rating: 4.8,
    condition: "Sangat Baik",
    owner: "Ali"
  },
  {
    id: 2,
    title: "Sapiens",
    author: "Yuval Noah Harari",
    price: 185000,
    coverImage: "https://images.unsplash.com/photo-1544947950-fa07a98d237f",
    rating: 4.7,
    condition: "Baik",
    owner: "Siti"
  }
];

const BookExchangePage = () => {
  const [selectedBook, setSelectedBook] = useState<ExchangeBook | null>(null);

  return (
    <div className="p-4 pb-20">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-prelobook-blue">
          Tukar Tambah Buku
        </h1>
        <Button variant="outline" className="gap-2">
          <Filter size={16} />
          Filter
        </Button>
      </div>

      <div className="grid gap-4">
        {exchangeBooks.map((book) => (
          <Card key={book.id} className="p-4">
            <div className="flex gap-4">
              <img 
                src={book.coverImage} 
                alt={book.title}
                className="w-24 h-32 object-cover rounded"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-prelobook-blue">{book.title}</h3>
                <p className="text-sm text-gray-600">{book.author}</p>
                <div className="flex items-center gap-2 mt-1">
                  <BookCopy size={16} className="text-prelobook-peach" />
                  <span className="text-sm">{book.condition}</span>
                </div>
                <p className="text-sm mt-1">Pemilik: {book.owner}</p>
                <Sheet>
                  <SheetTrigger asChild>
                    <Button 
                      className="mt-2 bg-prelobook-peach hover:bg-prelobook-peach/90"
                      onClick={() => setSelectedBook(book)}
                    >
                      Ajukan Tukar
                    </Button>
                  </SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle>Pilih Buku Untuk Ditukar</SheetTitle>
                    </SheetHeader>
                    <div className="py-4">
                      <p className="text-sm mb-4">
                        Pilih buku yang ingin kamu tukar dengan "{selectedBook?.title}"
                      </p>
                      {/* Mock owned books - would be dynamically loaded in production */}
                      <div className="space-y-2">
                        <Card className="p-2">
                          <p className="font-medium">Rich Dad Poor Dad</p>
                          <p className="text-sm text-gray-600">Kondisi: Baik</p>
                        </Card>
                        <Card className="p-2">
                          <p className="font-medium">Think and Grow Rich</p>
                          <p className="text-sm text-gray-600">Kondisi: Sangat Baik</p>
                        </Card>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BookExchangePage;
