
import { MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

interface ChatPreview {
  id: number;
  sellerName: string;
  sellerImage: string;
  lastMessage: string;
  timestamp: string;
  unread: boolean;
}

const chatPreviews: ChatPreview[] = [
  {
    id: 1,
    sellerName: "Toko Buku Cahaya",
    sellerImage: "https://images.unsplash.com/photo-1438761681033-6460ffad8d80",
    lastMessage: "Ya, masih tersedia. Kondisinya masih sangat bagus",
    timestamp: "09:32",
    unread: true,
  },
  {
    id: 2,
    sellerName: "Gramedia Official",
    sellerImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    lastMessage: "Baik, akan segera kami proses",
    timestamp: "Kemarin",
    unread: false,
  },
  {
    id: 3,
    sellerName: "Books Corner",
    sellerImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    lastMessage: "Untuk stok buku tersebut akan ready minggu depan",
    timestamp: "2 hari lalu",
    unread: false,
  },
];

const ChatListPage = () => {
  return (
    <div className="min-h-screen pb-20">
      <div className="bg-white border-b px-4 py-3">
        <h1 className="text-xl font-bold text-prelobook-blue">Riwayat Pesan</h1>
      </div>

      <div className="p-4 space-y-4">
        {chatPreviews.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <MessageCircle className="mx-auto mb-2 text-gray-400" size={32} />
            <p>Belum ada riwayat pesan</p>
          </div>
        ) : (
          chatPreviews.map((chat) => (
            <Link
              key={chat.id}
              to={`/chat/${chat.id}`}
              className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-100 relative hover:bg-gray-50 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
                <img
                  src={chat.sellerImage}
                  alt={chat.sellerName}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-prelobook-blue">{chat.sellerName}</h3>
                <p className="text-sm text-gray-600 truncate">{chat.lastMessage}</p>
              </div>
              <div className="text-right flex-shrink-0">
                <span className="text-xs text-gray-500 block mb-1">{chat.timestamp}</span>
                {chat.unread && (
                  <span className="w-2 h-2 bg-prelobook-peach rounded-full inline-block" />
                )}
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default ChatListPage;
