import { useState } from "react";
import { ClipboardList, LogOut, Settings, ShoppingBag, User } from "lucide-react";

// Updated user data
const user = {
  name: "Intan Putri",
  email: "intanputri@gmail.com",
  phone: "+62 812-3456-7890",
  address: "Jl. Sudirman No.145, Kota Malang"
};

interface ProfileMenuOption {
  icon: React.ReactNode;
  label: string;
  path?: string;
  action?: () => void;
}

const ProfilePage = () => {
  const [activeSection, setActiveSection] = useState<string>("profile");

  const menuOptions = [
    {
      icon: <User size={20} />,
      label: "Profil",
      action: () => setActiveSection("profile")
    },
    {
      icon: <ShoppingBag size={20} />,
      label: "Pesanan Saya",
      action: () => setActiveSection("orders")
    },
    {
      icon: <ClipboardList size={20} />,
      label: "Riwayat Pembelian",
      action: () => setActiveSection("history")
    },
    {
      icon: <Settings size={20} />,
      label: "Pengaturan",
      action: () => setActiveSection("settings")
    },
    {
      icon: <LogOut size={20} />,
      label: "Keluar",
      action: () => console.log("Logout clicked")
    }
  ];

  const renderProfileContent = () => {
    switch (activeSection) {
      case "profile":
        return (
          <div className="space-y-4">
            <div className="flex items-center justify-center flex-col">
              <div className="w-24 h-24 bg-prelobook-cream border-4 border-prelobook-peach rounded-full flex items-center justify-center mb-3">
                <User size={40} className="text-prelobook-blue" />
              </div>
              <h2 className="text-xl font-bold text-prelobook-blue">{user.name}</h2>
              <p className="text-gray-600">{user.email}</p>
            </div>
            
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h3 className="font-medium text-prelobook-blue mb-3">Informasi Kontak</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <p>{user.email}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Nomor Telepon</p>
                  <p>{user.phone}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Alamat</p>
                  <p>{user.address}</p>
                </div>
              </div>
              <button className="mt-4 prelobook-btn-outline w-full">
                Edit Profil
              </button>
            </div>
          </div>
        );
      case "orders":
        return (
          <div className="text-center py-8">
            <p className="text-gray-500 mb-4">Tidak ada pesanan aktif</p>
          </div>
        );
      case "history":
        return (
          <div className="text-center py-8">
            <p className="text-gray-500 mb-4">Riwayat pembelian kosong</p>
          </div>
        );
      case "settings":
        return (
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <h3 className="font-medium text-prelobook-blue mb-3">Pengaturan Akun</h3>
            <div className="space-y-4">
              <div>
                <p className="mb-1">Notifikasi</p>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" defaultChecked />
                  <span className="text-sm">Email notifikasi</span>
                </label>
                <label className="flex items-center mt-2">
                  <input type="checkbox" className="mr-2" defaultChecked />
                  <span className="text-sm">SMS notifikasi</span>
                </label>
              </div>
              <div>
                <p className="mb-1">Bahasa</p>
                <select className="w-full p-2 border rounded-md">
                  <option>Bahasa Indonesia</option>
                  <option>English</option>
                </select>
              </div>
              <button className="prelobook-btn w-full">
                Simpan Pengaturan
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="pb-20">
      <div className="p-4 bg-prelobook-cream">
        <h1 className="text-xl font-bold text-prelobook-blue">Profil</h1>
      </div>
      
      <div className="p-4">
        <div className="flex bg-white rounded-lg overflow-hidden mb-4">
          {menuOptions.slice(0, 4).map((option, index) => (
            <button
              key={index}
              className={`flex-1 p-3 flex flex-col items-center ${
                activeSection === option.label.toLowerCase() 
                  ? 'text-prelobook-peach border-b-2 border-prelobook-peach' 
                  : 'text-gray-600'
              }`}
              onClick={option.action}
            >
              {option.icon}
              <span className="text-xs mt-1">{option.label}</span>
            </button>
          ))}
        </div>
        
        {renderProfileContent()}
        
        {activeSection !== "profile" && (
          <button 
            className="mt-4 w-full p-3 bg-white rounded-lg text-red-500 flex items-center justify-center"
            onClick={() => console.log("Logout clicked")}
          >
            <LogOut size={18} className="mr-2" />
            <span>Keluar</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
