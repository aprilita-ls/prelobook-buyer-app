
import { Book, GraduationCap } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

interface AcademicPackage {
  id: number;
  name: string;
  description: string;
  totalPrice: number;
  discountedPrice: number;
  bookCount: number;
  category: string;
  imageUrl: string;
}

const academicPackages: AcademicPackage[] = [
  {
    id: 1,
    name: "Paket SMA IPA Kelas 12",
    description: "Lengkap untuk persiapan UTBK dengan buku-buku terbaik dan terupdate",
    totalPrice: 850000,
    discountedPrice: 750000,
    bookCount: 6,
    category: "SMA",
    imageUrl: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e"
  },
  {
    id: 2,
    name: "Paket Mahasiswa Hukum Semester 1",
    description: "Buku wajib & pendukung untuk mahasiswa hukum semester awal",
    totalPrice: 1200000,
    discountedPrice: 1000000,
    bookCount: 8,
    category: "Universitas",
    imageUrl: "https://images.unsplash.com/photo-1505664194779-8beaceb93744"
  }
];

const AcademicPackagePage = () => {
  return (
    <div className="p-4 pb-20">
      <div className="flex items-center gap-2 mb-6">
        <GraduationCap size={28} className="text-prelobook-peach" />
        <h1 className="text-2xl font-bold text-prelobook-blue">
          Paket Akademik
        </h1>
      </div>

      <div className="grid gap-6">
        {academicPackages.map((pkg) => (
          <Card key={pkg.id} className="overflow-hidden">
            <div className="relative h-40">
              <img 
                src={pkg.imageUrl} 
                alt={pkg.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2 bg-prelobook-peach text-white px-3 py-1 rounded-full text-sm">
                {pkg.category}
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg text-prelobook-blue mb-2">{pkg.name}</h3>
              <p className="text-sm text-gray-600 mb-3">{pkg.description}</p>
              <div className="flex items-center gap-2 mb-3">
                <Book size={16} className="text-prelobook-peach" />
                <span className="text-sm">{pkg.bookCount} buku</span>
              </div>
              <div className="flex items-center justify-between mb-4">
                <div className="text-sm">
                  <div className="line-through text-gray-500">
                    Rp{pkg.totalPrice.toLocaleString()}
                  </div>
                  <div className="text-lg font-bold text-prelobook-peach">
                    Rp{pkg.discountedPrice.toLocaleString()}
                  </div>
                </div>
                <Sheet>
                  <SheetTrigger asChild>
                    <Button className="bg-prelobook-peach hover:bg-prelobook-peach/90">
                      Lihat Isi Paket
                    </Button>
                  </SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle>{pkg.name}</SheetTitle>
                    </SheetHeader>
                    <div className="py-4">
                      <h4 className="font-medium mb-4">Daftar Buku dalam Paket:</h4>
                      <div className="space-y-4">
                        {[1, 2, 3].map((item) => (
                          <div key={item} className="flex gap-3 items-center">
                            <div className="w-16 h-24 bg-gray-100 rounded-md overflow-hidden">
                              <img 
                                src="https://images.unsplash.com/photo-1543002588-bfa74002ed7e" 
                                alt="Book cover"
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div>
                              <h5 className="font-medium text-sm mb-1">Buku Matematika Kelas 12</h5>
                              <p className="text-sm text-gray-500">Penerbit Erlangga</p>
                            </div>
                          </div>
                        ))}
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

export default AcademicPackagePage;
