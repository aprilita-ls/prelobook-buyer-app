
import { Send, MoreVertical } from "lucide-react";
import { useState } from "react";

interface Message {
  id: number;
  content: string;
  sender: "buyer" | "seller";
  timestamp: string;
}

const ChatPage = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      content: "Halo, apakah buku Atomic Habits masih tersedia?",
      sender: "buyer",
      timestamp: "09:30"
    },
    {
      id: 2,
      content: "Ya, masih tersedia. Kondisinya masih sangat bagus, hanya dibaca sekali",
      sender: "seller",
      timestamp: "09:32"
    }
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSend = () => {
    if (newMessage.trim()) {
      setMessages([...messages, {
        id: messages.length + 1,
        content: newMessage,
        sender: "buyer",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
      setNewMessage("");
    }
  };

  return (
    <div className="h-screen flex flex-col">
      {/* Chat Header */}
      <div className="bg-white border-b px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
              alt="Seller profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="font-semibold text-prelobook-blue">Toko Buku Cahaya</h2>
            <p className="text-xs text-gray-500">Online • Biasanya membalas dalam 5 menit</p>
          </div>
        </div>
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <MoreVertical size={20} className="text-gray-500" />
        </button>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto bg-gray-50 p-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'buyer' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                  message.sender === 'buyer'
                    ? 'bg-prelobook-peach text-white'
                    : 'bg-white border border-gray-200'
                }`}
              >
                <p className="text-sm">{message.content}</p>
                <p className={`text-xs mt-1 ${
                  message.sender === 'buyer' ? 'text-white/80' : 'text-gray-500'
                }`}>
                  {message.timestamp}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Input */}
      <div className="bg-white border-t p-4">
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Ketik pesan..."
            className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-prelobook-peach/20"
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          />
          <button
            onClick={handleSend}
            disabled={!newMessage.trim()}
            className="p-2 bg-prelobook-peach text-white rounded-full disabled:opacity-50"
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
