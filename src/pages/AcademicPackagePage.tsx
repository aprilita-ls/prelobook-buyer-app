
import { Book } from "lucide-react";
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
}

// Mock data for academic packages
const academicPackages: AcademicPackage[] = [
  {
    id: 1,
    name: "Paket SMA IPA Kelas 12",
    description: "Lengkap untuk persiapan UTBK",
    totalPrice: 850000,
    discountedPrice: 750000,
    bookCount: 6,
    category: "SMA"
  },
  {
    id: 2,
    name: "Paket Mahasiswa Hukum Semester 1",
    description: "Buku wajib & pendukung",
    totalPrice: 1200000,
    discountedPrice: 1000000,
    bookCount: 8,
    category: "Universitas"
  }
];

const AcademicPackagePage = () => {
  return (
    <div className="p-4 pb-20">
      <h1 className="text-2xl font-bold text-prelobook-blue mb-4">
        Paket Akademik
      </h1>

      <div className="grid gap-4">
        {academicPackages.map((pkg) => (
          <Card key={pkg.id} className="p-4">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold text-lg text-prelobook-blue">{pkg.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{pkg.description}</p>
                <div className="flex items-center gap-2 mb-2">
                  <Book size={16} className="text-prelobook-peach" />
                  <span className="text-sm">{pkg.bookCount} buku</span>
                </div>
                <div className="text-sm">
                  <span className="line-through text-gray-500">
                    Rp{pkg.totalPrice.toLocaleString()}
                  </span>
                  <span className="ml-2 text-prelobook-peach font-bold">
                    Rp{pkg.discountedPrice.toLocaleString()}
                  </span>
                </div>
              </div>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="text-prelobook-peach border-prelobook-peach hover:bg-prelobook-cream">
                    Lihat Isi Paket
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>{pkg.name}</SheetTitle>
                  </SheetHeader>
                  <div className="py-4">
                    <h4 className="font-medium mb-2">Daftar Buku:</h4>
                    {/* Mock book list - would be dynamically loaded in production */}
                    <ul className="space-y-2">
                      <li className="text-sm">• Matematika Wajib Kelas 12</li>
                      <li className="text-sm">• Fisika Kelas 12</li>
                      <li className="text-sm">• Kimia Kelas 12</li>
                      <li className="text-sm">• Biologi Kelas 12</li>
                    </ul>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AcademicPackagePage;
